import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import { useState, useRef } from "react";
import Container from 'react-bootstrap/Container';
import React from 'react';

function FormExample() {
  const formRef = useRef();
  const [inputs, setInputs] = useState({"isValid":false});
  const [validated, setValidated] = useState(false);
   const handleChange = (event) => {
       let isValid = formRef.current.checkValidity();
       console.log(isValid);
       setInputs(values => ({ ...values, [event.target.name]: event.target.value,"isValid":isValid}))
   }

   const onSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
  
    setValidated(true);
    
   }

  
    return (
      <Container>
        <Card>
        <h1>Will Form</h1>
      <Form noValidate validated={validated} onSubmit={onSubmit} ref={formRef}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
               required 
              type="text"
              name = "firstname"
              placeholder="First name"
              value={inputs.firstname || ""}
              onChange={handleChange} 
             
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              name = "surname"
              value={inputs.surname || ""}
              onChange={handleChange} 
        
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
                name = "username"
                value={inputs.username || ""}
                onChange={handleChange} 
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
            <Col md="2">
            <Form.Label>Address Line 1</Form.Label>
            </Col>
            <Col>
                <Form.Group controlId="validationCustomLine1">
                  <Form.Control 
                  type="text" 
                  placeholder="Address Line 1" 
                  required
                  name = "AddressLine1"
                  value={inputs.AddressLine1 || ""}
                  onChange={handleChange}  />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid Address Line 1.
                    </Form.Control.Feedback>
                </Form.Group>
           </Col>
        </Row>
        <Row className="mb-3">
            <Col md="2">
            <Form.Label>Address Line 2</Form.Label>
            </Col>
            <Col>
                <Form.Group controlId="validationCustomLine2">
                  <Form.Control 
                  type="text" 
                  placeholder="Address Line 2" 
                  required 
                  name = "AddressLine2"
                  value={inputs.AddressLine2 || ""}
                  onChange={handleChange} 
                  />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid Address Line 2.
                    </Form.Control.Feedback>
                </Form.Group>
           </Col>
        </Row>
        <Row className="mb-3">
            <Col md="2">
            <Form.Label>Address Line 3</Form.Label>
            </Col>
            <Col>
                <Form.Group controlId="validationCustomLine3">
                  <Form.Control 
                  type="text" 
                  placeholder="Address Line 3" 
                  required 
                  name = "AddressLine3"
                  value={inputs.AddressLine3 || ""}
                  onChange={handleChange} 
                  />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid Address Line 3.
                    </Form.Control.Feedback>
                </Form.Group>
           </Col>
        </Row>
        <Row className="mb-3">
            <Col md="2">
            <Form.Label>Address Line 4</Form.Label>
            </Col>
            <Col>
                <Form.Group controlId="validationCustomLine4">
                  <Form.Control 
                  type="text" 
                  placeholder="Address Line 4" 
                  required 
                  name = "AddressLine4"
                  value={inputs.AddressLine4 || ""}
                  onChange={handleChange} 
                  />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid Address Line 4.
                    </Form.Control.Feedback>
                </Form.Group>
           </Col>
        </Row>
        <Row className="mb-3">
            <Col md="2">
            <Form.Label>Post Code</Form.Label>
            </Col>
            <Col>
            <Form.Group as={Col} md="3" controlId="validationCustom05">
        
            <Form.Control 
            type="text" 
            placeholder="Post Code" 
            required 
            name = "PostCode"
            value={inputs.PostCode || ""}
            onChange={handleChange} 
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Post Code.
            </Form.Control.Feedback>
          </Form.Group>
           </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
            name = "Terms"
            value={inputs.Terms || "checked"}
            onChange={handleChange} 
          />
        </Form.Group>
        <Button type="submit" >Submit form</Button>
      </Form>
      <hr />
      <Alert variant="success">
         <h3>Backing data to send/process - Form is Valid {inputs.isValid.toString()} </h3>
         {JSON.stringify(inputs)}
      </Alert>
      </Card>
      </Container>
    
    );
  }

 export default FormExample;