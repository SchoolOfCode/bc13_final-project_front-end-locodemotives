import Response from "../Response/Response"
import './Post.css'

export default function Post() {
    return (
        <div className="post-container">
            <div className="post">
                <div className="post-info">
                    <h1>Title</h1>
                    <div className="topic-container">
                        <h3>Topic</h3>
                    </div>
                    <h2>Author</h2>
                    <h2>Date</h2>
                </div>
                <div className="post-body">
                    <p>Post body</p>
                </div>
            </div>
            <Response/>
        </div>
    )
}