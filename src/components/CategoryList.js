import React, { Component } from 'react'
import {ListGroup,ListGroupItem } from 'reactstrap'

export default class CategoryList extends Component {
  render() {
    return (
      <div>
        <ListGroup>
        <h1>{this.props.categories.map(category=>(<ListGroupItem class="ListGroupItemm" active={category.categoryName===this.props.CurrentCategory?true:false} onClick={()=>this.props.ChangeCategory(category)}>{category.categoryName}</ListGroupItem>))}</h1>
        </ListGroup>
      </div>
    )
  }
}
