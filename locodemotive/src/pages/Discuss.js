import Post from "../components/Post/Post"
import './Discuss.css'

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
                <button>New Post</button>
            </div>
            <div className="post-container">
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}