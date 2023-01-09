import Post from "../components/Post/Post"
import './Discuss.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function Discuss() {
    return (
        <div className="discuss-content">
            <div className="navigation-bar">
                <input type="text" placeholder="Search"></input>
                <button type="submit">Submit</button>
                <select>
                    <option>Topic 1</option>
                    <option>Topic 2</option>
                    <option>Topic 3</option>
                </select>
                <CustomLink to="/new_post">New Post</CustomLink>
            </div>
            <div className="post-container">
                <Post/>
                <Post/>
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