import React,{ Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'; 
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { fetchTopblogs, fetchBlogs, fetchTours, fetchService, postFeedback, postSignUp } from '../redux/ActionCreators';

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import AboutUs from './AboutUsComponent';
import Tour from './GroupTour';
import Gallery from './GalleryComponent';
import Service from './ServiceComponent';
import ContactUs from './ContactUs';
import TourDetails from './ToursDetails';
import ServiceDetails from './ServiceDetails';



const mapStateToProps = state => {
    return{
        tours: state.tours,
        service: state.service,
        blogs: state.blogs,
        topblogs: state.topblogs
    }
}

const mapDispatchToprops = dispatch => ({

    fetchTopblogs: () => {dispatch(fetchTopblogs())},
    fetchBlogs: () => {dispatch(fetchBlogs())},
    resetFeedbackForm: () => {dispatch(actions.reset('feedback'))},
    resetSignUpForm: () => {dispatch(actions.reset('signup'))},
    fetchTours: () => {dispatch(fetchTours())},
    fetchService: () => {dispatch(fetchService())},
    postFeedback: (firstname, lastname, telnum, email, message) => dispatch(postFeedback(firstname, lastname, telnum, email, message)),
    postSignUp: (firstname, lastname, email, password, description) => dispatch(postSignUp(firstname, lastname, email, password, description)) 

});


class Main extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchTopblogs();
        this.props.fetchBlogs();
        this.props.fetchTours();
        this.props.fetchService();
    }

    render(){

        const HomePage = () => {
            return(
                <Home topblogs={this.props.topblogs} />
            );
        }
        const TourPage = () => {
            return(
                <Tour tours={this.props.tours} />
            );
        }
        const ServicePage = () => {
            return(
                <Service service={this.props.service}/>
            );
        }

        const GalleryPage = () => {
            return(
                <Gallery blogs={this.props.blogs} />
            );
        }

        const TourWithId= ({match}) => {
            return(
                <TourDetails tour={this.props.tours.tours.filter((tour) => tour.id === parseInt(match.params.tourId,10))[0]} 
                isLoading= {this.props.tours.isLoading}
                errMess= {this.props.tours.errMess} />
            );
        }

        const ServiceWithId= ({match}) => {
            return(
                <ServiceDetails service={this.props.service.service.filter((service) => service.id === parseInt(match.params.serviceId,10))[0]}
                isLoading={this.props.service.isLoading}
                errMess={this.props.service.errMess}
                tours={this.props.tours.tours.filter((tour) => tour.serviceId === parseInt(match.params.serviceId))} />
            );
        }

        return(
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/aboutus' component={() => <AboutUs />} />
                    <Route exact path='/tours' component={TourPage} />
                    <Route exact path='/gallery' component={GalleryPage} />
                    <Route exact path='/service' component={ServicePage} />
                    <Route exact path='/contactus' component={()=><ContactUs resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback} /> } />
                    <Route exact path='/tours/:tourId' component={TourWithId} />
                    <Route exact path='/service/:serviceId' component={ServiceWithId} />
                    <Redirect to="/home" />
                </Switch>
                <Footer resetSignUpForm={this.props.resetSignUpForm} postSignUp={this.props.postSignUp} />
            </div>
        );
    }

}

export default withRouter(connect(mapStateToProps, mapDispatchToprops)(Main));