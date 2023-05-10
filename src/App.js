import React, { Component } from 'react'
import {Col, Row, Container } from 'reactstrap'
import Navi from './components/Navi'
import CategoryList from './components/CategoryList'
import ProductList from './components/ProductList'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class App extends Component {
  componentDidMount() {
    this.getCategories()
    this.getProducts()
  };
  ChangeCategory = (category) => {this.setState({ CurrentCategory: category.categoryName})
  this.getProducts(category.id)}
  state = {
    CurrentCategory: '',
    categories: [],
    products:[],
  };
  ;
  getCategories = ()=>{fetch("http://localhost:3000/categories").then(document => document.json()).then(data => this.setState({ categories: data }))}
  getProducts = (categoryId)=>{
    if(categoryId) {
    var url= "http://localhost:3000/products";
      url = url + "?categoryId=" + categoryId
    }
    
    fetch(url).then(document => document.json()).then(data => this.setState({ products: data }))}

  render() {
    return (
      <div>
        <Container>
           <Navi></Navi>

          <Row>
            <Col>
              <CategoryList ChangeCategory={this.ChangeCategory} CurrentCategory={this.state.CurrentCategory} info={this.state.categories} categories={this.state.categories} />
            </Col>
            <Col>
              <ProductList products={this.state.products} info={'ProductList'}></ProductList>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

