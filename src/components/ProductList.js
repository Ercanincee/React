import React, { Component } from 'react'
import { Table,Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
export default class ProductList extends Component {
  render() {
    return (
      <div><h3>{this.props.info}</h3>
      <Table>
      <thead>
    <tr>
      <th>
        #
      </th>
      <th>
        First Name
      </th>
      <th>
        Last Name
      </th>
      <th>
        Username
      </th>
    </tr>
  </thead>
  <tbody>
    {this.props.products.map(data=>(<tr>
      <th>{data.productName}</th>
      <th>{data.categoryId}</th>
      <th>{data.unitPrice}</th>
      <th><Button color='info'>Add to cart</Button></th>
    </tr>))}
  </tbody>
</Table>
</div>
    )
  }
}
