import React, {Component} from 'react';
import {Form, FormGroup, Label, Col, Input, FormText, Button,Card, CardHeader, CardBody, CardFooter} from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


class ContactUs extends Component{
    constructor(props){
        super(props);
        this.handleLogin=this.handleLogin.bind(this);
    }

    handleLogin(event){
        alert("Thank You "+ this.firstname.value +" For Send YOur details! We will Contact You soon!");
        event.preventDefault();
    }

    render(){
        return(
            <div>
                <div>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>ContactUs</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="row headcss m-5" style={{margin:"0px auto"}}>CONTACT OR VISIT US</div>
                <div className="row bgImg row-content" style={{backgroundImage: "url('assets/images/pic-51.jpg')", backgroundRepeat:"no-repeat", backgroundSize: "cover"}}>
                    <div className="col-12 col-md-6" style={{position: "relative",top: "42px"}}>
                        <blockquote className="blockquote blockquotecls">
                            <div style={{borderLeft: "3px solid #212326"}}>
                            <p className="textcss" ><div className="pl-3">Maecenas facilisis, orciut gravida posue re, urna est cursus tellus, id viverra ipsu urna me malesu</div></p>
                            <p className="headcss1 pl-3">9870 St Vincent Place,Glasgow, DC 45 Fr 45.</p>
                            <p className="textcss"><div className="pl-3">Freephone:+1 800 559 6580<br />Telephone:+1 800 603 6035<br/>FAX:+1 800 889 9898<br/>E-mail:mail@demolink.org<br/></div></p>
                            </div>
                        </blockquote>
                    </div>
                    <div className="col-12 col-md-6" style={{position: "absolute",bottom: "77px",right:"90px"}}>
                             <Form onSubmit={this.handleLogin}>
                                <FormGroup row>
                                    <Col sm={6}>
                                    <Input type="text" name="firstname" id="firstname" placeholder="FirstName"
                                    innerRef={(input) => this.firstname = input} required  className="inputbox"/>
                            </Col>
                                    <Col sm={6}>
                                    <Input type="text" name="lastname" id="lastname" placeholder="LastName"
                                    innerRef={(input) => this.lastname = input} required className="inputbox"/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col sm={6}>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="Email" 
                                    innerRef={(input) => this.email = input} required className="inputbox"/>
                                    </Col>
                                    <Col sm={6}>
                                    <Input type="phone" name="phone" id="examplephone" placeholder="Phone" 
                                    innerRef={(input) => this.phone = input} required className="inputbox"/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col>
                                    <Input type="textarea" name="intro" id="intro" 
                                    innerRef={(input) => this.intro = input} required className="inputbox"  placeholder="Your Message"/>
                                    </Col>
                                </FormGroup>
                                <Button type="submit" value="submit" className="button2 p-30">SEND MESSAGE</Button>
                                </Form>
                    </div>
                </div>
            </div>
        );
    }

}

export default ContactUs;