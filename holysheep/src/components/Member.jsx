import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

function Member({name, img, description, role}) {
    return (
        <Container className='d-flex flex-column h-100'>
            <Row className='py-2'>
                <Col className='bg-c pt-2 rounded'>
                    <h3 className='lilita-one-regular text-center'>{role}</h3>
                </Col>
            </Row>
            <Row className='align-items-center flex-fill'>
                <Col xs={12} md={3}>
                    <Image className='img-member' src={img} roundedCircle fluid/>
                    <h2 className='schoolbell-bold'>{name}</h2>
                </Col>
                <Col xs={12} md={9} className='p-4'>
                    <div className='speech-bubble l'>
                        {description}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Member;