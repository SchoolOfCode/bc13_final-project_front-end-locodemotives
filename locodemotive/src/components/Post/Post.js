import Response from "../Response/Response"

export default function Post() {
    return (
        <div className="post-container">
            <div className="post">
                <h1>Title</h1>
                <h3>Topic</h3>
                <h2>Author</h2>
                <h2>Date</h2>
                <div className="post-body">
                    <p>Post body</p>
                </div>
            </div>
            <Response/>
            <button>New Response</button>
        </div>
    )
}