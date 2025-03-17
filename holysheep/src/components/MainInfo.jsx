import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

function MainInfo( {order, img, text} ) {
    return (
        <div className="py-2">
            <Container>
                <Row className='bg-b rounded p-2'>
                    <Col xs="12" md="7" xxl="5" className='p-0'>
                        <style type="text/css">
                            {`
                            .img-maininfo {
                                height: 100%;
                                width: 100%;
                                object-fit: cover;
                            }
                            `}
                        </style>
                        <Image className='img-maininfo' src={img} thumbnail/>
                    </Col>
                    <Col xs="12" md="5" xxl="7" className={` d-flex align-items-center ${order}`}>
                        <style type="text/css">
                            {`
                            .h2-main {
                                font-size: 1.6rem;
                                color: white;
                            }
                            `}
                        </style>
                        <h2 className='h2-main schoolbell-bold p-3 m-0'>{text}</h2>
                    </Col>
                </Row>
            </Container>
        </div>
        
    );
}

export default MainInfo;