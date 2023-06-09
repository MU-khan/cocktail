import {Card, Col, Row} from 'react-bootstrap';
import CocktailService from '../services/cocktail'
import { useEffect, useState } from 'react';

function List() {
    let cocktails = new CocktailService()
    const letters = "abcdefghijklmnopqrstuvwxyz"
    const [cocktlist, setCocktlist] = useState([])

    useEffect( () => {
        cocktails.byFirstLetter('a').then(arr => setCocktlist(arr))
    }, [] )

    return (
        <div>
            <Row xs={6} md={12}>
                {letters.split('').map( (l,i) => <Col key={i}>{l.toUpperCase()}</Col> )}
            </Row>
            <Row xs={1} md={2} lg={4} className="g-4">
                {cocktlist.map((obj, i) => {
                    let {cat, name, img, desc } = obj
                    return (<Col key={i}>
                        <Card>
                            <Card.Img variant="top" src={img} />
                            <Card.Body>
                                <Card.Title>{name} (<small>{cat}</small>)</Card.Title>
                                <Card.Text className="dotted">{desc}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    )}
                )}
                </Row>
        </div>
    )
}

export default List