import React,{ Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'; 

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import AboutUs from './AboutUsComponent';
import SoloTour from './SoloTour';
import GroupTour from './GroupTour';
import CoupleTour from './CoupleTour';
import Gallery from './GalleryComponent';
import LongHoliday from './LongHolidays';
import JustBreak from './JustBreak';
import ContactUs from './ContactUs';


class Main extends Component {

    constructor(props){
        super(props);
    }

    render(){

        const HomePage = () => {
            return(
                <Home />
            );
        }

        return(
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/aboutus' component={() => <AboutUs />} />
                    <Route exact path='/solotour' component={() => <SoloTour />} />
                    <Route exact path='/grouptour' component={() => <GroupTour />} />
                    <Route exact path='/coupletour' component={() => <CoupleTour />} />
                    <Route exact path='/gallery' component={() => <Gallery />} />
                    <Route exact path='/longholidays' component={() => <LongHoliday />} />
                    <Route exact path='/justbreak' component={() => <JustBreak />} />
                    <Route exact path='/contactus' component={()=><ContactUs /> } />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }

}

export default Main;