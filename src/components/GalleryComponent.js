import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle, Badge, Breadcrumb, BreadcrumbItem, Button} from 'reactstrap';
import {Link} from 'react-router-dom';

class Gallery extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Gallery</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="container">
                    <div className="row row-content">
                        <div className="col-12 headcss mb-5">Explore our Gallery</div>
                        <div className="col-12 col-md-4 mt-5 mb-5">
                            <Card>
                                <CardImg top width="100%" height="350px" className="cardimage" src="assets/images/pic-40.jpg" alt="Card image cap" />
                                <CardBody>
                                <CardTitle className="headcss1">The 8 Best Old Towns in Europe</CardTitle>
                                <CardText className="textcss">At age 26, I quit my job to travel the world alone. I spent six fantastic months in Southeast Asia and turned my travel blog into a full-time business...</CardText>
                                <CardText>
                                    <small className="text-muted">--Kate McCulley</small>
                                </CardText>
                                <CardText>
                                    <Button color="info" className="btn-lg button1" href="https://www.adventurouskate.com/the-8-best-old-towns-in-europe/">Read More</Button>
                                </CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-4 mt-5 mb-5">
                            <Card>
                                <CardImg top width="100%" height="350px" className="cardimage" src="assets/images/pic-41.jpg" alt="Card image cap" />
                                <CardBody>
                                <CardTitle className="headcss1">“Oamaru?"</CardTitle>
                                <CardText className="textcss">These are the words from my mate Liz after viewing my Snapchat story a couple weeks ago. They sum up just about everyone’s feelings when I tell them how much I love Oamaru....</CardText>
                                <CardText>
                                    <small className="text-muted">--Backpacking Matt</small>
                                </CardText>
                                <CardText>
                                    <Button color="info" className="btn-lg button1" href="http://www.backpackingmatt.com/escaping-to-chilled-out-oamaru/">Read More</Button>
                                </CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-4 mt-5 mb-5">
                            <Card>
                                <CardImg top width="100%" height="350px" className="cardimage" src="assets/images/pic-42.jpg" alt="Card image cap" />
                                <CardBody>
                                <CardTitle className="headcss1">Overnight At Lake Marian</CardTitle>
                                <CardText className="textcss">Earlier on this year, I realized that my New Zealand summer was quickly slipping away like sand through my fingers. The days were disappearing, getting shorter and before too long I’d be back on another flight to Ireland....</CardText>
                                <CardText>
                                    <small className="text-muted">--Backpacking Matt</small>
                                </CardText>
                                <CardText>
                                    <Button color="info" className="btn-lg button1" href="http://www.backpackingmatt.com/fiordland-i-love-you-overnight-at-lake-marian/">Read More</Button>
                                </CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-4 mt-5 mb-5">
                            <Card>
                                <CardImg top width="100%" height="350px" className="cardimage" src="assets/images/pic-43.jpg" alt="Card image cap" />
                                <CardBody>
                                <CardTitle className="headcss1">Places in Europe for Solo Travelers</CardTitle>
                                <CardText className="textcss">I’ve lived in Europe for over four years now and during that time have had the pleasure of exploring lots of it myself, and have hosted several of my solo traveling friends who pass through my home city, Berlin....</CardText>
                                <CardText>
                                    <small className="text-muted">--Kristin Addis</small>
                                </CardText>
                                <CardText>
                                    <Button color="info" className="btn-lg button1" href="https://www.bemytravelmuse.com/best-places-solo-travel-europe/">Read More</Button>
                                </CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-4 mt-5 mb-5">
                            <Card>
                                <CardImg top width="100%" height="350px" className="cardimage" src="assets/images/pic-44.jpg" alt="Card image cap" />
                                <CardBody>
                                <CardTitle className="headcss1">Best Food in Austin</CardTitle>
                                <CardText className="textcss">Austin is such a foodie town with tons of amazing places to try. The city has every type of food ranging from barbecue to Tex-Mex, to Asian fusion, to delicious Thai...</CardText>
                                <CardText>
                                    <small className="text-muted">--Kiki</small>
                                </CardText>
                                <CardText>
                                    <Button color="info" className="btn-lg button1" href="https://theblondeabroad.com/where-to-find-the-best-food-in-austin/">Read More</Button>
                                </CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-4 mt-5 mb-5">
                            <Card>
                                <CardImg top width="100%" height="350px" className="cardimage" src="assets/images/pic-45.jpg" alt="Card image cap" />
                                <CardBody>
                                <CardTitle className="headcss1">The Things to Do in Bern</CardTitle>
                                <CardText className="textcss"> where is Bern? Located 95 kilometres southwest of Zurich it might not immediately be on a travellers’ radar. However, Bern’s placement in the very centre of the country means it holds true to its capital reign...</CardText>
                                <CardText>
                                    <small className="text-muted">--Becki Enright</small>
                                </CardText>
                                <CardText>
                                    <Button color="info" className="btn-lg button1" href="https://www.bordersofadventure.com/bern-switzerland-capital-travel/">Read More</Button>
                                </CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-4 mt-5 mb-5">
                            <Card>
                                <CardImg top width="100%" height="350px" className="cardimage" src="assets/images/pic-46.jpg" alt="Card image cap" />
                                <CardBody>
                                <CardTitle className="headcss1">Things You Can See in Iceland</CardTitle>
                                <CardText className="textcss">Iceland is known as the Land of Fire and Ice, due to the fact that it's been shaped and carved by both volcanoes AND glaciers. This unique combination has made Iceland's landscape otherworldly....</CardText>
                                <CardText>
                                    <small className="text-muted">--Amanda</small>
                                </CardText>
                                <CardText>
                                    <Button color="info" className="btn-lg button1" href="https://www.dangerous-business.com/cool-things-see-iceland/">Read More</Button>
                                </CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-4 mt-5 mb-5">
                            <Card>
                                <CardImg top width="100%" height="350px" className="cardimage" src="assets/images/pic-47.jpg" alt="Card image cap" />
                                <CardBody>
                                <CardTitle className="headcss1">SCUBA DIVING IN MALDIVES</CardTitle>
                                <CardText className="textcss">It was eerily silent and all I could hear was my own breathing, as a waft of bubbles hurriedly escaped from my regulator, rushing towards the surface as if in a hurry to catch some air. I was finally going scuba diving in Maldives....</CardText>
                                <CardText>
                                    <small className="text-muted">--Dave and Deb</small>
                                </CardText>
                                <CardText>
                                    <Button color="info" className="btn-lg button1" href="https://theplanetd.com/scuba-diving-in-maldives-a-beginners-journey/">Read More</Button>
                                </CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-4 mt-5 mb-5">
                            <Card>
                                <CardImg top width="100%" height="350px" className="cardimage" src="assets/images/pic-49.jpg" alt="Card image cap" />
                                <CardBody>
                                <CardTitle className="headcss1">12 Things Do in Bali</CardTitle>
                                <CardText className="textcss">Bali is an island that should be on everyone’s bucket list. During your 3-week Bali Route, it is best to have a combination of hidden gems and rich experiences...</CardText>
                                <CardText>
                                    <small className="text-muted">--Kate McCulley</small>
                                </CardText>
                                <CardText>
                                    <Button color="info" className="btn-lg button1" href="https://www.saltinourhair.com/bali/8-things-must-do-bali/">Read More</Button>
                                </CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-4 mt-5 mb-5">
                            <Card>
                                <CardImg top width="100%" height="350px" className="cardimage" src="assets/images/pic-48.jpg" alt="Card image cap" />
                                <CardBody>
                                <CardTitle className="headcss1">The Romance of Ireland’s Castles</CardTitle>
                                <CardText className="textcss">When you think of Ireland, do you have romantic visions of manor houses and castles, steeped in history surrounded by lush green lands? In our minds that was our vision of Ireland...</CardText>
                                <CardText>
                                    <small className="text-muted">--Kate McCulley</small>
                                </CardText>
                                <CardText>
                                    <Button color="info" className="btn-lg button1" href="https://www.retireearlyandtravel.com/manor/">Read More</Button>
                                </CardText>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="row" style={{backgroundImage: "url('assets/images/pic-50.jpg')", backgroundRepeat:"no-repeat", backgroundSize: "cover", margin:"0px auto"}}>
                    <div className="row row-content3">
                        <blockquote className="blockquote blockquotecls">
                            <p className="headcss1" style={{borderLeft: "3px solid #212326"}}><div className="pl-3">Explore! Dream! Discover!</div></p>
                            <p><Badge color="danger" pill>Create Your Own Blog!</Badge></p>
                            <p className="textcss pl-3">The big answer to the basic question, “why do people travel?” has occupied the minds of tourist researchers for many years. Various methods have been employed to uncover travel motives. The following literature will shed light on various theories that can be used to have a knowledge why people travel to urban destination.</p>
                        </blockquote>
                    </div>
                </div>
            </div>
        );

    }

}

export default Gallery;