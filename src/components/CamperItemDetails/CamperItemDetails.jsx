import { useState } from 'react';
import clsx from 'clsx';
import Features from '../Features/Features';
import Reviews from '../Reviews/Reviews';
import { Icon } from '../Icons/Icons';
import css from './CamperItemDetails.module.css';

export default function CamperItemDetails({ data }) {
  const [active, setActive] = useState('features');

  const handleClick = (component) => {
    setActive(component);
  };

  const {
    name = 'No name',
    rating = 'No rating',
    reviews = [],
    location = 'No location',
    price = 'No price',
    gallery = [],
    description = 'No description available',
  } = data;

  if (!data) return <p>No data</p>;

  return (
    <div className={css.container}>
      <div className={css.content}>
        <p className={css.title}>{name}</p>
        <div className={css.secondSec}>
          <div className={css.rating}>
            <Icon
              id="icon-rating"
              fill={'#ffc531'}
              width={'16'}
              height={'16'}
            />
            <p>
              {rating}({reviews.length} Reviews)
            </p>
          </div>
          <div className={css.location}>
            <Icon
              id="icon-location"
              stroke={'#101828'}
              fill={'none'}
              width={'16'}
              height={'16'}
            />
            <p>{location}</p>
          </div>
        </div>
        <p className={css.price}>&#8364;{price}.00</p>
      </div>
      <ul className={css.gallery}>
        {gallery.map((img, index) => (
          <li key={index}>
            <img src={img.thumb} className={css.galleryItem} alt="camper" />
          </li>
        ))}
      </ul>

      <p className={css.description}>{description}</p>

      <nav>
        <ul className={css.informList}>
          <li
            className={clsx(css.informItem, {
              [css.active]: active === 'features',
            })}
            onClick={() => handleClick('features')}
          >
            Features
          </li>
          <li
            className={clsx(css.informItem, {
              [css.active]: active === 'reviews',
            })}
            onClick={() => handleClick('reviews')}
          >
            Reviews
          </li>
        </ul>
      </nav>
      {active === 'features' && <Features data={data} />}
      {active === 'reviews' && <Reviews data={data} />}
    </div>
  );
}
