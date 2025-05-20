import NavBar from './NavBar';
import MainPic from './MainPic';
import Youtube from './Youtube';
import MainInfo from './MainInfo';
import Footer from './Footer';
import SocialMedia from './SocialMedia';

function Home() {
    return (
        <div>
            <NavBar />
            <MainPic />
            <Youtube />
            <div className="bg-a py-3">
                <MainInfo order="order-md-last" img="/holysheep/images/render1.jpg" text="Holy Sheep es un juego multijugador en el que dos pastores se enfrentan en un duelo por conseguir la mayor cantidad de ovejas."/>
                <MainInfo order="order-md-first" img="/holysheep/images/render2.jpg" text="Consigue la mayor cantidad de ovejas antes de que se te acabe el tiempo, y sobrevive con el ultimo y mas preciado recurso de nuestro universo... ¡LAS OVEJAS!"/>
                <MainInfo order="order-md-last" img="/holysheep/images/render3.jpg" text="¡Ordena tu copia de Holy Sheep hoy y froma parte de la comunidad!"/>
            </div>
            <SocialMedia />
            <Footer />
        </div>

    )
}

export default Home;
