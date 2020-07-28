import React, { Component } from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle, Button, CardHeader } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class AboutUs extends Component{
    
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div>
                <div className="breadcrumb breadcrumbBgimage">
                    <Breadcrumb>
                        <div className="row">
                            <h3 className="col-12" style={{color: "#ffff"}}>About</h3>
                            <BreadcrumbItem><Link to="/home" style={{color: "#ffff"}}>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>AboutUs</BreadcrumbItem>
                        </div>
                    </Breadcrumb>
                </div>
                <div className="row row-content mb-5" style={{backgroundImage: "url('assets/images/pic-53.jpg')", backgroundRepeat:"no-repeat", backgroundSize: "cover"}}>
                    <div className="container">
                        <div className="row align-items-center row-content1">
                            <div className="col-12 col-md-6 col-xl-3" >
                                <img src='assets/images/pic-16.jpg' alt='Hotels' className="img-fluid img16"/>
                            </div>
                            <div className="col-12 col-md-6 col-xl-3" >
                                <img src='assets/images/pic-17.jpg' alt='Hotels' className="img-fluid img17"/>
                            </div>
                            <div className="col-12 col-xl-6">
                                <h2 className="headcss">A FEW WORDS<br/>ABOUT US</h2>
                                <p className="textcss2 mt-5 mb-3">Founded in 2006, Explore was established by driven, dynamic, and innovative individuals who banded together.</p>
                                <p className="textcss3">Within five years of business operations, we have expanded Backpack Story and opened up three other subsidiary offices to focus on the various needs of our customers. After just two years in the business, Journez was presented with two valuable awards – the US Travel Excellence Award 2013.</p>
                                <p className="textcss3">In addition, the travel agency has gone through the year-long Customer- Centric Initiative (CCI) program and successfully attained the US Service Class certification. We offer plenty of destinations, including Europe, USA, and Exotic long haul tours, making it professional to provide better service.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row row-content">
                        <div className="col-12 mb-5">
                            <h2 className="headcss">MEET OUR TEAM</h2>
                        </div>
                        <div className="col-12 col-md-4">
                            <Card>
                                <CardImg top width="100%" src="assets/images/pic-19.jpg" alt="Card image cap" />
                                <CardBody style={{backgroundColor: "#212326"}}>
                                <CardTitle className="headcss2">Sophie Robbins</CardTitle>
                                <CardText>
                                    <small className="text-muted">Travel Agent</small>
                                </CardText>
                                <CardText>
                                    <small className="text-muted">
                                        <Button outline className="mr-2 btn-sm" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></Button>
                                        <Button outline className="mr-2 btn-sm" href="http://www.linkedin.com/in/"><i className="fa fa-instagram"></i></Button>
                                        <Button outline className="mr-2 btn-sm" href="http://twitter.com/"><i className="fa fa-twitter"></i></Button>
                                        <Button outline className="mr-2 btn-sm" href="http://youtube.com/"><i className="fa fa-pinterest"></i></Button>
                                    </small>
                                </CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-4">
                            <Card>
                                <CardImg top width="100%" src="assets/images/pic-20.jpg" alt="Card image cap" />
                                <CardBody style={{backgroundColor: "#212326"}}>
                                <CardTitle className="headcss2">Ted Howells</CardTitle>
                                <CardText>
                                    <small className="text-muted">Tour Guide</small>
                                </CardText>
                                <CardText>
                                    <small className="text-muted">
                                        <Button outline className="mr-2 btn-sm" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></Button>
                                        <Button outline className="mr-2 btn-sm" href="http://www.linkedin.com/in/"><i className="fa fa-instagram"></i></Button>
                                        <Button outline className="mr-2 btn-sm" href="http://twitter.com/"><i className="fa fa-twitter"></i></Button>
                                        <Button outline className="mr-2 btn-sm" href="http://youtube.com/"><i className="fa fa-pinterest"></i></Button>
                                    </small>
                                </CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-4">
                            <Card>
                                <CardImg top width="100%" src="assets/images/pic-21.jpg" alt="Card image cap" />
                                <CardBody style={{backgroundColor: "#212326"}}>
                                <CardTitle className="headcss2">Janette Brooks</CardTitle>
                                <CardText>
                                    <small className="text-muted">Travel Visa Specialist</small>
                                </CardText>
                                <CardText>
                                    <small className="text-muted">
                                        <Button outline className="mr-2 btn-sm" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></Button>
                                        <Button outline className="mr-2 btn-sm" href="http://www.linkedin.com/in/"><i className="fa fa-instagram"></i></Button>
                                        <Button outline className="mr-2 btn-sm" href="http://twitter.com/"><i className="fa fa-twitter"></i></Button>
                                        <Button outline className="mr-2 btn-sm" href="http://youtube.com/"><i className="fa fa-pinterest"></i></Button>
                                    </small>
                                </CardText>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                    <div className="row row-content">
                        <div className="col-12">
                            <h2 className="headcss mb-5">WHAT YOU GET WITH US</h2>
                        </div>
                        <div className="col-12 col-md-3">
                            <Card>
                                <CardHeader className="cardHeader"><span className="fa fa-umbrella fa-lg coloricon"></span></CardHeader>
                                <CardBody>
                                <CardTitle className="headcss1">Daily Tours</CardTitle>
                                <CardText className="textcss">Cras eget vehicula metus, et lacinia nunc. Maecenas facilisis, orciut gravida posuer</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-3">
                            <Card>
                                <CardHeader className="cardHeader"><span className="fa fa-ship fa-lg coloricon"></span></CardHeader>
                                <CardBody>
                                <CardTitle className="headcss1">Cruises</CardTitle>
                                <CardText className="textcss">Bassus hippotoxota grauiter quaestios finis est. Castor de regius verpa, convertam orgia!</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-3">
                            <Card>
                                <CardHeader className="cardHeader"><span className="fa fa-car fa-lg coloricon"></span></CardHeader>
                                <CardBody>
                                <CardTitle className="headcss1">Epic journeys</CardTitle>
                                <CardText className="textcss">Hercle, nuptia azureus!, orexis! Cum ventus potus, omnes exsules promissio magnum.</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-3">
                            <Card>
                                <CardHeader className="cardHeader"><span className="fa fa-tree fa-lg coloricon"></span></CardHeader>
                                <CardBody>
                                <CardTitle className="headcss1">NEW DESTINATIONS</CardTitle>
                                <CardText className="textcss">Vae, plasmator! Teres, brevis guttuss etiam contactus de neuter, fortis gabalium!</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-3">
                            <Card>
                                <CardHeader className="cardHeader"><span className="fa fa-bicycle fa-lg coloricon"></span></CardHeader>
                                <CardBody>
                                <CardTitle className="headcss1">CYCLING TRIPS</CardTitle>
                                <CardText className="textcss">Scutum brevis silva est. Alter, bassus fermiums sensim anhelare de barbatus, castus tabes.</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-3">
                            <Card>
                                <CardHeader className="cardHeader"><span className="fa fa-phone fa-lg coloricon"></span></CardHeader>
                                <CardBody>
                                <CardTitle className="headcss1">24/7 ONLINE SUPPORT</CardTitle>
                                <CardText className="textcss">Velum acceleratrix ducunt ad velox visus. Observare solite ducunt ad fortis ionicis tormento.</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-3">
                            <Card>
                                <CardHeader className="cardHeader"><span className="fa fa-home fa-lg coloricon"></span></CardHeader>
                                <CardBody>
                                <CardTitle className="headcss1">ECO LODGES & TOURS</CardTitle>
                                <CardText className="textcss">Heu, ferox classis! Fortis, varius candidatuss mechanice tractare de placidus, grandis absolutio.</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-3">
                            <Card>
                                <CardHeader className="cardHeader"><span className="fa fa-bus fa-lg coloricon"></span></CardHeader>
                                <CardBody>
                                <CardTitle className="headcss1">BUS TOURS</CardTitle>
                                <CardText className="textcss">A falsis, adiurator velox idoleum. Placidus, ferox lunas sensim fallere de fatalis, germanus rector!</CardText>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="row row-content mt-5 mb-5 p-5" style={{backgroundImage: "url('assets/images/pic-22.jpg')", backgroundRepeat:"no-repeat", backgroundSize: "cover"}}>
                    <div className="container">
                        <div className="row row-content bgrow">
                            <div className="col-6 col-md-3 col-xl-2">
                                <img className="img-fluid overlay2" src="assets/images/logo1.png" />
                            </div>
                            <div className="col-6 col-md-3 col-xl-2">
                                <img className="img-fluid overlay2" src="assets/images/logo-2.png" />
                            </div>
                            <div className="col-6 col-md-3 col-xl-2">
                                <img className="img-fluid overlay2" src="assets/images/logo-3.png" />
                            </div>
                            <div className="col-6 col-md-3 col-xl-2">
                                <img className="img-fluid overlay2" src="assets/images/logo-4.png" />
                            </div>
                            <div className="col-6 col-md-3 col-xl-2">
                                <img className="img-fluid overlay2" src="assets/images/logo-5.png" />
                            </div>
                            <div className="col-6 col-md-3 col-xl-2">
                                <img className="img-fluid overlay2" src="assets/images/logo-6.png" />
                            </div>
                            <div className="col-6 col-md-3 col-xl-2">
                                <img className="img-fluid overlay2" src="assets/images/logo-7.png" />
                            </div>
                            <div className="col-6 col-md-3 col-xl-2">
                                <img className="img-fluid overlay2" src="assets/images/logo-8.png" />
                            </div>
                            <div className="col-6 col-md-3 col-xl-2">
                                <img className="img-fluid overlay2" src="assets/images/logo-9.png" />
                            </div>
                            <div className="col-6 col-md-3 col-xl-2">
                                <img className="img-fluid overlay2" src="assets/images/logo-10.png" />
                            </div>
                            <div className="col-6 col-md-3 col-xl-2">
                                <img className="img-fluid overlay2" src="assets/images/logo-11.png" />
                            </div>
                            <div className="col-6 col-md-3 col-xl-2">
                                <img className="img-fluid overlay2" src="assets/images/logo-12.png" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row row-content headcss">
                        <div className="col-12 headcss mb-5">Recent Facts About Our Tour Agency</div>
                        <div className="col-12 col-md-6 col-xl-3">
                            <Card>
                                <CardHeader className="cardHeader"><span className="fa fa-user fa-lg coloricon"></span></CardHeader>
                                <CardBody>
                                <CardTitle className="headcss1">3241</CardTitle>
                                <CardText className="textcss">HAPPY CUSTOMERS</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-6 col-xl-3">
                            <Card>
                                <CardHeader className="cardHeader"><span className="fa fa-plane fa-lg coloricon"></span></CardHeader>
                                <CardBody>
                                <CardTitle className="headcss1">787</CardTitle>
                                <CardText className="textcss">FLIGHTS</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-6 col-xl-3">
                            <Card>
                                <CardHeader className="cardHeader"><span className="fa fa-home fa-lg coloricon"></span></CardHeader>
                                <CardBody>
                                <CardTitle className="headcss1">1204</CardTitle>
                                <CardText className="textcss">HOTELS TO STAY</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-6 col-xl-3">
                            <Card>
                                <CardHeader className="cardHeader"><span className="fa fa-list fa-lg coloricon"></span></CardHeader>
                                <CardBody>
                                <CardTitle className="headcss1">9874</CardTitle>
                                <CardText className="textcss">AWESOME TOURS</CardText>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}

export default AboutUs;

