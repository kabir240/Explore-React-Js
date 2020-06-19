import React, { Component } from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle} from 'reactstrap';
import Slider from './CarouselComponent.js';

class Home extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
        <div>
            <Slider />
            <div className="container">
                <div className="row row-content align-items-center">
                    <div className="col-12 col-md-6">
                        <h2 className="headcss">EXPLORE A DIFFERENT WAY TO TRAVEL</h2>
                        <h5 className="mt-5  textcss">Discover new cultures and have a wonderful rest with Explore! Select the country you’d like to visit and provide our agents with estimated time – they’ll find and offer the most suitable tours and hotels.</h5>
                        <h5 className="mt-5 textcss">During our work, we organized countless journeys for our clients. We started as a small tour bureau, and soon we expanded our offers list. Today we have valuable experience travelling and we can advise the most stunning resorts, cities and countries to visit!</h5>
                    </div>
                    <div className="col-12 col-md-6">
                        <img src="assets/images/pic-6.jpg" className="customshadow  img-fluid"/>
                    </div>   
                </div>
                <div className="row row-content customrel">
                    <div className="col-12 col-md-4">
                        <img src="assets/images/pic-7.png" className="customshadow img-fluid"/>
                    </div>
                    <div className="col-12 col-md-8 customabs">
                        <blockquote className="blockquote blockquotecls">
                            <p className="textcss1"><div className="pl-3">" At Explore, we personally plan and create all our tours to offer flexibility and unique impressions that you won't get anywhere else. Moreover, each tour is tailor-made for our customers to provide the experience they are looking for. "</div></p>
                            <footer className="blockquote-footer quote">Suman Das, Agency director</footer>
                        </blockquote>
                    </div>
                </div>
                <div className="row row-content align-items-center">
                    <div className="col-12 col-md-4">
                        <h4 className="headcss1">01. Best Hotels</h4>
                        <p className="mt-5 textcss">We guarantee the best hotels and very comfortable rooms, which will be appreciated by every traveller. You will be absolutely happy with the hotel and will have a wonderful vacation there.</p>
                    </div>
                    <div className="col-12 col-md-4">
                        <h4 className="headcss1">02. Tourist Guide</h4>
                        <p className="mt-3 pt-4 textcss">We provide our clients with such a service as Tourist Guide. Its main goal is to ensure people with all necessary information any time it's needed. This service is similar to Customer Support with emphasis on travelling.</p>
                    </div>
                    <div className="col-12 col-md-4">
                        <h4 className="headcss1">03. Flights Tickets</h4>
                        <p className="mt-5 textcss">You can book tickets on any plane online via our booking system. Here you have an opportunity to select your transport operator. Our representatives will help you with the details.</p>
                    </div>
                </div>
                <div className="row row-content align-items-center">
                    <div className="col-12 col-md-4">
                        <img src='assets/images/pic-8.jpg' alt='Hotels' className="img-fluid customshadow2" style={{height:"fit-content"}}/>
                    </div>
                    <div className="col-12 col-md-4">
                        <img src='assets/images/pic-9.png' alt='Hotels' className="img-fluid customshadow2"/>
                        <img src='assets/images/pic-11.jpg' alt='Hotels' className="img-fluid customshadow2"/>
                    </div>
                    <div className="col-12 col-md-4">
                        <img src='assets/images/pic-10.jpg' alt='Hotels' className="img-fluid customshadow2" style={{height:"fit-content"}}/>
                    </div>
                </div>
                <div className="row row-content align-items-center">
                    <div className="col-12">
                        <h2 className="headcss1">START YOUR JOURNEY!</h2>
                    </div>
                    <div className="col-12 col-md-12 col-xl-6">
                        <p className="textcss">Let us curate an inspiring experience as you enjoy a personally-themed adventure with a professional guide catered to your interests. Whether a one-day trip or multi-trip journey, you’ll be privileged to enjoy this ultimate luxury to explore Europe with an expert, as well as the unique bird’s eye views from a helicopter in Europe, including Rome, the Dalmation Coast, Paris, Prague and 20 top destinations.</p>
                    </div>
                    <div className="col-12 col-md-6 col-xl-3">
                        <ul class="list-marked">
                            <li><i className="fa fa-arrow-right fa-sm mb-3" /> First-class flights</li>
                            <li><i className="fa fa-arrow-right fa-sm mb-3" /> 5-star accommodation</li>
                            <li><i className="fa fa-arrow-right fa-sm mb-3" /> All-inclusive packages</li>
                            <li><i className="fa fa-arrow-right fa-sm mb-3" /> Car hire</li>
                            <li><i className="fa fa-arrow-right fa-sm mb-3" /> Handpicked hotels</li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-6 col-xl-3">
                        <ul class="list-marked">
                            <li><i className="fa fa-arrow-right fa-sm mb-3" /> Leisure travel</li>
                            <li><i className="fa fa-arrow-right fa-sm mb-3" /> Travel insurance</li>
                            <li><i className="fa fa-arrow-right fa-sm mb-3" /> Emergency services</li>
                            <li><i className="fa fa-arrow-right fa-sm mb-3" /> Incentive programs</li>
                            <li><i className="fa fa-arrow-right fa-sm mb-3" /> Visas</li>
                        </ul>
                    </div>
                </div>
           </div>
            <div className="bgImg" style={{backgroundImage: "url('assets/images/pic-12.jpg')", backgroundRepeat:"no-repeat", backgroundSize: "cover"}}>
                <div className="row row-content">
                    <div className="container" style={{marginRight:"600px"}}>
                        <div className="col-12">
                            <blockquote className="blockquote blockquotecls2">
                                <p className="textcss3 pl-3 pt-3">" Our team makes every effort to deliver outstanding tour services for our numerous clients. With us, you can experience even the most exotic destinations in all their beauty. "</p>
                                <footer className="blockquote-footer pl-3 pb-3 quote2">Sumi Das, Tour consultant</footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center"><h2 className="headcss mt-5">OUR BLOG POSTS</h2></div>
                <div className="row row-content">
                    <div className="col-12 col-md-4 mt-5 mb-5">
                        <Card>
                            <CardImg top width="100%" className="cardimage" src="assets/images/pic-13.jpg" alt="Card image cap" />
                            <CardBody>
                            <CardText>
                                <small className="text-muted">February 1, 2019</small>
                            </CardText>
                            <CardTitle className="headcss1">5 PLACES TO VISIT THIS WINTER</CardTitle>
                            <CardText className="textcss">New Year and Christmas holidays is a great occasion to travel somewhere. You can either go somewhere with you family or friends, or even alone....</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-4 mt-5 mb-5">
                        <Card>
                            <CardImg top width="100%" className="cardimage" src="assets/images/pic-14.jpg" alt="Card image cap" />
                            <CardBody>
                            <CardText>
                                <small className="text-muted">February 1, 2019</small>
                            </CardText>
                            <CardTitle className="headcss1">Budget Trips for Winter Break</CardTitle>
                            <CardText className="textcss">Budget trip doesn’t mean boring! There are numerous places worth visiting even if you don’t have much money. The golden sands of Florida and California...</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-4 mt-5 mb-5">
                        <Card>
                            <CardImg top width="100%" className="cardimage" src="assets/images/pic-15.jpg" alt="Card image cap" />
                            <CardBody>
                            <CardText>
                                <small className="text-muted">February 1, 2019</small>
                            </CardText>
                            <CardTitle className="headcss1">Walking to Machu Picchu, Peru</CardTitle>
                            <CardText className="textcss">Machu Picchu is mysterious and attractive place for all tourists visiting Peru. If you agree to take this path you need to know more information...</CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Home;