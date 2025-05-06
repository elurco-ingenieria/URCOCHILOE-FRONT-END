import { Layout, Space, Typography } from "antd";
import { HomeOutlined } from "@ant-design/icons"; // Importa el ícono de cabaña
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const { Header } = Layout;

const Navbar = () => {
    const { isAuthenticated, userRole, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <Header className="AppHeader">
            <nav style={{ display: "flex", alignItems: "center", padding: "10px" }}>
                {/* Ícono de cabaña */}
                <span style={{ display: "flex", alignItems: "center", marginRight: "8px" }}>
                    <HomeOutlined style={{ fontSize: "28px", color: "#ffffff" }} />
                </span>
                {/* Título del Navbar */}
                <Typography.Title
                    style={{
                        fontSize: "28px",
                        display: "flex",
                        alignItems: "center",
                        margin: 0,
                        color: "#f3f3f3",
                    }}
                >
                    <NavLink to="/" style={{ color: "#f3f3f3", textDecoration: "none" }}>
                        EL URCO CHILOE
                    </NavLink>
                </Typography.Title>
            </nav>
            <Space>
                {isAuthenticated ? (
                    <div style={{ display: "flex", gap: "20px" }}>
                        {userRole === "cliente" && (
                            <>
                                <NavLink to="/" className="nav-link" style={{ color: "white" }}>
                                    Inicio
                                </NavLink>
                                <NavLink to="/about" className="nav-link" style={{ color: "white" }}>
                                    Urco Chiloe
                                </NavLink>
                                <NavLink to="/cart" className="nav-link" style={{ color: "white" }}>
                                    Reservas
                                </NavLink>
                                <NavLink to="/profile" className="nav-link" style={{ color: "white" }}>
                                    Mi Perfil
                                </NavLink>
                            </>
                        )}
                        {userRole === "admin" && (
                            <>
                                <NavLink to="/" className="nav-link" style={{ color: "white" }}>
                                    Inicio
                                </NavLink>
                                <NavLink to="/admin" className="nav-link" style={{ color: "white" }}>
                                    Admin
                                </NavLink>
                            </>
                        )}
                        <NavLink
                            onClick={handleLogout}
                            className="nav-link"
                            style={{ color: "white" }}
                            to="/"
                        >
                            Cerrar sesión
                        </NavLink>
                    </div>
                ) : (
                    <div style={{ display: "flex", gap: "20px" }}>
                        <NavLink to="/" className="nav-link" style={{ color: "white" }}>
                            Inicio
                        </NavLink>
                        <NavLink to="/about" className="nav-link" style={{ color: "white" }}>
                                    Urco Chiloe
                        </NavLink>
                        <NavLink to="/login" className="nav-link" style={{ color: "white" }}>
                            Iniciar Sesión
                        </NavLink>
                        <NavLink to="/register" className="nav-link" style={{ color: "white" }}>
                            Registrarse
                        </NavLink>
                    </div>
                )}
            </Space>
        </Header>
    );
};

export default Navbar;