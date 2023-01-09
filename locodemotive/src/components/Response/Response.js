import './Response.css'

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
                <button>New Response</button>
            </div>
        </div>
    )
}