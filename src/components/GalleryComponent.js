import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle, Badge, Breadcrumb, BreadcrumbItem, Button, Spinner} from 'reactstrap';
import {Link} from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';


function RenderBlogsItem({blog}){
    return(
        <Card>
            <CardImg top width="100%" height="350px" className="cardimage" src={baseUrl + blog.image} alt={blog.name} />
            <CardBody>
            <CardTitle className="headcss1">{blog.name}</CardTitle>
            <CardText className="textcss">{blog.description}</CardText>
            <CardText>
                <small className="text-muted">{blog.label}</small>
            </CardText>
            <CardText>
                <Button color="info" className="btn-lg button1">Read More</Button>
            </CardText>
            </CardBody>
        </Card>
    );
}

const Gallery = (props) =>{

    const BlogsList = props.blogs.blogs.map((blog) => {
        return(
            <div key={blog.id} className="col-12 col-md-4 mt-5 mb-5">
                <RenderBlogsItem blog={blog} />
            </div>
        );
    });

    if(props.blogs.isLoading){
        return(
            <div className="container">
                <div className="row row-content justify-content-center">
                    <Spinner animation="grow" className="mt-5"/><p className="textcss mt-5">Loading...</p>
                </div>
            </div>
        );
    }

    else if(props.blogs.errMess){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h4>{props.blogs.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }



        return(
            <div>
                <div className="breadcrumb">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Gallery</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="container">
                    <div className="row row-content">
                        <div className="col-12 headcss mb-5">Explore our Gallery</div>
                        {BlogsList}
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

export default Gallery;