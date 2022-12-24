// Styles
import './ItemListContainer.css';

// Components

// Components Bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const ItemListContainer = (props) => {
    return (
        <main>
            <div className="greeting">
                <p>{props.greeting}</p>
            </div>
            <section className='tarjetasProducto'>
                <Card style={{ width: '18rem' }} border="info">
                    <Card.Body>
                        <Card.Title>Lord of the Rings (Paperback)</Card.Title>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Card.Text>
                                $7000
                                </Card.Text>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button variant="primary">Comprar</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} border="info">
                    <Card.Body>
                        <Card.Title>Cambridge International AS & A Level Biology Practical Workbook</Card.Title>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Card.Text>
                                    $6700
                                </Card.Text>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button variant="primary">Comprar</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} border="info">
                    <Card.Body>
                        <Card.Title>Santa Post</Card.Title>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Card.Text>
                                $4000
                                </Card.Text>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button variant="primary">Comprar</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} border="info">
                    <Card.Body>
                        <Card.Title>The Wonderful Wizard of Oz (Pretty Books - Painted Editions)</Card.Title>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Card.Text>
                                $4500
                                </Card.Text>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button variant="primary">Comprar</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </section>
        </main>
    )
}


export default ItemListContainer;