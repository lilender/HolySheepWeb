import NavBar from './NavBar';
import Footer from './Footer';
import Member from './Member';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import SocialMedia from './SocialMedia';

function AboutUs() {
    return (
        <>
            <NavBar />
            <div className='bg-h py-5 text-center'>
                <h1 className='lilita-one-regular'>Our Team</h1>
                <br></br>
                <Container>
                    <Row>
                        <Col xs={12} xl={6}>
                            <Member name="Heber" img="img/member1.jpg" role="Leader/Technical Artist" description="I’m Heber Pérez, a 3D environment artist. I’ve been working in the field since 2020, and I love creating worlds that tell a story on their own. It’s magical to see how they can come to life in any project. I enjoy modeling and creating hard surface props for 3D environments."/>
                        </Col>
                        <Col xs={12} xl={6}>
                            <Member name="Itzel" img="img/member2.jpg" role="3D Artist" description="I'm Itzel Vargas, a 3D artist. I've been working in the field since 2022, I love modeling and texturizing, making the objects speak for themselves with unique characteriscs even if they're just fences or buckets, giving life through colors to complement them; it's a marvelous thing."/>
                        </Col>
                        <Col xs={12} xl={6}>
                            <Member name="Marla" img="img/member3.jpg" role="Developer" description="Hi, I'm a web developer with no current specialty. I'm pretty comfortable working with front-end, back-end and databases, but I'm aware I still have a long way to go. I've also made a couple small games, since I love making my ideas come to life through code."/>
                        </Col>
                        <Col xs={12} xl={6}>
                            <Member name="Ana Sofía" img="img/member4.jpg" role="2D Artist" description=""/>
                        </Col>
                        <Col xs={12} xl={6}>
                            <Member name="Roberto" img="img/member5.jpg" role="Developer" description="My name is Roberto Ponce and I'm a videogame programmer! Sometimes it's surreal to say that since it has been my dream since I was a child. I love videogames and I love to code. I truly believe there's still so many possibilities left since it's such a unique medium. P.D. I'm a huge Final Fantasy nerd."/>
                        </Col>
                        <Col xs={12} xl={6}>
                            <Member name="Aldo" img="img/member6.jpg" role="3D Artist" description=""/>
                        </Col>
                    </Row>
                </Container>
            </div>
            <SocialMedia />
            <Footer />
        </>
    );
}

export default AboutUs;