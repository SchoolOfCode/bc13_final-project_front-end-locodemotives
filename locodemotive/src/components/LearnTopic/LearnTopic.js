import './LearnTopic.css';

export default function LearnTopic() {
    return (
        <div className="topic-container">
            <div className="topic-type">
                <h1>Type</h1>
            </div>
            <div className="topic-body">
                <div className='topic-body-info'>
                    <h1>Title</h1>
                    <p>Description</p>
                </div>
                <button>Access &gt;</button>
            </div>
        </div>
    )
}