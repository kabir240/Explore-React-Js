import React, { Component } from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardTitle, CardBody, Button, Badge, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

class LongHoliday extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem>Service</BreadcrumbItem>
                        <BreadcrumbItem active>LongHoliday</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="container">
                    <div className="row row-content">
                        <div className="col-12 headcss mb-5">WHAT WE OFFER</div>
                        <div className="col-12 col-md-6 col-xl-4">
                            <Card>
                                <CardImg height="400px" className="cardimage" width="100%" src="assets/images/pic-33.jpg" alt="Card image cap" />
                                <CardBody>
                                <CardTitle className="headcss1">Mountain Tours</CardTitle>
                                <CardText className="textcss">Is mountaineering in your blood? Get a tour to Andes or Himalayas.</CardText>
                                <CardText>
                                    <Button color="info" className="btn-lg button1">Read More</Button>
                                </CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                            <Card>
                                <CardImg height="400px" className="cardimage" width="100%" src="assets/images/pic-34.jpg" alt="Card image cap" />
                                <CardBody>
                                <CardTitle className="headcss1">Honeymoon Tours</CardTitle>
                                <CardText className="textcss">Spend your first days as a married couple at any place all over the world.</CardText>
                                <CardText>
                                    <Button color="info" className="btn-lg button1">Read More</Button>
                                </CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                            <Card>
                                <CardImg height="400px" className="cardimage" width="100%" src="assets/images/pic-35.jpg" alt="Card image cap" />
                                <CardBody>
                                <CardTitle className="headcss1">Sea Tours</CardTitle>
                                <CardText className="textcss">Bath in any ocean thanks to the line of special exotic water tours.</CardText>
                                <CardText>
                                    <Button color="info" className="btn-lg button1">Read More</Button>
                                </CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                            <Card>
                                <CardImg height="400px" className="cardimage" width="100%" src="assets/images/pic-36.jpg" alt="Card image cap" />
                                <CardBody>
                                <CardTitle className="headcss1">Cruises</CardTitle>
                                <CardText className="textcss">A cruise liner will provide you with all your special needs throughout your journey.</CardText>
                                <CardText>
                                    <Button color="info" className="btn-lg button1">Read More</Button>
                                </CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                            <Card>
                                <CardImg height="400px" className="cardimage" width="100%" src="assets/images/pic-38.jpg" alt="Card image cap" />
                                <CardBody>
                                <CardTitle className="headcss1">Safari Tours</CardTitle>
                                <CardText className="textcss">Enjoy the best safari tours and get an unforgettable experience with us.</CardText>
                                <CardText>
                                    <Button color="info" className="btn-lg button1">Read More</Button>
                                </CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                            <Card>
                                <CardImg height="400px" className="cardimage" width="100%" src="assets/images/pic-37.jpg" alt="Card image cap" />
                                <CardBody>
                                <CardTitle className="headcss1">Gourmet tours</CardTitle>
                                <CardText className="textcss">Are you a gourmet? Then you should definitely check out one of our food routes!</CardText>
                                <CardText>
                                    <Button color="info" className="btn-lg button1">Read More</Button>
                                </CardText>
                                </CardBody>
                            </Card>
                        </div>
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

}

export default LongHoliday;