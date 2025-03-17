import ReactPlayer from 'react-player'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Youtube() {

    
    return (
        <Container fluid className="bg-h">
            <Row className="py-5">
                <Col className='align-self-center'>
                    <h1 className="schoolbell-bold">Watch our new trailer!</h1>
                </Col>
                <Col md='8' lg='6' xxl='4' >
                    <div className="video-container">
                        <ReactPlayer 
                            url="https://www.youtube.com/watch?v=CwP1pT6aDcM" 
                            width="100%" 
                            height="100%" 
                        />
                    </div>
                </Col>
                <Col>
                </Col>
            </Row>
        </Container>
        
    );
}

export default Youtube;