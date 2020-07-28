import React, { Component, useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav,NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Jumbotron,
 Modal,ModalBody,ModalFooter,ModalHeader,Form,FormGroup,Input, Button} from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';

class Header extends Component{

    constructor(props){
        super(props);

        this.state={
            isNavOpen:false,
            isModalOpen:false,
        };

        this.ToggleNav=this.ToggleNav.bind(this);
        this.ToggleModal=this.ToggleModal.bind(this);
        this.handleLogin=this.handleLogin.bind(this);

    }

    componentDidMount() {
        window.addEventListener('scroll' , () => {
            const isTop = window.scrollY > 100;
            const nav = document.getElementById('nav');
            if (isTop) {
                nav.classList.add('scrolled');
            }else {
                nav.classList.remove('scrolled');
            }
        });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll');
    }

    ToggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    ToggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event) {
        this.toggleModal();
        alert("You searched: " + this.search.value);
        event.preventDefault();
    }

    render(){
        return(
            <React.Fragment>
                <Navbar  dark expand="xl" fixed="top" id="nav">
                    <div className="container">
                        <div className="row" style={{width: "100%"}}>
                            <div className="col-md-4">
                            <NavbarToggler onClick={this.ToggleNav} />
                            <NavbarBrand className="mr-auto pl-3" href="/"><img src="assets/images/logo.png" className="img-fluid"
                             alt="Explore"/>
                            </NavbarBrand>
                            </div>
                            <div className="col-md-8">
                            <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                <NavLink className="nav-link" to="/home" style={{color: "white"}}>
                                    <span className="fa fa-home fa-lg"></span> Home
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                <NavLink className="nav-link" to="/aboutus" style={{color: "white"}}>
                                        <span className="fa fa-info fa-lg"></span> About Us
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                <NavLink className="nav-link" to="/tours" style={{color: "white"}}>
                                        <span className="fa fa-fighter-jet fa-lg"></span> Tours
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/service" style={{color: "white"}}><span className="fa fa-edit fa-lg"></span> Service</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/gallery" style={{color: "white"}}><span className="fa fa-photo fa-lg"></span> Blogs</NavLink>
                                </NavItem>
                                <NavItem>
                                <NavLink className="nav-link" to="/contactus" style={{color: "white"}}><span className="fa fa-address-book fa-lg"></span> Contact Us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <Button color="dark" className="btn-sm mt-1 ml-1" onClick={this.ToggleModal}>
                                        <span className="fa fa-search fa-lg"></span> 
                                    </Button>
                                </NavItem>
                            </Nav>
                            </Collapse>
                            </div>
                        </div>
                    </div>
                </Navbar>
                <Modal isOpen={this.state.isModalOpen} toggle={this.ToggleModal}>
                    <ModalHeader toggle={this.ToggleModal} className="modalheader">SearchBar</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                          <FormGroup>
                            <Input type="text" id="search" name="search" placeholder="search.." 
                             innerRef={(input) => this.search = input}/>
                          </FormGroup>
                          <ModalFooter>
                          <Button type="submit" value="submit" color="dark"><span className="fa fa-search fa-lg"></span>Search</Button>
                          </ModalFooter>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }

}

export default Header;