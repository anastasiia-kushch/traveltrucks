import { NavLink, useLocation } from 'react-router-dom';
import css from './NavMenu.module.css';
import clsx from 'clsx';

const NavigationMenu = () => {
  const location = useLocation();

  const getLocation = (to) => {
    return to === location.pathname
      ? clsx(css.navItem, css.active)
      : css.navItem;
  };
  return (
    <nav className={css.container}>
      <NavLink to="/" className={css.logo}>
        Travel<span>Trucks</span>
      </NavLink>
      <ul className={css.navList}>
        <li className={css.navItem}>
          <NavLink to="/" className={css.navItem}>
            Home
          </NavLink>
        </li>
        <li className={css.navItem}>
          <NavLink to="/catalog" className={`${getLocation('/catalog')}`}>
            Catalog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
