import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import ImagenesContext from "../context/ImagenesContext";
import { useImagenes } from "../context/ImagenesContext";
import axios from "axios";
import { message } from "antd";
import AppFooter from "../components/Footer";
import ShoppinCartIcon from '@mui/icons-material/ShoppingCart';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
const apiURL = import.meta.env.VITE_API_URL;

const CheckoutPage = () => {
    const { cart, clearCart } = useCart();
    const { imagenes } = useImagenes();
    const navigate = useNavigate();

    // Estado para la información de usuario
    const [userData, setUserData] = useState({
        nombre: '',
        direccion: '',
        ciudad: '',
        email: ''
    });

    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        // Obtener el userId del almacenamiento local
        const userId = localStorage.getItem("userId");
        
        if (!userId) {
            navigate("/login");
            return;
        }

        // Obtener datos del usuario del localStorage
        const user = JSON.parse(localStorage.getItem("user"));
        
        if (user) {
            setUserData({
                nombre: user.nombre || '',
                direccion: user.direccion || '',
                ciudad: user.ciudad || '',
                email: user.email || ''
            });
        }
    }, [navigate]);

    // Calcular el precio total
    const totalPrice = cart.reduce((total, product) => 
        total + product.precio * product.quantity, 0
    ).toFixed(2);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckout = async () => {
        try {
            if (!userData.nombre || !userData.direccion || !userData.ciudad || !userData.email) {
                alert("Por favor confirme los datos De Contacto!!");
                return;
            }
            const userId = localStorage.getItem("userId");
            
            const detalle = cart.map(item => ({
                id_producto: item.id_producto,
                nombre_producto: item.nombre_producto,  
                cantidad: item.quantity,
                precio_unitario: parseFloat(item.precio)
            }));

            const orderData = {
                id_usuario: parseInt(userId),
                nombre_cliente: userData.nombre,
                email_cliente: userData.email,
                detalle, 
                total: parseFloat(totalPrice),
                estado: "pending",
                direccion: userData.direccion,
            };

            const response = await axios.post(`${apiURL}/pedidos`, orderData);
            
            if (!response.status === 201) {
                throw new Error(response.error || 'Error al procesar la reserva');
            }

            // Si todo salió bien, limpiar el carrito
            clearCart();
            message.success("🎉 reserva realizada. ¡Gracias por tu reserva! 🎉");
            navigate("/");

        } catch (error) {
            console.error("Error al procesar la reserva:", error);
            alert("Hubo un error al procesar la reserva. Por favor, intenta nuevamente.");
        }
    };

    return (
        <>
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "40px"
        }}>
            <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>Confirmación de Reserva</h2>

            {/* Resumen de productos */}
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "20px",
                maxWidth: "1000px",
                width: "100%",
                marginBottom: "30px"
            }}>
                {cart.map((product) => {
                    const productoImagen = imagenes?.find(img => img.id_producto === product.id_producto)?.url;

                    return (
                    <div key={product.id_producto} style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        padding: "15px",
                        border: "1px solid #ddd",
                        borderRadius: "12px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        backgroundColor: "white",
                        textAlign: "center"
                    }}>
                        <img
                            src={productoImagen}
                            alt={product.nombre_producto}
                            style={{
                                width: "100%",
                                maxWidth: "150px",
                                height: "100px",
                                objectFit: "cover",
                                borderRadius: "8px"
                            }}
                        />
                        <h4 style={{ margin: "10px 0" }}>{product.nombre_producto}</h4>
                        <p style={{ fontSize: "16px", color: "#555" }}>Cantidad: {product.quantity}</p>
                        <p style={{ fontSize: "18px", fontWeight: "bold" }}>💲{(product.precio * product.quantity).toFixed(2)}</p>
                    </div>
                    );
                })}
            </div>

            {/* Información de envío/ahora reserva */}
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "15px",
                width: "100%",
                maxWidth: "600px",
                marginBottom: "30px",
                padding: "20px", // Espaciado interno
                borderRadius: "12px", // Esquinas redondeadas
                border: "1px solid #ddd", // Borde del contenedor
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Sombra para un diseño más atractivo
                backgroundColor: "white" // Fondo blanco
            }}>
                <h4 style={{ marginBottom: "15px" }}>Datos de contacto para la Reserva</h4>
                {[
                    { field: 'nombre', label: 'Nombre' },
                    { field: 'email', label: 'Email' },
                    { field: 'direccion', label: 'Dirección' },
                    { field: 'ciudad', label: 'Ciudad' }
                ].map(({ field, label }) => (
                    <div key={field}>
                        <input
                            type={field === 'email' ? 'email' : 'text'}
                            name={field}
                            placeholder={label}
                            value={userData[field]}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                            style={{
                                padding: "10px",
                                borderRadius: "8px",
                                border: "1px solid #ddd",
                                fontSize: "16px",
                                width: "400px",
                                minWidth: "300px",
                                maxWidth: "600px"
                            }}
                        />
                    </div>
                ))}
            </div>

            {/* Precio Total */}
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                maxWidth: "200px",
                marginBottom: "30px",
                fontSize: "20px",
                fontWeight: "bold"
            }}>
                <span>Total</span>
                <span>💲{totalPrice}</span>
            </div>

            {/* Botones */}
            <div style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px"
            }}>
                
                {isEditing ? (
                    <button style={{ display: "flex", gap: "8px", alignItems: "center", background: "transparent", color: "#1F7D53", border: "2px solid #1F7D53" }} onClick={() => setIsEditing(false)}>
                        <SaveIcon style={{ fontSize: "20px" }} />
                        Guardar Cambios
                    </button>
                ) : (
                    <button style={{ display: "flex", gap: "8px", alignItems: "center" }} onClick={() => setIsEditing(true)}>
                        <EditIcon style={{ fontSize: "20px" }} />
                        Confirmar Datos De Contacto
                    </button>
                )}

                <button style={{ display: "flex", gap: "8px", alignItems: "center" }} onClick={handleCheckout}>
                    <ShoppinCartIcon style={{ fontSize: "20px" }} />
                    Confirmar Reserva
                </button>
            </div>
            <br />
            <br />
            <button style={{ display: "flex", gap: "8px", alignItems: "center", background: "transparent", color: "#1F7D53", border: "2px solid #1F7D53" }}>
                    <ShoppinCartIcon style={{ fontSize: "20px" }} />
                    <Link to="/cart" style={{ color: "#1F7D53", textDecoration: "none" }}>
                    Volver a las Reservas
                    </Link>
                </button>
        </div>
        <AppFooter />
        </>
    );
};

export default CheckoutPage;
