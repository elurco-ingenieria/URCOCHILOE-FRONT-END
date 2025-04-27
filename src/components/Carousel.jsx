import { Carousel } from 'antd';

const contenido = [
    {
        imagen: 'https://images.adsttc.com/media/images/61ca/2e16/b038/0601/6505/32e8/large_jpg/casa-bosque-jardin.jpg?1640640053',
        titulo: ' ¡Bienvenido!',
        descripcion: '¡Disfruta de nuestros Alojamientos 🌿!',
    },
    {
        imagen: 'https://refugionatura.com/wp-content/uploads/2023/11/Cabana-A-Frame.jpg',
        titulo: '¡Bienvenido!',
        descripcion: '¡Disfruta de nuestras Alojamientos 🌿!',
    },
    {
        imagen: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/68/94/6d/caption.jpg?w=900&h=500&s=1',
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
