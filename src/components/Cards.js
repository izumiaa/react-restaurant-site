import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Our Top Dishes</h1>
      <div className='cards__container'>
        <Carousel
          autoPlay={true}
          interval={3000} 
          infiniteLoop={true}
          showArrows={true}
          showStatus={false}
          showThumbs={false}
        >
          <CardItem
            src='images/butter_chicken.jpeg'
            text='Butter Chicken'
          />
          <CardItem
            src='images/cauliflower.jpg'
            text='Cauliflower Tandoor'
            label='Vegetarian'
          />
          <CardItem
            src='images/palak-paneer.jpg'
            text='Palak Paneer'
            label='Vegetarian'
          />
          <CardItem
            src='images/biryani.png'
            text='Biryani'
          />
          <CardItem
            src='images/tandoori.jpg'
            text='Tandoori'
          />
        </Carousel>
      </div>
    </div>
  );
}

export default Cards;


