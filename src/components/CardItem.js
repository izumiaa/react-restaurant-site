import React from 'react';

function CardItem(props) {
  return (
    <div className='cards__item'>
      <div className='cards__item__link'>
        <img
          className='cards__item__img'
          alt='Food img'
          src={props.src}
        />
        {props.label && (
          <div
            className='cards__item__pic-label'
            data-category={props.label}
          >
            {props.label}
          </div>
        )}
        <div className='cards__item__info'>
          <h5 className='cards__item__text'>{props.text}</h5>
        </div>
      </div>
    </div>
  );
}

export default CardItem;