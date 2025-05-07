import { useState } from "react";
import { Input, Button, Form, message } from "antd";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
//import users from "../data/usuarios.json";
import AppFooter from "../components/Footer";
import LoginIcon from '@mui/icons-material/Login';
import axios from "axios";
const apiURL = import.meta.env.VITE_API_URL;


const About = () => {
    const comentarios = [
      /*  {
            nombre: "Juan Pérez",
            comentario: "¡Excelente servicio! Mi experiencia en Chiloé fue inolvidable gracias a Alojamientos Rokadan.",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRExvkt9t5ziKNqqRY0kmqMVRJiyYdiwPNskw&s", // ruta de la imagen
        },
        {
            nombre: "María González",
            comentario: "Los alojamientos fueron perfectos y el equipo siempre estuvo atento a nuestras necesidades.",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRExvkt9t5ziKNqqRY0kmqMVRJiyYdiwPNskw&s", // ruta de la imagen
        },
        {
            nombre: "Carlos López",
            comentario: "Recomiendo totalmente este servicio. Todo fue impecable y muy profesional.",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPu7PtWmoU2qTAAwE3DfdLfCIXn9VS-0i13Q&s", // ruta de la imagen
        },
        */
    ];

    return (
        <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <h1 style={{ marginBottom: "20px", color: "#1F7D53" }}>Quiénes Somos</h1>
            <p style={{ fontSize: "18px", lineHeight: "1.6", color: "#333" }}>
            Bienvenidos a Urco Chiloé

                En el corazón de Ancud, Chiloé, nace Urco Chiloé, un espacio acogedor que reúne la calidez del sur con la magia del archipiélago. Somos una empresa familiar dedicada a brindar experiencias únicas de descanso y conexión con la naturaleza, a través de nuestras cómodas cabañas equipadas y nuestro encantador hostal con atención personalizada.

                Ubicados en un entorno privilegiado, rodeados de paisajes típicos chilotes y a pasos de atractivos turísticos, en Urco Chiloé nos comprometemos a ofrecer un servicio cercano, seguro y de calidad, ideal tanto para viajeros que buscan desconexión como para quienes exploran Chiloé por trabajo, cultura o aventura.

                Ya sea que vengas en pareja, en familia o con amigos, te invitamos a vivir la autenticidad de Chiloé con nosotros.
                Urco Chiloé: Descanso con alma chilota.            </p>
            
            <img 
                src="https://scontent.fyai4-1.fna.fbcdn.net/v/t39.30808-6/465800829_122094452792616243_4934034915940496865_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF5C889GNIMgEY4F-zYs3cTEexo1BhCKRkR7GjUGEIpGWgQFYjbLMLN5go7HgafAygwqelxByl5e3CFUJ5ajucs&_nc_ohc=07UaWgeYiGoQ7kNvwG404u9&_nc_oc=AdnXpocqaJmJZ7k5nJFA6COZWZ5ZgjGlCveF-1IeFNdKbgyH-Wq09BzQHGQBip0opCw&_nc_zt=23&_nc_ht=scontent.fyai4-1.fna&_nc_gid=G8mrz2BfdUmG9HQJlfUxXg&oh=00_AfJXpKJtsW9h09hYw7rrwf5QZzUU2XTSKuNZFrHk5hVJsg&oe=68208DE7" 
                alt="Imagen representativa de Chiloé" 
                style={{ marginTop: "20px", width: "100%", maxWidth: "600px", borderRadius: "8px" }}
            />
            

            {/* Sección de comentarios */}
            <div style={{ marginTop: "40px" }}>
                <h2 style={{ marginBottom: "20px", color: "#1F7D53" }}>Comentarios de nuestros clientes</h2>
                <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "20px" }}>
                    {comentarios.map((comentario, index) => (
                        <div
                            key={index}
                            style={{
                                maxWidth: "250px",
                                textAlign: "center",
                                border: "1px solid #ddd",
                                borderRadius: "8px",
                                padding: "20px",
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                            }}
                        >
                            <img
                                src={comentario.imagen}
                                alt={`Foto de ${comentario.nombre}`}
                                style={{
                                    width: "80px",
                                    height: "80px",
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                    marginBottom: "10px",
                                }}
                            />
                            <h3 style={{ fontSize: "18px", color: "#1F7D53", marginBottom: "10px" }}>
                                {comentario.nombre}
                            </h3>
                            <p style={{ fontSize: "16px", color: "#555", marginBottom: "10px" }}>
                                {comentario.comentario}
                            </p>
                            <div style={{ color: "#FFD700", fontSize: "18px" }}>
                                {"★".repeat(5)} {/* 5 estrellas */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;




















/* const About = () => {
    return (
    <div>
        <h1>About Page</h1>
    </div>
    );
};

export default About;  // Asegúrate de exportarlo como default

*/