import Card from 'react-bootstrap/Card';

function InfoCard({title, text, img}) {
    return (
        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={img}/>
            <Card.Body>
                <Card.Title className='schoolbell-bold'><h3>{title}</h3></Card.Title>
                <Card.Text>
                {text}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default InfoCard;