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
                <Container>
                    <Row>
                        <Col xs={12} xl={6}>
                            <Member name="Heber" img="img/member1.jpg" role="Leader/Technical Artist" description="I’m Heber Pérez, a 3D environment artist. I’ve been working in the field since 2020, and I love creating worlds that tell a story on their own. It’s magical to see how they can come to life in any project. I enjoy modeling and creating hard surface props for 3D environments. I hope to work on the videogame industry someday."/>
                        </Col>
                        <Col xs={12} xl={6}>
                            <Member name="Itzel" img="img/member2.jpg" role="3D Artist" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc libero ultricies nunc, nec ultricies nunc libero nec libero."/>
                        </Col>
                        <Col xs={12} xl={6}>
                            <Member name="Marla" img="img/member3.jpg" role="Developer" description="Hi, I'm a web developer with no current specialty. I'm pretty comfortable working with front-end, back-end and databases, but I'm aware I still have a long way to go. I've also made a couple small games, since I love making my ideas come to life through code."/>
                        </Col>
                        <Col xs={12} xl={6}>
                            <Member name="Ana Sofía" img="img/member4.jpg" role="2D Artist" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc libero ultricies nunc, nec ultricies nunc libero nec libero."/>
                        </Col>
                        <Col xs={12} xl={6}>
                            <Member name="Roberto" img="img/member5.jpg" role="Developer" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc libero ultricies nunc, nec ultricies nunc libero nec libero."/>
                        </Col>
                        <Col xs={12} xl={6}>
                            <Member name="Aldo" img="img/member6.jpg" role="3D Artist" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc libero ultricies nunc, nec ultricies nunc libero nec libero."/>
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