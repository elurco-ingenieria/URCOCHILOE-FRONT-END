import { useState } from "react";
import { Input, Button, Form, message } from "antd";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
//import users from "../data/usuarios.json";
import AppFooter from "../components/Footer";
import LoginIcon from '@mui/icons-material/Login';
import axios from "axios";
const apiURL = import.meta.env.VITE_API_URL;

const LoginPage = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (email && password) {
      try {
        //const response = await axios.post("http://localhost:3000/api/auth/login", {
        const response = await axios.post(`${apiURL}/auth/login`, {
          email,
          password,
        });

        const { usuario, token } = response.data;

        if (!usuario || !token) {
          message.error("Respuesta inválida del servidor.");
          return;
        }

        localStorage.setItem("token", token);
        localStorage.setItem("userId", usuario.id_usuario);
        localStorage.setItem("user", JSON.stringify(usuario));
        login(usuario);

      if (usuario.rol === "admin") {
        navigate("/admin");
      } else {
        navigate("/profile");
      }
    } catch (error) {
      if (error.response.status === 401) {
        message.error("Correo electrónico o contraseña incorrectos.");
      } else {
        message.error("Hubo un error al iniciar sesión. Intenta nuevamente.");
      }
    }
  }
};

  return (
    <>
      <div
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundImage: "url('https://wallpapers.com/images/hd/hotel-background-2qosz2h6xb1xpnka.jpg')", // Ruta de la imagen de fondo
          backgroundSize: "cover", // Ajusta la imagen para cubrir todo el fondo
          backgroundPosition: "center", // Centra la imagen
          backgroundRepeat: "no-repeat", // Evita que la imagen se repita
        }}
      >
        <div
          style={{
            padding: "20px",
            width: "360px",
            borderRadius: "12px", // Esquinas redondeadas
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Sombra para el recuadro
            backgroundColor: "white", // Fondo blanco
            opacity: 0.95, // Ligera transparencia para resaltar el fondo
          }}
        >
          <h3 style={{ borderBottom: "2px solid #1F7D53", paddingBottom: "8px" }}>
            Iniciar Sesión
          </h3>
          <Form onFinish={handleSubmit} style={{ width: "100%" }}>
            <Form.Item name="email">
              <Input
                type="email"
                value={email}
                placeholder="Correo electrónico"
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ borderRadius: "0" }}
              />
            </Form.Item>
            <Form.Item name="password">
              <Input.Password
                value={password}
                placeholder="Contraseña"
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ borderRadius: "0" }}
              />
            </Form.Item>
            <Form.Item style={{ display: "flex", justifyContent: "center" }}>
              <Button
                className="Button"
                htmlType="submit"
                type="secondary"
                style={{
                  display: "flex",
                  gap: "8px",
                  alignItems: "center",
                  padding: "12px 32px 12px 12px",
                  justifyContent: "center",
                  width: "100%",
                  borderRadius: "0",
                }}
              >
                <LoginIcon style={{ fontSize: "20px" }} />
                Iniciar Sesión
              </Button>
            </Form.Item>
            <Form.Item>
              <Button
                className="Button"
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "12px 12px 12px 12px",
                  justifyContent: "center",
                  backgroundColor: "transparent",
                  color: "#1F7D53",
                  border: "2px solid #1F7D53",
                  width: "100%",
                  borderRadius: "0",
                }}
                onClick={() => navigate("/register")}
              >
                Crear cuenta
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <AppFooter />
    </>
  );
};

export default LoginPage;
