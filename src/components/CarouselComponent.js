import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'assets/images/pic-1.jpg',
    altText: 'Explore!',
    caption: '“Life is short and the world is wide.”'
  },
  {
    src: 'assets/images/pic-2.jpg',
    altText: 'Travel?',
    caption: '“Travel makes one modest, you see what a tiny place you occupy in the world.”'
  },
  {
    src: 'assets/images/pic-3.jpg',
    altText: 'Discover!',
    caption: '“Twenty years from now you will be more disappointed by the things you didn’t do than by the ones you did do. So throw off the bowlines. Catch the trade winds in your sails. Explore. Dream. Discover.”'
  },
  {
    src: 'assets/images/pic-4.jpg',
    altText: 'Into A New Vision!',
    caption: '“The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.”'
  }
];

const Slider = (props) => {
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
        <img src={item.src} alt={item.altText} className="img-fluid"/>
        <CarouselCaption captionText={item.caption} captionHeader={item.altText} />
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

export default Slider;