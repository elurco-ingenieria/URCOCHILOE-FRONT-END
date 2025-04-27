import { Carousel } from 'antd';

const contenido = [
    {
        imagen: 'https://images.adsttc.com/media/images/61ca/2e16/b038/0601/6505/32e8/large_jpg/casa-bosque-jardin.jpg?1640640053',
        titulo: ' ¡Bienvenido!',
        descripcion: '¡Disfruta de nuestros Alojamientos 🌿!',
    },
    {
        imagen: 'https://www.madera21.cl/wp-content/uploads/2020/08/Casa-Bosque_Acceso-2.jpg',
        titulo: '¡Bienvenido!',
        descripcion: '¡Disfruta de nuestras Alojamientos 🌿!',
    },
    {
        imagen: 'https://images.adsttc.com/media/images/5fb2/eec9/63c0/1779/5e00/016d/large_jpg/TIFF-LAC-BROME-12.jpg?1605562023',
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
