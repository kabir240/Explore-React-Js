import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button,Modal, ModalHeader, ModalBody, ModalFooter,
 Label, Col, Row, FormText} from 'reactstrap';
import { Link } from "react-router-dom";
import { Control, Form, Errors, actions} from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Footer extends Component {
    constructor(props){
        super(props);

        this.state={
            isModalOpen:false,
        };

        this.toggleModal=this.toggleModal.bind(this);
        this.handleSignUp=this.handleSignUp.bind(this);
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSignUp(values){
        this.props.resetSignUpForm();
        this.props.postSignUp(values.firstname, values.lastname, values.email, values.password, values.description);
    }

    render(){
        return(
        <div className="footer">
            <div className="container">
                <div className="row">             
                <Card className="cardfooter">
                <div className="container">
                    <div className="row">
                    <div className="col-12 col-md-5">
                    <CardImg top width="100%" src="assets/images/pic-5.jpg" alt="Card image cap" />
                    </div>
                    <div className="col-12 col-md-7">
                    <CardBody>
                    <CardTitle><h2>Newsletter Signup</h2></CardTitle>
                    <CardSubtitle><h5>SIGN UP NOW TO RECEIVE HOT SPECIAL OFFERS AND INFORMATION ABOUT THE BEST TOURS!</h5></CardSubtitle>
                    <CardText><Button onClick={this.toggleModal} outline color="info"><i className="fa fa-sign-in fa-lg"></i> Signup</Button></CardText>
                    </CardBody>
                    </div>
                    </div>
                </div>
                </Card>
                </div>
                <div className="row">             
                    <div className="col-sm-8 text-align-center">
                        <p style={{color:"white"}} className="pt-2"><img src="assets/images/logo.png" height="35" width="125" alt="Explore" />Copyright © 2020 All Rights Reserved</p>
                    </div>
                    <div className="col-sm-4 text-center">
                            <Button outline className="mr-2" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></Button>
                            <Button outline className="mr-2" href="http://www.linkedin.com/in/"><i className="fa fa-instagram"></i></Button>
                            <Button outline className="mr-2" href="http://twitter.com/"><i className="fa fa-twitter"></i></Button>
                            <Button outline className="mr-2" href="http://youtube.com/"><i className="fa fa-pinterest"></i></Button>
                    </div>
                </div>
            </div>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal} className="modalheader">
                    Signup
                </ModalHeader>
                <ModalBody>
                    <Form model="signup" onSubmit={(values)=>this.handleSignUp(values)}>
                    <Row className="form-group">
                        <Label htmlFor="firstname" md={12}>First Name</Label>
                        <Col md={12}>
                            <Control.text model=".firstname" id="firstname" name="firstname"
                                placeholder="First Name"
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }}
                                    />
                            <Errors 
                                className="text-danger"
                                model=".firstname"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="lastname" md={12}>Last Name</Label>
                        <Col md={12}>
                            <Control.text model=".lastname" id="lastname" name="lastname"
                                placeholder="Last Name"
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }}
                                />
                            <Errors 
                                className="text-danger"
                                model=".lastname"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="email" md={12}>Email</Label>
                        <Col md={12}>
                            <Control.text model=".email" id="email" name="email"
                                placeholder="Email"
                                className="form-control"
                                validators={{
                                    required, validEmail
                                }}
                            />
                            <Errors 
                                className="text-danger"
                                model=".email"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    validEmail: 'Invalid Email address'
                                }}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="password" md={12}>Email</Label>
                        <Col md={12}>
                            <Control.password model=".password" id="password" name="password"
                                placeholder="Password"
                                className="form-control"
                                validators={{
                                    required
                                }}
                            />
                            <Errors 
                                className="text-danger"
                                model=".password"
                                show="touched"
                                messages={{
                                    required: 'Required'
                                }}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="description" md={12}>Your Description</Label>
                        <Col md={12}>
                            <Control.textarea model=".description" id="description" name="description"
                                rows="3"
                                className="form-control" />
                            <FormText color="muted">
                            Describe YourSelf in few Words.
                            </FormText>
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col md={{size:12, offset: 7}}>
                            <Button type="submit" value="submit" color="dark"><span className="fa fa-user fa-lg"></span>Create Account!</Button>
                        </Col>
                    </Row>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
        );
    }
}

export default Footer;