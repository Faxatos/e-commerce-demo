import '../App.css';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Auth } from 'aws-amplify';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Profile(props) {
    const navigate = useNavigate();
    const [attributes, setAttributes] = useState({ email: "", email_verified: "", sub: "", fullName: "" , description: ""  });
    const [username, setUsername] = useState("");

    useEffect(() => {
        {
            props.isAuthenticated !== true && (
                navigate('/')
            )
            getUserInfo();
        }
    }, []);

    async function getUserInfo() {
      const user = await Auth.currentUserInfo();
      setAttributes(user.attributes);
      setUsername(user.username);
      console.log('attributes:', user.attributes);
      console.log(user.username);
      console.log('attributes obj:', attributes);
    }

    return (
        < Container >
            <Col className="px-4 my-5">
                {
                  attributes['custom:isBuyer'] === 'true' && (
                    <Row><h1>Buyer Profile: {username}</h1></Row>
                  )
                }
                {
                  attributes['custom:isBuyer'] === 'false' && (
                    <Row><h1>Seller Profile: {username}</h1></Row>
                  )
                }
                <Form>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextFullname">
                    <Form.Label column sm="2">
                      Full name:
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control plaintext readOnly defaultValue={attributes['custom:fullName']} />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                      Email:
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control plaintext readOnly defaultValue={attributes['email']} />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3" controlId="formPlaintextAddress">
                    <Form.Label column sm="2">
                      Address:
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control plaintext readOnly defaultValue={attributes['custom:address']} />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3" controlId="formDescription">
                      <Form.Label column sm="2">
                        Description:
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control plaintext rows={3} readOnly defaultValue={attributes['custom:description']} />
                      </Col>
                  </Form.Group>
                </Form>
                
            </Col>
            <Col>
              <Link
                  to='/' state={{ authenticated: props.isAuthenticated }}>
                  <Button variant="outline-primary">Home &gt;&gt;</Button>
              </Link>
            </Col>
        </Container >
    )
}

export default Profile;