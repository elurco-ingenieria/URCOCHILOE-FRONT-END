import { Carousel } from 'antd';

const contenido = [
    {
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZKb3ujkC_haYhkKhFgscGHN0-jkWcIfOFlpiKdFYQBVc-UdYoOrcG9TOjbkQlqcoYjno&usqp=CAU',
        titulo: ' ¡Bienvenido!',
        descripcion: '¡Disfruta de nuestras Cabañas 🌿!',
    },
    {
        imagen: 'https://refugionatura.com/wp-content/uploads/2023/11/Cabana-A-Frame.jpg',
        titulo: '¡Bienvenido!',
        descripcion: '¡Disfruta de nuestras Cabañas 🌿!',
    },
    {
        imagen: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/68/94/6d/caption.jpg?w=900&h=500&s=1',
        titulo: '¡Bienvenido!',
        descripcion: '¡Disfruta de nuestras Cabañas ✨', 
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
