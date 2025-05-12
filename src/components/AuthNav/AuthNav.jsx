import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <ul className={css.authList}>
      <li>
        <NavLink to="/register" className={css.link}>
          Register
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" className={css.link}>
          Log In
        </NavLink>
      </li>
    </ul>
  );
}
