import './Learn.css'
import LearnTopic from '../components/LearnTopic/LearnTopic'

export default function Learn() {
    return (
        <div className="learn-content">
            <div className="topic-list-container">
                <h1>Topic</h1>
                <div className="topics">
                    <h2>General</h2>
                    <h2>Digital</h2>
                    <h2>Placeholder</h2>
                    <h2>Placeholder</h2>
                    <h2>Placeholder</h2>
                    <h2>Placeholder</h2>
                    <h2>Placeholder</h2>
                </div>
            </div>
            <div className="explore-container">
                <div className="explore-header">
                    <div className="explore-header-top">
                        <h1>Explore</h1>
                        <a href="./add">Add Resource</a>
                    </div>
                    <div className="explore-header-selectors">
                        <select name="Type">
                            <option>Placeholder</option>
                            <option>Placeholder</option>
                        </select>
                        <div className="page-buttons">
                            <button>Back</button>
                            <button>Forward</button>
                        </div>
                    </div>
                    <div className="learn-topic-container">
                        <LearnTopic/>
                        <LearnTopic/>
                        <LearnTopic/>
                        <LearnTopic/>
                        <LearnTopic/>
                        <LearnTopic/>
                    </div>  
                </div>
            </div>
        </div>
    )
}