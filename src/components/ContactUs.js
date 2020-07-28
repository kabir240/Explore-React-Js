import React, {Component} from 'react';
import {Label, Col, Row, Button,Card, CardHeader, CardBody, CardFooter} from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Control, Form, Errors, actions} from 'react-redux-form';
import { Link } from 'react-router-dom';



const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class ContactUs extends Component{
    constructor(props){
        super(props);


        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        this.props.resetFeedbackForm();
        this.props.postFeedback(values.firstname, values.lastname, values.telnum, values.email, values.message);
    }

    render(){
        return(
            <div>
                <div className="breadcrumb" style={{backgroundImage: "url('assets/images/pic-52.jpg')", backgroundRepeat:"no-repeat", backgroundSize: "cover"}}>
                    <Breadcrumb>
                        <div className="row">
                            <h3 className="col-12" style={{color: "#ffff"}}>ContactUs</h3>
                            <BreadcrumbItem><Link to="/home" style={{color: "#ffff"}}>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>ContactUs</BreadcrumbItem>
                        </div>
                    </Breadcrumb>
                </div>
                <div className="row headcss m-5" style={{margin:"0px auto"}}>CONTACT OR VISIT US</div>
                <div className="row row-content" style={{backgroundImage: "url('assets/images/pic-51.jpg')", backgroundRepeat:"no-repeat", backgroundSize: "cover"}}>
                    <div className="col-12 col-md-6" style={{position: "relative",top: "42px"}}>
                        <blockquote className="blockquote blockquotecls">
                            <div style={{borderLeft: "3px solid #212326"}}>
                            <p className="textcss" ><div className="pl-3">Maecenas facilisis, orciut gravida posue re, urna est cursus tellus, id viverra ipsu urna me malesu</div></p>
                            <p className="headcss1 pl-3">9870 St Vincent Place,Glasgow, DC 45 Fr 45.</p>
                            <p className="textcss"><div className="pl-3">Freephone:+1 800 559 6580<br />Telephone:+1 800 603 6035<br/>FAX:+1 800 889 9898<br/>E-mail:mail@demolink.org<br/></div></p>
                            </div>
                        </blockquote>
                    </div>
                    <div className="col-12 col-md-6" style={{position: "absolute",bottom: "30px",right:"90px"}}>
                             <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                                <Row className="form-group">
                                    <Col sm={6}>
                                    <Control.text model=".firstname" id="firstname" name="firstname"
                                     placeholder="FirstName"
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
                                            minLength: 'Must be greater than 2 chararcters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                    </Col>
                                    <Col sm={6}>
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
                                            minLength: 'Must be greater than 2 chararcters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={6}>
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
                                    <Col sm={6}>
                                    <Control.text model=".telnum" id="telnum" name="telnum"
                                        placeholder="Tel. Number"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                                        }}
                                         />
                                    <Errors 
                                        className="text-danger"
                                        model=".telnum"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 numbers',
                                            maxLength: 'Must be 15 numbers or less',
                                            isNumber: 'Must be a number'
                                        }}
                                    />
                                    </Col>
                                </Row>
                                <Row className="mt-3" >
                                    <Col>
                                    <Control.textarea model=".message" id="message" name="message"
                                       rows='5' className="form-control" placeholder="Write Your message..." />
                                    </Col>
                                </Row>
                                <Button type="submit" value="submit" className="button2 p-30 mt-3">SEND MESSAGE</Button>
                                </Form>
                    </div>
                </div>
            </div>
        );
    }

}

export default ContactUs;