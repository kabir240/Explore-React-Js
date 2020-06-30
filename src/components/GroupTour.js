import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle, Badge, Breadcrumb, BreadcrumbItem, Spinner, Button} from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';
import ScrollToTop from './ScrollTopcomponent';




function RenderTours({tour}) {
    return(
        <Link to={`/tours/${tour.id}`}>
        <Card>
            <CardImg className="cardimage" width="600px" height="250px" src={baseUrl + tour.image} alt={tour.name} />
            <CardBody>
            <CardTitle className="headcss1">{tour.name}</CardTitle>
            <CardText><Badge color="danger" pill>{tour.price}</Badge></CardText>
            <CardText className="textcss">{tour.description}</CardText>
            <CardText>
                <div className="row">
                    <div className="col-4 text-muted"><i className="fa fa-bell mr-2"></i>Meals</div>
                    <div className="col-4 text-muted"><i className="fa fa-bookmark mr-2"></i>7 Days</div>
                    <div className="col-4 text-muted"><i className="fa fa-plane mr-2"></i>Flight</div>
                </div>
            </CardText>
            </CardBody>
        </Card>
        </Link>
    );
}


const Tour = (props) => {

    console.log(props.tours.tours);

    const TourList = props.tours.tours.map((tour) => {
         return(
             <div key={tour.id} className="col-12 col-md-6 col-xl-4" >
                <RenderTours tour={tour} />
             </div>
         );
    });

    if(props.tours.isLoading){
        return(
            <div className="container">
                <div className="row row-content justify-content-center">
                    <Spinner animation="grow" className="mt-5"/><p className="textcss mt-5">Loading...</p>
                </div>
            </div>
        );
    }

    else if (props.tours.errMess) {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h4>{props.tours.errMess}</h4>
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
                        <BreadcrumbItem active>Tours</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="container">
                    <div className="row row-content">
                        <div className="col-12 headcss mb-5"> Explore Best Tours! </div>
                        {TourList}
                    </div>
                </div>
                <div className="row" style={{backgroundImage: "url('assets/images/pic-32.jpg')", backgroundRepeat:"no-repeat", backgroundSize: "cover", margin:"0px auto"}}>
                    <div className="row row-content3">
                        <blockquote className="blockquote blockquotecls">
                            <p className="headcss1" style={{borderLeft: "3px solid #212326"}}><div className="pl-3">"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam porttitor miut pulvinar dapibus. Aliquam rutrum porta dolor, id facilisis justo "</div></p>
                            <p className="textcss pl-3">Cras eget vehicula metus, et lacinia nunc. Maecenas facilisis, orci ut gravida posuere, urna est cursus tellus, id viverra ipsum urna a metus.</p>
                        </blockquote>
                    </div>
                </div>
                    
            </div>
        );

}

export default Tour;