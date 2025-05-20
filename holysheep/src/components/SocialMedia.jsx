import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function SocialMedia() {
    return (
        <Container fluid className="bg-f py-5">
            <Row>
                <Col className='text-center'>
                    <h1 className="lilita-one-regular">Holy Sheep</h1>
                    <h2 className="schoolbell-bold">Follow us on social media!</h2>
                    <style type="text/css">
                        {`
                        .bi {
                            font-size: 2rem;
                            margin: 0 1vw;
                        }
                        .btn-icon {
                        }
                        .btn-icon:hover {
                            color: #F7F0D4;
                        }
                        `}
                    </style>
                    <Button href='https://youtu.be/fXpvB-2qGoE' variant='icon'>
                        <i className="bi bi-youtube"></i>
                    </Button>
                    <Button href='https://www.facebook.com/profile.php?id=61557188455429' variant='icon'>
                        <i className="bi bi-facebook"></i>
                    </Button>
                    <Button href='https://www.instagram.com/quetzal.games/' variant='icon'>
                        <i className="bi bi-instagram"></i>
                    </Button>
                    <Button href='https://x.com/Quetzal_Games_' variant='icon'>
                        <i className="bi bi-twitter"></i>
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
export default SocialMedia;