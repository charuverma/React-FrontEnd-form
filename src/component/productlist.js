import React from 'react';
import axios from 'axios';
import '../style/productlist.css';
import {Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
class productlist extends React.Component{
    state ={
        data:[],
    };
    async componentDidMount() {
        var options = { 
          method: 'POST',
          url: 'http://localhost:8000/index/list',
          data: {}
        };
        const {data} = await axios(options);
        this.setState({
          data: data.result
        });
      }
      async delete(id){
        var options={
          method:'POST',
          url:'http://localhost:8000/index/delete',
          data:{id}
        };
        await axios (options);
        this.setState({
          data:this.state.data.filter(item => item.id !== id)
        });
      }
    render() {
        return (
          <Table responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>ProductName</th>
                <th>ProductType</th>
                <th>Country</th>
                <th>Price</th>
                <th>ManufacturingDate</th>
                <th>ExpireyDate</th>
                <th>Size</th>
                <th>File</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.data.map(item => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.ProductName}</td>
                    <td>{item.ProductType}</td>
                    <td>{item.Country}</td>
                    <td>{item.Price}</td>
                    <td>{item.ManufacturingDate}</td>
                    <td>{item.ExpireyDate}</td>
                    <td>{item.Size}</td>
                    <td>{item.File}</td>
                    <td> <Link to={`/productlist/edit/${item.id}`}>Edit</Link> 
                      <Button variant="danger"  onClick={()=>this.delete(item.id)} >Delete</Button></td>
                    </tr>
                ))
              }
            </tbody>
          </Table>
        );
      }
}

export default productlist;