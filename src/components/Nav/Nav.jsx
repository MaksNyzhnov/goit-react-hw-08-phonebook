import { NavLink } from 'react-router-dom'
import css from './Nav.module.css'
const Nav = () => {

    return <nav className={css.headerLinks}>
          <NavLink className={css.headerLink} to="/home">
            Home
          </NavLink>
          <NavLink className={css.headerLink} to="/contacts">
            Contacts
          </NavLink>
        </nav>
}
export default Nav