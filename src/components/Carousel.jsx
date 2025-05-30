import { Carousel } from 'antd';

const contenido = [
    {
        imagen: 'https://scontent.fyai4-1.fna.fbcdn.net/v/t51.75761-15/479718782_18131032597400997_1163700549873712989_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGqu2kHLKvIf07gOxbow4cFocpAyzJnq2OhykDLMmerY0XnpdZagY9Vt6bBDRWfCL2DzsA7uzkQXGcuo87yuDi2&_nc_ohc=pLP-3vOCK30Q7kNvwE5dBu-&_nc_oc=AdnI-oAH__nQX3lhJl3AEtgGYWZ3N34Pmjj_RDoK6bZq10DH--yf1QjuH0t5VZFAG-Y&_nc_zt=23&_nc_ht=scontent.fyai4-1.fna&_nc_gid=Pdpxejqo_mpgu8JgdM4c5g&oh=00_AfLIbX0SaxNbH31n78CQTV8-LzMYsci2fxVCacaGzE0E7A&oe=681F5C4D',
        titulo: ' ¡Bienvenido A Ancud - Isla Chiloé!',
        descripcion: '¡Disfruta de nuestros Alojamientos 🌿!',
    },
    {
        imagen: 'https://scontent.fyai4-1.fna.fbcdn.net/v/t51.75761-15/480775261_18131277382400997_7826167708746121668_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGoHCRCjpRBCXzfxTeJmoVLmRb0YCXi1niZFvRgJeLWeMWHwuomxyZkQolOVHIItEdv-Q49bgVe5YFJrXRfFdL4&_nc_ohc=2T2KH59cD6sQ7kNvwFtRP2Z&_nc_oc=AdlvUyeRuK7LlLIexycg9yFSYT39avzbrrq7ll74KwR9LGrp_pCX7fraWRRXDNZQY9A&_nc_zt=23&_nc_ht=scontent.fyai4-1.fna&_nc_gid=vAjL2XyAizLv8Cx7OfYNcw&oh=00_AfKCauc_1LHvHslQHLma3tMkBT-nG18gUE7YlgMf_FHz1Q&oe=681F3331',
        titulo: ' ¡Bienvenido A Ancud - Isla Chiloé!',
        descripcion: '¡Disfruta de nuestros Alojamientos 🌿!',
    },
    {
        imagen: 'https://scontent.fyai4-1.fna.fbcdn.net/v/t39.30808-6/478842078_936096168681909_4905114757681202818_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEhCsRjT8Y3TxMagjBBSF7E8X-E8knKJTnxf4TyScolObftofFxFedNRLzMm5UVP7ZsaMIiyr4aH_Jk-mkEokn4&_nc_ohc=vkUM4annZFEQ7kNvwEAjohu&_nc_oc=AdktwreMdvJ7A_4vWr2TngbeiIgs8u3sZPXLicOg4ya2s5FAUMo-flLKJolt4u-BYjc&_nc_zt=23&_nc_ht=scontent.fyai4-1.fna&_nc_gid=URH7BwBq7eedCITHGzg0UA&oh=00_AfLNpLv3H3W4o6SEmcUGTWN5-SfXVanN6kbWbQFPDo92sg&oe=68207736',
        titulo: ' ¡Bienvenido A Ancud - Isla Chiloé!',
        descripcion: '¡Disfruta de nuestros Alojamientos 🌿!',
    },
];

const BannerCarruselAntd = () => {
    return (
        <Carousel autoplay effect="fade">
        {contenido.map((item, index) => (
            <div key={index} className="banner-slide">
            <img src={item.imagen} alt={item.titulo} className="banner-img" />
            <div className="banner-text">
                <h2>{item.titulo}</h2>
                <p>{item.descripcion}</p>
            </div>
            </div>
        ))}
        </Carousel>
    );
};

export default BannerCarruselAntd;
