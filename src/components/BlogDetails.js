import React, {useState} from 'react';
import {Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption, CardImg,Spinner, Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText, Media} from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';

const items = [
  {
    src: '/assets/images/pic-55.jpg',
    altText: 'Slide 1',
    caption: 'Deep drive into of magnificant blogs of our traveler.',
    header: 'Explore Blogs',
    key: '1'
  },
   {
    src: '/assets/images/pic-56.jpg',
    altText: 'Become A Blogger',
    caption: 'Want to be blogger at first be a solo traveler.',
    header: 'Become A Blogger',
    key: '2'
  },
  {
    src: '/assets/images/pic-57.jpg',
    altText: 'Slide 3',
    caption: 'Share Your blogs across the World.',
    header: 'Share Your Blogs',
    key: '3'
  }
];

const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <div className="overley"></div>
        <img src={item.src} alt={item.altText} width="100%" height="650" />
        <CarouselCaption captionText={item.caption} captionHeader={item.header} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

const BlogDetails = (props) => {
    console.log(props.blog);
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
    else if (props.blog != null)
    return(
        <div>
        <div><Example /></div>
        <div className="container">
          <div className="row row-content">
            <div className="col-12 col-md-8">
              <CardImg height="400px" width="100%" src={baseUrl+props.blog.image} alt={"img"} />
              <div className="row mt-4">
              <div className="col-12 row justify-content-center headcss1">{props.blog.name}</div>
              <div className="col-12 textcss ml-3 mt-3">{props.blog.description}</div>
              <div className="col-12"><p className="textcss pl-2 mt-3">{props.blog.moredescription}</p></div>
              <div className="col-12 d-flex justify-content-xl-end pr-5 mr-5"><p className="text-muted">{props.blog.label}</p></div>
              <div className="col-12">
              <Card>
                <CardHeader className="headcss1 row justify-content-center">About the Author</CardHeader>
                <div className="row">
                  <div className="col-12 col-md-4 mt-4"><CardImg height="240px" src={baseUrl+props.blog.labelimage} alt={"img"} /></div>
                  <div className="col-12 col-md-8 mt-4">
                    <Media body>
                      <Media heading className="mb-4">
                        {props.blog.label}
                      </Media>
                      {props.blog.labeldescription}
                      <CardText className="mt-3">
                          <small className="text-muted">
                              <Button outline className="mr-2 btn-sm" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></Button>
                              <Button outline className="mr-2 btn-sm" href="http://www.linkedin.com/in/"><i className="fa fa-instagram"></i></Button>
                              <Button outline className="mr-2 btn-sm" href="http://twitter.com/"><i className="fa fa-twitter"></i></Button>
                              <Button outline className="mr-2 btn-sm" href="http://youtube.com/"><i className="fa fa-pinterest"></i></Button>
                          </small>
                      </CardText>
                    </Media>
                  </div>
                </div>
              </Card>
              </div>
            </div>
            </div>
            <div className="col-12 col-md-4">
              <h3 className="row mb-4 justify-content-center">Explore Gallery</h3>
              <div className="col-12 m-2"><CardImg className="cardimage" height="auto" width="100%" src={baseUrl+props.blog.gimage1} alt={"img"} /></div>
              <div className="col-12 m-2"><CardImg className="cardimage" height="auto" width="100%" src={baseUrl+props.blog.gimage2} alt={"img"} /></div>
              <div className="col-12 m-2"><CardImg className="cardimage" height="auto" width="100%" src={baseUrl+props.blog.gimage3} alt={"img"} /></div>
              <div className="col-12 m-2"><CardImg className="cardimage" height="auto" width="100%" src={baseUrl+props.blog.gimage4} alt={"img"} /></div>
              <div className="col-12 m-2"><CardImg className="cardimage" height="auto" width="100%" src={baseUrl+props.blog.gimage5} alt={"img"} /></div>
            </div>
          </div>
        </div>
        </div>
    );
}

export default BlogDetails;

