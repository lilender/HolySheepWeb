import NavBar from './NavBar';
import MainPic from './MainPic';
import Youtube from './Youtube';
import MainInfo from './MainInfo';
import Footer from './Footer';
import SocialMedia from './SocialMedia';

function Home() {
    return (
        <>
            <NavBar />
            <MainPic />
            <Youtube />
            <div className="bg-a py-3">
                <MainInfo order="order-md-last" img="img/test1.jpg" text="Holy Sheep es un juego multijugador en el que dos pastores se enfrentan en un duelo por conseguir la mayor cantidad de ovejas."/>
                <MainInfo order="order-md-first" img="img/test2.jpg" text="Holy Sheep es un juego multijugador en el que dos pastores se enfrentan en un duelo por conseguir la mayor cantidad de ovejas."/>
                <MainInfo order="order-md-last" img="img/test3.jpg" text="Holy Sheep es un juego multijugador en el que dos pastores se enfrentan en un duelo por conseguir la mayor cantidad de ovejas."/>
            </div>
            <SocialMedia />
            <Footer />
        </>

    )
}

export default Home;
