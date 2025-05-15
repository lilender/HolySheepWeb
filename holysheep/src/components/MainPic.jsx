import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

function MainPic() {

    return (
        <>
        <style type="text/css">
            {`
            .btn-main {
                background-color: transparent;
                font-size: 4vw;
                font-family: 'Lilita One', cursive;
            }
            .btn-main:hover {
                color: #595D5F;
            }
            `}
        </style>
        <Container fluid className="bg-g">
            <Row>
                <Col xs='0' md='2' xxl='3'></Col>
                <Col className='position-relative'>
                    <Image src="/holysheep/images/logo.png" alt="HolySheepLogo" fluid/>
                    <Button variant='main' className='position-absolute bottom-0 start-50 translate-middle-x'>Shop Now</Button>
                </Col>
                <Col xs='0' md='2' xxl='3'></Col>
            </Row>
        </Container>
        </>
    );
}
export default MainPic;