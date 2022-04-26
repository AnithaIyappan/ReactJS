import { NavLink } from 'react-router-dom';

export const Navbar = () => {

    const navLinkStyles = ({ isActive }) => {
        return {
          fontWeight: isActive ? 'bold' : 'normal',
          textDecoration: isActive ? 'underline' : 'none',
        }
      }

    return(
    <nav>
        <NavLink to='/' style={navLinkStyles}>Home</NavLink>
        <NavLink to='/about' style={navLinkStyles}>About</NavLink>
        <NavLink to='/Form' style={navLinkStyles}>Form</NavLink>
    </nav>
    )
}