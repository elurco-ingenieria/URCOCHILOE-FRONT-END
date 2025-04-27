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
        {
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
    ];

    return (
        <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <h1 style={{ marginBottom: "20px", color: "#1F7D53" }}>Quiénes Somos</h1>
            <p style={{ fontSize: "18px", lineHeight: "1.6", color: "#333" }}>
                Bienvenido a Alojamientos Rokadan, donde la belleza de Chiloé se encuentra con la comodidad y el estilo.
                Somos la conexión perfecta entre los viajeros y los diversos alojamientos que la región tiene para ofrecer.
            </p>
            <p style={{ fontSize: "18px", lineHeight: "1.6", color: "#333" }}>
                Somos una empresa dedicada a ofrecer las mejores opciones de alojamiento en la región de Chiloé. 
                Nuestro objetivo es conectar a los viajeros con alojamientos únicos, cómodos y accesibles, 
                mientras promovemos el turismo local y apoyamos a los pequeños negocios de la zona.
            </p>
            <p style={{ fontSize: "18px", lineHeight: "1.6", color: "#333" }}>
                Creemos en la importancia de brindar experiencias inolvidables a nuestros clientes, 
                ofreciendo un servicio personalizado y de alta calidad. Nuestro equipo está comprometido 
                con la excelencia y trabaja arduamente para garantizar que cada estancia sea especial.
            </p>
            <p style={{ fontSize: "18px", lineHeight: "1.6", color: "#333" }}>
                Gracias por confiar en nosotros y permitirnos ser parte de tus aventuras en Chiloé.
            </p>
            <img 
                src="https://octaviaviajando.com/wp-content/uploads/2021/11/castro_palafitos_octaviaviajando.jpg" 
                alt="Imagen representativa de Chiloé" 
                style={{ marginTop: "20px", width: "100%", maxWidth: "600px", borderRadius: "8px" }}
            />


                    <img 
                        src="https://images.adsttc.com/media/images/5f20/ba7e/b357/653d/3a00/0729/slideshow/FEATURE.jpg?1595980398" 
                        alt="Cabaña" 
                        className="img-fluid rounded mt-4"
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