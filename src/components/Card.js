import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function Item_Card(props) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <img className="img-fluid "  variant="top" src={props.image} alt='resturarnt image' />
                <Card.Body>
                    <Card.Title>{props.price}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Link to='/detail'> <Button  variant="primary">{props.order}</Button></Link>
                   
                </Card.Body>
            </Card>
        </div>
    )
}
