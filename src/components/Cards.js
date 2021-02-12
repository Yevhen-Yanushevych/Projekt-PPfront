import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our sports offers!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='The best snowboarding experience in Verbier, Switzerland'
              label='Snowboarding'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Amazing swimming pools with aquapark and spa'
              label='Swimming'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Check out our awesome tenis courts'
              label='Tenis'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Best way to work on your aim and develop a passion for archery'
              label='Archery'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Basketball lessons with NBA players'
              label='Basketball'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;