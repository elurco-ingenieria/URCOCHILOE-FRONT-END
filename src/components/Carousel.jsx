import { Carousel } from 'antd';

const contenido = [
    {
        imagen: 'https://scontent.fyai4-1.fna.fbcdn.net/v/t51.75761-15/479718782_18131032597400997_1163700549873712989_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGqu2kHLKvIf07gOxbow4cFocpAyzJnq2OhykDLMmerY0XnpdZagY9Vt6bBDRWfCL2DzsA7uzkQXGcuo87yuDi2&_nc_ohc=pLP-3vOCK30Q7kNvwE5dBu-&_nc_oc=AdnI-oAH__nQX3lhJl3AEtgGYWZ3N34Pmjj_RDoK6bZq10DH--yf1QjuH0t5VZFAG-Y&_nc_zt=23&_nc_ht=scontent.fyai4-1.fna&_nc_gid=Pdpxejqo_mpgu8JgdM4c5g&oh=00_AfLIbX0SaxNbH31n78CQTV8-LzMYsci2fxVCacaGzE0E7A&oe=681F5C4D',
        titulo: ' ¡Bienvenido A Ancud - Isla Chiloé!',
        descripcion: '¡Disfruta de nuestros Alojamientos 🌿!',
    },
    {
        imagen: 'https://scontent.fyai4-1.fna.fbcdn.net/v/t51.75761-15/480775261_18131277382400997_7826167708746121668_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGoHCRCjpRBCXzfxTeJmoVLmRb0YCXi1niZFvRgJeLWeMWHwuomxyZkQolOVHIItEdv-Q49bgVe5YFJrXRfFdL4&_nc_ohc=2T2KH59cD6sQ7kNvwFtRP2Z&_nc_oc=AdlvUyeRuK7LlLIexycg9yFSYT39avzbrrq7ll74KwR9LGrp_pCX7fraWRRXDNZQY9A&_nc_zt=23&_nc_ht=scontent.fyai4-1.fna&_nc_gid=vAjL2XyAizLv8Cx7OfYNcw&oh=00_AfKCauc_1LHvHslQHLma3tMkBT-nG18gUE7YlgMf_FHz1Q&oe=681F3331',
        titulo: '¡Bienvenido!',
        descripcion: '¡Disfruta de nuestras Alojamientos 🌿!',
    },
    {
        imagen: 'https://scontent.fyai4-1.fna.fbcdn.net/v/t39.30808-6/473672580_122116298426616243_5082192132296299461_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFJUPawwGtLNbFapx7GsLrewTycRWgS6QHBPJxFaBLpAWvBrKbYS8EW70IahNX50GiBLsoGh7iJWkpgOT-bq-qw&_nc_ohc=O5oioZSV0V0Q7kNvwG00N6G&_nc_oc=Adl5klsU-hFp2ZD3-ErVvS50TyCWscUFpLppoN8i1-w68ptUmT2kzbPZU7BrAlTTqrA&_nc_zt=23&_nc_ht=scontent.fyai4-1.fna&_nc_gid=JflQG2EWOSGIJ91wxTGIzA&oh=00_AfIqwIxOvFFPfEjrrEpj4JjXsVKsZoreOwYSkoCnJvsyfA&oe=681F5A42',
        titulo: '¡Bienvenido!',
        descripcion: '¡Disfruta de nuestras Alojamientos ✨', 
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
