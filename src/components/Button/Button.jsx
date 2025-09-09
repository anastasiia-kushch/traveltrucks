import clsx from 'clsx';
import css from './Button.module.css';

export const Button = ({ text, type }) => {
  const typeClass = clsx({
    [css.search]: type === 'search',
    [css.loadMore]: type === 'loadMore',
    [css.viewNow]: type === 'viewNow',
    [css.showMore]: type === 'showMore',
  });

  return <button className={clsx(css.button, typeClass)}>{text}</button>;
};
