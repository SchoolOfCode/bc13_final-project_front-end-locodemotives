import './Response.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function Response() {
    return (
        <div className="response">
            <div className='response-info'>
                <div className='response-info-container'>
                    <h1>Author</h1>
                    <h2>Date</h2>
                    <div className="response-body">
                        <p>Response</p>
                    </div>
                </div>
                <CustomLink to="/new_response">New Response</CustomLink>
            </div>
        </div>
    )
}


function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <button className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </button>
    )
}