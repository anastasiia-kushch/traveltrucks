import { NavLink } from 'react-router-dom';
import css from './Home.module.css';

export default function Home() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Campers of your dreams</h1>

      <p className={css.text}>
        You can find everything you want in our catalog
      </p>

      <NavLink to="/catalog" className={css.link}>
        View now
      </NavLink>
    </div>
  );
}
