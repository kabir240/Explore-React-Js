import React,{ Component } from 'react';
import { Card, CardBody,CardSubtitle,CardText,CardTitle, Badge,CardImg, Breadcrumb, BreadcrumbItem,
 TabContent, TabPane, Nav, NavItem, NavLink, Button, Spinner,Modal, ModalHeader, ModalBody, ModalFooter, Alert, Form, FormGroup,Input, FormText,Col,Row, Label} from 'reactstrap';
 import { Link } from 'react-router-dom';

const CheckOut = (props) => {

        console.log(props.tour);

        if(props.isLoading){
        return(
                <div className="container">
                <div className="row row-content justify-content-center">
                    <Spinner animation="grow" className="mt-5"/><p className="textcss mt-5">Loading...</p>
                </div>
                </div>
        );
        }

        else if(props.errMess){
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>   
            </div>
        );
        }
        else if (props.tour != null)
        return(
            <div>
            <div className="breadcrumb breadcrumbBgimage">
                    <Breadcrumb>
                        <div className="row">
                            <h3 className="col-12" style={{color: "#ffff"}}>Booking</h3>
                            <BreadcrumbItem><Link to="/home" style={{color: "#ffff"}}>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem style={{color: "#ffff"}}>Tours</BreadcrumbItem>
                            <BreadcrumbItem active>CheckOut</BreadcrumbItem>
                        </div>
                    </Breadcrumb>
            </div>
            <div className="row checkbgimage">
            <div className="container">
                <div className="py-5 text-center">
                <h2>Booking form</h2>
                <p className="lead">Please fillup the form to proceed!</p>
                </div>
                <div className="row mb-5">
                    <div className="col-12 col-md-8">
                        <Form>
                        <h4 class="mb-3">Billing address</h4>
                        <Row form>
                            <Col md={6}>
                            <FormGroup>
                                <Label for="firstname">First name</Label>
                                <Input type="firstname" name="firstname" id="firstname" placeholder="" required/>
                            </FormGroup>
                            </Col>
                            <Col md={6}>
                            <FormGroup>
                                <Label for="lastname">Last name</Label>
                                <Input type="lastname" name="lastname" id="lastname" placeholder="" required/>
                            </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <Label for="username">Username</Label>
                            <Input type="text" name="username" id="username" placeholder="Username" required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="text" name="email" id="email" placeholder="you@email.com" required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleAddress">Address</Label>
                            <Input type="text" name="address" id="exampleAddress" placeholder="your first address" required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleAddress2">Address 2 (Optional)</Label>
                            <Input type="text" name="address2" id="exampleAddress2" placeholder="your second address" />
                        </FormGroup>
                        <Row form className=" pb-2 border border-top-0 border-right-0 border-left-0 border-bottom-1">
                            <Col md={6}>
                            <FormGroup>
                                <Label for="exampleCity">City</Label> 
                                <Input type="text" name="city" id="exampleCity" required/>
                            </FormGroup>
                            </Col>
                            <Col md={4}>
                            <FormGroup>
                                <Label for="exampleState">State</Label>
                                <Input type="text" name="state" id="exampleState" required/>
                            </FormGroup>
                            </Col>
                            <Col md={2}>
                            <FormGroup>
                                <Label for="exampleZip">Zip</Label>
                                <Input type="text" name="zip" id="exampleZip" required/>
                            </FormGroup>  
                            </Col>
                        </Row>
                        <FormGroup check className="mt-3">
                            <Input type="checkbox" name="check" id="exampleCheck" />
                            <Label for="exampleCheck" check>Shipping address is the same as my billing address</Label>
                        </FormGroup>
                        <FormGroup check className="pb-3 mb-3 border border-top-0 border-right-0 border-left-0 border-bottom-1">
                            <Input type="checkbox" name="check" id="exampleCheck" />
                            <Label for="exampleCheck" check>Save this information for next time</Label>
                        </FormGroup>
                        <FormGroup tag="fieldset" row>
                            <h4 class="mb-3 pl-3">Payment</h4>
                            <Col sm={10}>
                            <FormGroup check>
                                <Label check>
                                <Input type="radio" name="radio2"  required/>{' '}
                                Credit card
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                <Input type="radio" name="radio2"  required/>{' '}
                                Debit card
                                </Label>
                            </FormGroup>
                            <FormGroup check disabled>
                                <Label check>
                                <Input type="radio" name="radio2"  required/>{' '}
                                Paypal
                                </Label>
                            </FormGroup>
                            </Col>
                        </FormGroup>
                        <Row form>
                            <Col md={6}>
                            <FormGroup>
                                <Label for="exampleEmail">Name on card</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder=""  required/>
                                <small class="text-muted">Full name as displayed on card</small>
                            </FormGroup>
                            </Col>
                            <Col md={6}>
                            <FormGroup>
                                <Label for="examplePassword">Credit card number</Label>
                                <Input type="text" name="password" id="examplePassword" placeholder=""  required/> 
                            </FormGroup>
                            </Col>
                        </Row>
                        <Row form className="pb-3 mb-3 border border-top-0 border-right-0 border-left-0 border-bottom-1">
                            <Col md={30}>
                            <FormGroup>
                                <Label for="exampleEmail">Expiration</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder=""  required/> 
                            </FormGroup>
                            </Col>
                            <Col md={3}>
                            <FormGroup>
                                <Label for="examplePassword">CVV</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder=""  required/> 
                            </FormGroup>
                            </Col>
                        </Row>
                        <button class="btn checkoutbutton btn-lg btn-block mt-4" type="submit">Continue to Booking</button>
                    </Form>
                    </div>
                    <div class="col-12 col-md-4">
                    <h4 class="d-flex justify-content-between align-items-center mb-3">
                        <span>Your cart</span>
                        <span class="badge badge-secondary badge-pill">1</span>
                    </h4>
                    <ul class="list-group mb-3">
                        <li class="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                            <h6 class="my-0">{props.tour.name}</h6>
                            <small class="text-muted">{props.tour.description}</small>
                        </div>
                        <span class="text-muted">{props.tour.price}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between bg-light">
                        <div class="text-success">
                            <h6 class="my-0">Promo code</h6>
                            <small>Traveler</small>
                        </div>
                        <span class="text-success">-10%</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between">
                        <span>Total (USD)</span>
                        <strong>{props.tour.modifiedprice}</strong>
                        </li>
                    </ul>
                    <form class="card p-2">
                    <div class="input-group">
                    <Input type="text" class="form-control" placeholder="Promo code" />
                    <div class="input-group-append">
                    <button type="submit" class="btn btn-secondary">Apply</button>
                    </div>
                    </div>
                    </form>
                    </div>
                </div>
            </div>
            </div>
            </div>
        );

}

export default CheckOut;