import React, { Component } from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardTitle, CardBody, Button, Badge, Breadcrumb, BreadcrumbItem, Spinner} from 'reactstrap';
import {Link} from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';

function RenderServiceItem ({service}) {
    return(
        <Link to={`/service/${service.id}`}>
        <Card>
            <CardImg height="400px" className="cardimage" width="100%" src={baseUrl + service.image} alt={service.name} />
            <CardBody>
            <CardTitle className="headcss1">{service.name}</CardTitle>
            <CardText className="textcss">{service.description}</CardText>
            <CardText>
                <Button color="info" className="btn-lg button1">Read More</Button>
            </CardText>
            </CardBody>
        </Card>
        </Link>
    );
}

const Service = (props) =>{

    const ServiceList = props.service.service.map((service) => {
        return(
            <div key={service.id} className="col-12 col-md-6 col-xl-4">
                <RenderServiceItem service={service} />
            </div>
        );
    });

    if(props.service.isLoading){
        return(
            <div className="container">
                <div className="row row-content justify-content-center">
                    <Spinner animation="grow" className="mt-5"/><p className="textcss mt-5">Loading...</p>
                </div>
            </div>
        );
    }

    else if(props.service.errMess){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h4>{props.service.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    else
        return(
            <div>
                <div className="breadcrumb">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Service</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="container">
                    <div className="row row-content">
                        <div className="col-12 headcss mb-5">WHAT WE OFFER</div>
                        {ServiceList}
                    </div>
                </div>
                <div className="row" style={{backgroundImage: "url('assets/images/pic-39.jpg')", backgroundRepeat:"no-repeat", backgroundSize: "cover", margin:"0px auto"}}>
                    <div className="row row-content3">
                        <blockquote className="blockquote blockquotecls">
                            <p className="headcss1" style={{borderLeft: "3px solid #212326"}}><div className="pl-3">Weekend tour in Switzerland, Davos</div></p>
                            <p><Badge color="danger" pill>$1625.00</Badge></p>
                            <p className="textcss pl-3">Zirbuss accelerare! Cum pars studere, omnes zeluses acquirere neuter, fatalis habitioes. Mori callide ducunt ad domesticus luba. Cum messor crescere, omnes tabeses examinare camerarius, superbus animalises. Torus, demolitione, et domus. Pol. Assimilatio manducares, tanquam gratis solitudo. Onus albus rumor est.</p>
                        </blockquote>
                    </div>
                </div>
            </div>
        );

}

export default Service;