import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Row, Col, CardImg, Container} from 'reactstrap';

class ListProduct extends Component {

    createList = item => {
        return  <ListGroupItem key={item.id}>
                    <Row>
                        <Col md="2">
                            <CardImg src={item.image} alt="Card image cap" top width="100%" />
                        </Col>
                        <Col md="5">
                            {item.name}
                        </Col>
                        <Col md="3">
                            {item.name}
                            <br></br>
                            {item.subtotal}
                        </Col>
                        <Col md="2">
                            <button>
                                Delete
                            </button>
                        </Col>
                    </Row>
                </ListGroupItem>
    }

    render() {
        const products = this.props.products;
        
        if(products) {
    
            const listItems = products.map(this.createList)
    
            return <Container>
                        <ListGroup>{listItems}</ListGroup>
                    <p>Total: {this.props.total}</p>
                    </Container>
        }
    }


};

export default ListProduct;