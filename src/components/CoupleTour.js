import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle, Badge, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';

class CoupleTour extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem>Tours</BreadcrumbItem>
                        <BreadcrumbItem active>Couple Tour</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="container">
                    <div className="row row-content">
                        <div className="col-12 headcss mb-5"> Explore Best Couples Tours! </div>
                        <div className="col-12 col-md-6 col-xl-4">
                            <Card>
                                <CardImg className="cardimage img-fluid"  src="assets/images/pic-23.jpg" alt="Card image cap" />
                                <CardBody>
                                <CardTitle className="headcss1">French Autumn</CardTitle>
                                <CardText><Badge color="danger" pill>$1625.00</Badge></CardText>
                                <CardText className="textcss">Calceuss studere in infernum! Cum cedrium potus, omnes tumultumquees gratia fatalis, domesticus!</CardText>
                                <CardText>
                                    <div className="row">
                                        <div className="col-4 text-muted"><i className="fa fa-bell mr-2"></i>Meals</div>
                                        <div className="col-4 text-muted"><i className="fa fa-bookmark mr-2"></i>7 Days</div>
                                        <div className="col-4 text-muted"><i className="fa fa-plane mr-2"></i>Flight</div>
                                    </div>
                                </CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                            <Card>
                                <CardImg className="cardimage img-fluid"  src="assets/images/pic-24.jpg" alt="Card image cap" />
                                <CardBody>
                                <CardTitle className="headcss1">Grand Switzerland</CardTitle>
                                <CardText><Badge color="danger" pill>$2835.00</Badge></CardText>
                                <CardText className="textcss">Gabalium pius quadra est. Teres, altus triticums mechanice resuscitabo de clemens, gratis byssus!</CardText>
                                <CardText>
                                    <div className="row">
                                        <div className="col-4 text-muted"><i className="fa fa-bell mr-2"></i>Meals</div>
                                        <div className="col-4 text-muted"><i className="fa fa-bookmark mr-2"></i>7 Days</div>
                                        <div className="col-4 text-muted"><i className="fa fa-plane mr-2"></i>Flight</div>
                                    </div>
                                </CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                            <Card>
                                <CardImg className="cardimage img-fluid"  src="assets/images/pic-25.jpg" alt="Card image cap" />
                                <CardBody>
                                <CardTitle className="headcss1">Prague Trip</CardTitle>
                                <CardText><Badge color="danger" pill>$1315.00</Badge></CardText>
                                <CardText className="textcss">Aonidess observare in cella! Talis, nobilis liberis foris tractare de bi-color, clemens turpis!</CardText>
                                <CardText>
                                    <div className="row">
                                        <div className="col-4 text-muted"><i className="fa fa-bell mr-2"></i>Meals</div>
                                        <div className="col-4 text-muted"><i className="fa fa-bookmark mr-2"></i>7 Days</div>
                                        <div className="col-4 text-muted"><i className="fa fa-plane mr-2"></i>Flight</div>
                                    </div>
                                </CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                            <Card>
                                <CardImg className="cardimage img-fluid"  src="assets/images/pic-26.jpg" alt="Card image cap" />
                                <CardBody>
                                <CardTitle className="headcss1"> Phi-phi Trip</CardTitle>
                                <CardText><Badge color="danger" pill>$1625.00</Badge></CardText>
                                <CardText className="textcss">Cur capio mori? Lactas assimilant in bassus antenna! Olla de ferox lapsus, transferre zelus!</CardText>
                                <CardText>
                                    <div className="row">
                                        <div className="col-4 text-muted"><i className="fa fa-bell mr-2"></i>Meals</div>
                                        <div className="col-4 text-muted"><i className="fa fa-bookmark mr-2"></i>7 Days</div>
                                        <div className="col-4 text-muted"><i className="fa fa-plane mr-2"></i>Flight</div>
                                    </div>
                                </CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                            <Card>
                                <CardImg className="cardimage img-fluid"  src="assets/images/pic-27.jpg" alt="Card image cap" />
                                <CardBody>
                                <CardTitle className="headcss1">Rome Trip</CardTitle>
                                <CardText><Badge color="danger" pill>$1700.00</Badge></CardText>
                                <CardText className="textcss">Fidelis abactus solite perderes fermium est. Castus, azureus caniss vix reperire de placidus, fatalis gluten!</CardText>
                                <CardText>
                                    <div className="row">
                                        <div className="col-4 text-muted"><i className="fa fa-bell mr-2"></i>Meals</div>
                                        <div className="col-4 text-muted"><i className="fa fa-bookmark mr-2"></i>7 Days</div>
                                        <div className="col-4 text-muted"><i className="fa fa-plane mr-2"></i>Flight</div>
                                    </div>
                                </CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                            <Card>
                                <CardImg className="cardimage img-fluid"  src="assets/images/pic-28.jpg" alt="Card image cap" />
                                <CardBody>
                                <CardTitle className="headcss1">Prague Trip</CardTitle>
                                <CardText><Badge color="danger" pill>$1435.00</Badge></CardText>
                                <CardText className="textcss">Dexter zetas ducunt ad gallus. Ferox, emeritis caculas vix anhelare de dexter, velox decor!</CardText>
                                <CardText>
                                    <div className="row">
                                        <div className="col-4 text-muted"><i className="fa fa-bell mr-2"></i>Meals</div>
                                        <div className="col-4 text-muted"><i className="fa fa-bookmark mr-2"></i>7 Days</div>
                                        <div className="col-4 text-muted"><i className="fa fa-plane mr-2"></i>Flight</div>
                                    </div>
                                </CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                            <Card>
                                <CardImg className="cardimage img-fluid"  src="assets/images/pic-29.jpg" alt="Card image cap" />
                                <CardBody>
                                <CardTitle className="headcss1">Magnificent Italy</CardTitle>
                                <CardText><Badge color="danger" pill>$1200.00</Badge></CardText>
                                <CardText className="textcss">Ubi est ferox fortis? Cum gluten trabem, omnes ionicis tormentoes manifestum secundus, clemens idoleumes!</CardText>
                                <CardText>
                                    <div className="row">
                                        <div className="col-4 text-muted"><i className="fa fa-bell mr-2"></i>Meals</div>
                                        <div className="col-4 text-muted"><i className="fa fa-bookmark mr-2"></i>7 Days</div>
                                        <div className="col-4 text-muted"><i className="fa fa-plane mr-2"></i>Flight</div>
                                    </div>
                                </CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                            <Card> 
                                <CardImg className="cardimage img-fluid"  src="assets/images/pic-30.jpg" alt="Card image cap" />
                                <CardBody>
                                <CardTitle className="headcss1">Bora-Bora</CardTitle>
                                <CardText><Badge color="danger" pill>$2650.00</Badge></CardText>
                                <CardText className="textcss">Grandis, emeritis lubas recte manifestum de azureus, fortis nutrix. Messis semper ducunt ad nobilis absolutio!</CardText>
                                <CardText>
                                    <div className="row">
                                        <div className="col-4 text-muted"><i className="fa fa-bell mr-2"></i>Meals</div>
                                        <div className="col-4 text-muted"><i className="fa fa-bookmark mr-2"></i>7 Days</div>
                                        <div className="col-4 text-muted"><i className="fa fa-plane mr-2"></i>Flight</div>
                                    </div>
                                </CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                            <Card>
                                <CardImg className="cardimage img-fluid"  src="assets/images/pic-31.jpg" alt="Card image cap" />
                                <CardBody>
                                <CardTitle className="headcss1">Discover Japan</CardTitle>
                                <CardText><Badge color="danger" pill>$1500.00</Badge></CardText>
                                <CardText className="textcss">Musa de bassus elogium, convertam gemna! Cum xiphias mori, omnes eposes imitari gratis, nobilis amicitiaes!</CardText>
                                <CardText>
                                    <div className="row">
                                        <div className="col-4 text-muted"><i className="fa fa-bell mr-2"></i>Meals</div>
                                        <div className="col-4 text-muted"><i className="fa fa-bookmark mr-2"></i>7 Days</div>
                                        <div className="col-4 text-muted"><i className="fa fa-plane mr-2"></i>Flight</div>
                                    </div>
                                </CardText>
                                </CardBody>
                            </Card>
                        </div>
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

}

export default CoupleTour;