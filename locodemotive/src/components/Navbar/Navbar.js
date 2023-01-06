import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import Logo from './Logo.png';
import Bell from './Bell.svg';

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/home" className="site-title"><img src={Logo} alt="Locodemotive Logo"></img></Link>
            <ul>
                <CustomLink to="/login">Login</CustomLink>
                <CustomLink to="/home">Home</CustomLink>
                <CustomLink to="/learn">Learn</CustomLink>
                <CustomLink to="/discuss">Discuss</CustomLink>

                <CustomLink to="/settings">ProfileImg</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}
