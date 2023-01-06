import './Home.css'

export default function Home() {
    return(
        <div className='my-learning'>
            <div className='resource-container'>
                <div className='my-area'>
                    <h1>My Learning</h1>
                    <select name="My Posts">
                        <option>Post 1</option>
                        <option>Post 2</option>
                    </select>
                    <select name="My Resources">
                        <option>Resource 1</option>
                        <option>Resource 2</option>
                    </select>
                </div>
                <div className='whats-new'>
                    <h1>What's new</h1>
                </div>
            </div>
            <div className='my-channels'>
                <h1>My Channels</h1>
            </div>
        </div>
    )
}