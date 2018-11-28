import React, { Component } from 'react';
import './App.css';
import api from './api';
import CardProduct from './components/CardProduct';
import ListProduct from './components/ListProduct';
import NavBar from './components/NavBar';
import { Container} from 'reactstrap';

class App extends Component {

  state = {
    view: 0,
    products: [],
    qty: 0,
    cart: [],
    total: 0
  }

  componentDidMount() {
    this.fetchProduct()
  }

  fetchProduct = async () => {
    const {data} = await api.get(`/raw/upload/v1535817394/json/products.json`)

    this.setState({
      products:data
    })
  }

  addItem = (item) => {
    this.setState((state) => ({
      cart: state.cart.find((items) => items.id === item.id) ?  
        state.cart.map((items) => items.id === item.id ? {...items, qty: item.qty + items.qty, subtotal: item.subtotal + items.subtotal} : items) :
        [...state.cart, item]
    }))
    
    this.grandTotal()
  }

  grandTotal = () => {
    this.setState((state) => ({
      total: state.cart.map((items) => parseInt(items.subtotal)).reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    }))
  }

  toggleRender = () => {
    if (this.state.view === 0) {
      return this.renderShop()
    } else {
      return this.renderCart()
    }
  }

  changeRender = (value) => {
    this.setState((state) => ({
      view: value
    }))
  }

  renderShop = () => {
    return (
      <CardProduct 
        products={this.state.products}
        addItem={this.addItem}
        qty={this.state.qty}
      />
    )
  }

  renderCart = () => {
    return (
      <ListProduct products={this.state.cart} total={this.state.total}/>
    )
  }

  render() {
    return (
      <Container>
        <NavBar
          total={this.state.total}
          changeRender={(value) => this.changeRender(value)}
        />
        {this.toggleRender()}
      </Container>
    );
  }
}

export default App;
