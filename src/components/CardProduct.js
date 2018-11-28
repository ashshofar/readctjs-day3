import React, { Component } from 'react';
import { Card, CardImg, CardBody,
    CardTitle, Button, Col, Row, Input } from 'reactstrap';

class CardProduct extends Component {

    state = {
        qty: 0
    }

    onInput = (e) => this.setState({
        qty: e.target.value
    });

    createCard = item => {
        return   <Col md="3" key={item.id}>
                    <div>
                        <Card>
                            <CardImg top width="100%" src={item.image} alt="Card image cap" />
                            <CardBody className="text-center">
                                <CardTitle>{item.name}</CardTitle>
                                <div className="d-flex flex-row align-items-center justify-content-center">
                                    <Button>-</Button>
                                    <Col md="8">
                                        <Input type="number" onChange={this.onInput}/>
                                    </Col>
                                    <Button>+</Button>                                        
                                </div>
                                <br></br>
                                <Button 
                                    onClick={() => this.props.addItem({
                                        ...item, 
                                        qty: parseInt(this.state.qty),
                                        subtotal: item.price * parseInt(this.state.qty)})}
                                    color="success" 
                                    block>
                                        Add to Cart
                                </Button>
                            </CardBody>
                        </Card>
                        <br></br>
                    </div>
                </Col>
    }

    render() {
        const products = this.props.products;
        
        if(products) {
    
            const listItems = products.map(this.createCard)
    
            return <Row>{listItems}</Row>
        }
    }


};

export default CardProduct;