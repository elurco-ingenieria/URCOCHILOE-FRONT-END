import { Layout } from "antd";
import { Typography, Space } from "antd";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import CopyrightIcon from '@mui/icons-material/Copyright'; // Importa el ícono de Copyright

const { Footer } = Layout;

const AppFooter = () => {
    return (
        <Footer className="AppFooter">
            <Space>
                <Typography.Link href="tel:+56222333444" style={{ color: "white", display: "flex", gap: "2px", alignItems: "center" }}>
                    <WhatsAppIcon style={{ fontSize: "20px" }} />
                    {/* WhatsApp */}
                </Typography.Link>
                <Typography.Link href="mailto:alojamientosrokadan@gmail.com"
                style={{ color: "white", display: "flex", gap: "2px", alignItems: "center" }}>
                    <EmailIcon style={{ fontSize: "20px" }} />
                    {/* Email */}
                </Typography.Link>
                <Typography.Link href="https://www.instagram.com/alojamientosrokadan/"
                style={{ color: "white", display: "flex", gap: "2px", alignItems: "center" }}>
                    <InstagramIcon style={{ fontSize: "20px" }} />
                    {/* Instagram */}
                </Typography.Link>
                <Typography.Link href="https://www.twitter.com/alojamientosrokadan"
                style={{ color: "white", display: "flex", gap: "2px", alignItems: "center" }}>
                    <TwitterIcon style={{ fontSize: "20px" }} />
                    {/* Twitter */}
                </Typography.Link>
                <Typography.Link href="https://www.facebook.com/alojamientosrokadan"
                style={{ color: "white", display: "flex", gap: "2px", alignItems: "center" }}>
                    <FacebookIcon style={{ fontSize: "20px" }} />
                    {/* Facebook */}
                </Typography.Link>
            </Space>
            <Space>
                {/* Ícono de Copyright */}
                <Typography.Link style={{ color: "white", display: "flex", gap: "2px", alignItems: "center" }}>
                    <CopyrightIcon style={{ fontSize: "20px" }} />
                    Todos los derechos reservados Rokadan 2025
                </Typography.Link>
            </Space>
        </Footer>
    );
};

export default AppFooter;