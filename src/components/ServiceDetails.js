import React , { Component } from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardTitle, CardBody, Button, Badge, Breadcrumb, BreadcrumbItem, Spinner} from 'reactstrap';
import {Link} from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';


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


const ServiceDetails = (props) => {
   
   console.log(props.tours);

    const ServiceTourlist = props.tours.map((tour) => {
        return(
            <div key={tour.id} className="col-12 col-md-6 col-xl-4">
                <RenderTours tour={tour} />
            </div>
        );
    });
    
    
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
    else if (props.service != null)
            return(
                <div>
                    <div className="breadcrumb breadcrumbBgimage">
                    <Breadcrumb>
                        <div className="row">
                            <h3 className="col-12" style={{color: "#ffff"}}>{props.service.name}</h3>
                            <BreadcrumbItem><Link to="/home" style={{color: "#ffff"}}>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem style={{color: "#ffff"}}>services</BreadcrumbItem>
                            <BreadcrumbItem active>{props.service.name}</BreadcrumbItem>
                        </div>
                    </Breadcrumb>
                </div>
                    <div className="container">
                        <div className="row headcss1 mt-5 mb-5" style={{margin:"0px auto"}}>{props.service.name}</div>
                        <div className="row mb-5" style={{margin:"0px auto"}}><CardImg height="544px" width="100%" src={baseUrl+props.service.image} alt={"img"} /></div>
                        <div className="row mb-5" style={{margin:"0px auto"}}>
                            <div className="col-12"><p className="icon-list2 mb-3">Triticums persuadere! Assimilatio ferox torus est. Fluctui de fatalis finis, talem magister! A falsis, epos emeritis pars. Rectors mori! Cum lapsus mori, omnes bullaes examinare neuter, flavum calceuses. Est secundus bromium, cesaris.</p></div>
                            <div className="col-12"><p className="textcss5 mb-3">Varius zirbuss ducunt ad domus. Ubi est bi-color devirginato? Est bi-color exemplar, cesaris. Hercle, silva castus!, vita! Calceus bassus castor est. Scutum, advena, et glos. Resistentias sunt magisters de mirabilis lacta. Deus, axona, et acipenser. A falsis, bursa clemens castor. A falsis, fiscina flavum deus. Grandis hippotoxota absolute locuss clinias est. Ubi est magnum coordinatae? Cur deus peregrinatione? Vae. Cum fermium ire, omnes scutumes gratia noster, magnum zetaes. Ubi est camerarius capio? Cum adelphis crescere, omnes triticumes aperto velox, pius buboes. A falsis, palus azureus plasmator. Teres silvas ducunt ad galatae. Lapsuss sunt magisters de camerarius domus. A falsis, humani generis castus navis. Heu. Fermiums mori, tanquam festus itineris tramitem. Ubi est azureus torus? Fermiums accelerare in brema! Rusticus, pius accentors etiam acquirere de primus, lotus extum. Ubi est camerarius accola? Ratione assimilants, tanquam mirabilis cobaltum. Nunquam captis genetrix. Nunquam prensionem planeta. Spatiis peregrinationes! Eheu, exsul! A falsis, species barbatus silva. Clemens, audax ususs interdum convertam de camerarius, dexter acipenser.</p></div>
                        </div>
                        <div className="row mb-5" style={{margin:"0px auto"}}>
                            <div className="col-12"><p className="icon-list2 mb-3">Lotus, fidelis cobaltums diligenter manifestum de altus, clemens galatae. Hercle, humani generis placidus!, advena! Albus zetas ducunt ad palus. Heu, emeritis fortis! Altus, domesticus adgiums rare consumere de fatalis, peritus stella.</p></div>
                            <div className="col-12"><p className="textcss5 mb-5">Salvus exemplar rare resuscitabos finis est. Altus vox diligenter falleres genetrix est. Cur abactor accelerare? Nunquam perdere onus. Abactor de altus mons, dignus quadra! Guttus de primus vox, quaestio nutrix! Ubi est altus turpis? Est fatalis nuclear vexatum iacere, cesaris. Sunt medicinaes vitare velox, mirabilis solemes. Est bassus mens, cesaris. Nunquam vitare turpis. Cur repressor cadunt? Hercle, nomen mirabilis!. Eheu. Clabulares ortum! Teres palus aliquando anhelares historia est. Placidus nomens ducunt ad fiscina. Liberis peregrinationes, tanquam bassus guttus. Magnum, nobilis turpiss absolute talem de varius, azureus classis. Eleatess credere! Cur hippotoxota studere? Cur elogium mori? Rusticus agripeta una apertos torus est. Nunquam convertam fides. Vae, flavum adiurator! Heu, noster cobaltum! Pol, competition! Primus habena interdum promissios gabalium est. Ubi est teres uria? Equisos velum in antverpia! Lotus toruss ducunt ad acipenser. Ubi est emeritis secula? Cum extum ridetis, omnes danistaes anhelare teres, placidus messores. A falsis, calcaria flavum diatria. Eheu. Cum bursa ortum, omnes stellaes vitare raptus, clemens vortexes.</p></div>
                        </div>
                        <div className="row m-5 headcss1">Explore Best {props.service.name}</div>
                        <div className="row mb-5" style={{margin:"0px auto"}}>
                            {ServiceTourlist}
                        </div>
                        <div className="row mb-5 justify-content-center" style={{margin:"0px auto"}}><Link to="/service"><Button className="button1" size="lg"><i className="fa fa-arrow-left" /> Back</Button></Link></div>
                    </div>
                </div>
            );
}

export default ServiceDetails;