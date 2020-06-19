import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button,Modal, ModalHeader, ModalBody, ModalFooter,
Form, FormGroup, Label, Col, Input, FormText} from 'reactstrap';
import { Link } from "react-router-dom";

class Footer extends Component {
    constructor(props){
        super(props);

        this.state={
            isModalOpen:false,
        };

        this.toggleModal=this.toggleModal.bind(this);
        this.handleLogin=this.handleLogin.bind(this);
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event){
        this.toggleModal();
        alert("Thank You "+ this.firstname.value +" For SignUp");
        event.preventDefault();
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
                    <Form onSubmit={this.handleLogin}>
                    <FormGroup>
                        <Label htmlfor="firstname">FirsName</Label>
                        <Input type="text" name="firstname" id="firstname" placeholder="Enter FirstName"
                        innerRef={(input) => this.firstname = input} required />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlfor="lastname">LastName</Label>
                        <Input type="text" name="lastname" id="lastname" placeholder="Enter LastName"
                        innerRef={(input) => this.lastname = input} required />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlfor="email">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Enter Email" 
                        innerRef={(input) => this.email = input} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlfor="password">Password</Label>
                        <Input type="password" name="password" id="password" placeholder="Create password"
                        innerRef={(input) => this.password = input}  required/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlfor="intro">Your Description</Label>
                        <Input type="textarea" name="intro" id="intro" 
                        innerRef={(input) => this.intro = input} required />
                        <FormText color="muted">
                        Describe YourSelf in few Words.
                        </FormText>
                    </FormGroup>
                    <ModalFooter>
                        <Button type="submit" value="submit" color="dark"><span className="fa fa-user fa-lg"></span>Create Account!</Button>
                    </ModalFooter>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
        );
    }
}

export default Footer;