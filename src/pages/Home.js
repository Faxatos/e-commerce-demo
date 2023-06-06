//import logo from './logo.svg';
import '../App.css';
import { Amplify, API } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

const myAPI = "products"
const path = '/product'; 

const Home = (props) => {
  /*const [inputId, setInputId] = useState("")
  const [inputName, setInputName] = useState("")

  const handleId = (event) => {
    setInputId(event.target.value);
  };

  const handleName = (event) => {
    setInputName(event.target.value);
  };*/

  const [products, setProducts] = useState([])

  //Function to fetch from our backend and update products array
  function getProducts() {
    API.get(myAPI, path + "/")
       .then(response => {
         console.log(response)
         let newProduct = [...products]
         //to test let newProduct = [products]
         newProduct.push(response)
         setProducts(newProduct)
       })
       .catch(error => {
         console.log(error)
       })
  }

  /*function insertProduct(e) {
    API.get(myAPI, path + "/")
       .then(response => {
         console.log(response)
         let newProduct = [...products]
         newProduct.push(response)
         setProducts(newProduct)
       })
       .catch(error => {
         console.log(error)
       })
  }*/

  return (
    
    <Container>
      <Row className="px-4 my-5">
        <Col xs={4} sm={6}>
          <div className="App">
            <h1>Print products</h1>

            <button onClick={() => getProducts()}>Get Products From Backend</button>

            <h2 style={{visibility: products.length > 0 ? 'visible' : 'hidden' }}>Response</h2>
            {
            products.map((thisProduct) => {
              return (
              <div key={thisProduct.productId}>
                <span><b>productId :</b> {thisProduct.productId} - <b>productName</b>: {thisProduct.productName}</span>
              </div>)
            })
            }

            {/* <h1>Insert product</h1>

            <form onSubmit = {insertProduct}>
                <div>
                  <label htmlFor="id">ID</label>
                  <input
                    id="prodId"
                    type="text"
                    value={inputId}
                    onChange={handleId}
                  />
                </div>
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    id="prodName"
                    type="text"
                    value={inputName}
                    onChange={handleName}
                  />
                </div>
                <button type = 'submit'>Click to insert</button>
              </form> 
            */}
            
          </div>
        </Col>
        <Col sm={6}>
            <h1 className="font-weight-light">Page navigator</h1>
            <p className="mt-4">
                <br /><br />
                I'll become a sidenav 🗿
            </p>
            {
                props.isAuthenticated === false && (
                    <>
                        <Link
                            to='/login'>
                            <Button variant="outline-primary">Login &gt;&gt;</Button>
                        </Link>
                        &nbsp;&nbsp;
                        <Link
                            to='/register'>
                            <Button variant="outline-primary">Register &gt;&gt;</Button>
                        </Link>
                    </>
                )
            }
            {
                props.isAuthenticated !== false && (
                    <Link
                        to='/profile' state={{ authenticated: props.isAuthenticated }}>
                        <Button variant="outline-primary">View Profile &gt;&gt;</Button>
                    </Link>
                )
            }
        </Col>
      </Row>
    </Container >
    
  )
}

export default Home;