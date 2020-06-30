import React, { useState } from 'react';
import { Card, CardBody,CardSubtitle,CardText,CardTitle, Badge,CardImg, Breadcrumb, BreadcrumbItem,
 TabContent, TabPane, Nav, NavItem, NavLink, Button,Row, Col, Spinner,Modal, ModalHeader, ModalBody, ModalFooter, Alert} from 'reactstrap';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { baseUrl } from '../shared/baseUrl';

const ModalExample = (props) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <div className="row justify-content-center mb-5" style={{margin:"0px auto"}}>
        <Link to="/tours"><Button className="button1 mr-1" title="back to tourlist" size="lg"><i className="fa fa-arrow-left" /> Back</Button></Link>
        <Button className="button2" onClick={toggle} size="lg"><i className="fa fa-pencil" /> Book Now!</Button>
        <Link to={`/service/${props.tour.serviceId}`}><Button title="Go To servicePage" className="button1 mr-1 ml-1" size="lg"><i className="fa fa-arrow-right" /> Go</Button></Link>
      </div>
      <Modal isOpen={modal} toggle={toggle} className="modal-content2">
        <Alert color="dark">
        <div className="textcss" style={{textAlign: "center"}}><i className="fa fa-sign-in fa-lg"></i> Please Sign Up!</div>
        </Alert>
      </Modal>
    </div>
  );
}

const Example = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
      <Nav tabs>
        <NavItem> 
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
           <i className="fa fa-list">  INFORMATION</i>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
           <i className="fa fa-plane">  TRAVEL PLAN</i> 
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
          <i className="fa fa-photo">  OUR GALLERY</i>
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
                <p className="icon-list2 mt-5 mb-5">Parma noceres, tanquam varius guttus. Cum hippotoxota observare, omnes uriaes promissio camerarius, superbus devatioes.</p>
                <p className="textcss5">{props.tour.moredescription}</p>  
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
             <Col sm="12">
                <p className="icon-list2 mt-5 mb-5">Cur finis favere? A falsis, candidatus flavum hippotoxota. Regius, gratis messors cito imperium de salvus, emeritis resistentia.</p>
                <p className="textcss5">Velox habitio mechanice convertams amor est. Tuss velum in tectum! Abaculus noster secula est. Victrix de salvus secula, imitari cursus! Credere recte ducunt ad varius gemna. Zirbus potuss, tanquam raptus onus. Eheu, secundus pulchritudine! Ignigena germanus mortem est. Sunt abactores contactus grandis, bassus fiscinaes. Messis diligenter ducunt ad regius hilotae. A falsis, ratione pius resistentia. Historia magnum accola est. Ubi est ferox zelus? Brevis cobaltums ducunt ad domus. Sunt tuses examinare grandis, fatalis calcariaes. Index de bi-color elogium, manifestum adelphis! Fidelis, salvus dominas inciviliter imperium de rusticus, ferox idoleum.</p>  
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <div className="row">
            <div className="col-12 col-md-6 col-xl-4">
              <CardImg width="600px" height="250px" src={baseUrl+ props.tour.gimage1} className="m-3 cardimage" />
            </div>
            <div className="col-12 col-md-6 col-xl-4">
              <CardImg width="600px" height="250px" src={baseUrl+ props.tour.gimage2} className="m-3 cardimage" />
            </div>
            <div className="col-12 col-md-6 col-xl-4">
              <CardImg width="600px" height="250px" src={baseUrl+ props.tour.gimage3} className="m-3 cardimage"/>
            </div>
            <div className="col-12 col-md-6 col-xl-4">
              <CardImg width="600px" height="250px" src={baseUrl+ props.tour.gimage4} className="m-3 cardimage"/>
            </div>
            <div className="col-12 col-md-6 col-xl-4">
              <CardImg width="600px" height="250px" src={baseUrl+ props.tour.gimage5} className="m-3 cardimage"/>
            </div>
            <div className="col-12 col-md-6 col-xl-4">
              <CardImg width="600px" height="250px" src={baseUrl+ props.tour.gimage6} className="m-3 cardimage"/>
            </div>
          </div>
        </TabPane>
      </TabContent>
    </div>
  );
}

const TourDetails = (props) => {

  console.log(props.tour);//tour itself a object

    if(props.isLoading){
      return(
            <div className="container">
              <div className="row row-content justify-content-center">
                  <Spinner animation="grow" className="mt-5"/><p className="textcss mt-5">Loading...</p>
              </div>
            </div>
      );
    }

    else if(props.errMess){
      return(
        <div className="container">
            <div className="row">
                <h4>{props.errMess}</h4>
            </div>   
        </div>
      );
    }
    else if (props.tour != null)
        return(
            <div>
                <div className="breadcrumb">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/tours">Tours</Link></BreadcrumbItem>
                        <BreadcrumbItem active>ToursDetails</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="container">
                    <div className="row row-content">
                        <div className="col-12 headcss1 mt-5 mb-5"><p>{props.tour.name}</p></div>
                        <div className="col-12 col-xl-6"><CardImg height="470px" width="464px" src={baseUrl + props.tour.image} alt="Card image cap" /></div>
                        <div className="col-12 col-xl-6">
                            <Card>
                            <CardBody>
                                <CardTitle className="headcss1">{props.tour.name}</CardTitle>
                                <CardSubtitle className="mb-2"><div class="price-group"><span class="price-group__sale">{props.tour.modifiedprice}</span><span class="price-group__price-old">{props.tour.price}</span></div></CardSubtitle>
                                <CardText className="textcss4">
                                {props.tour.description}
                                </CardText>
                                <CardText className="icon-list"><i className="fa fa-table fa-lg"> Flexible Dates</i></CardText>
                                <CardText className="icon-list"><i className="fa fa-user fa-lg"> Per Person</i></CardText>
                                <CardText className="icon-list"><i className="fa fa-star fa-lg"> Economy Class</i></CardText>
                            </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row row-content">
                        <Example tour={props.tour}  />
                    </div>
                </div>
                <ModalExample tour={props.tour} />
            </div>
        );
}

export default TourDetails;