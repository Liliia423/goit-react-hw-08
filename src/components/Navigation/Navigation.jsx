import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './Navigation.module.css';

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <ul className={css.navList}>
      <li>
        <NavLink to="/" className={css.link}>
          Home
        </NavLink>
      </li>
      {isLoggedIn && (
        <li>
          <NavLink to="/contacts" className={css.link}>
            Phonebook
          </NavLink>
        </li>
      )}
    </ul>
  );
}
