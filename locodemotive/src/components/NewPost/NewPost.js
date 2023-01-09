import './NewPost.css'

export default function NewPost() {
    return (
        <div className="new-post">
            <h1>New Post</h1>
            <div className='new-post-submission'>
                <input type="text" placeholder="Title"></input>
                <textarea type="text" placeholder="Post Body" wordWrap="false"></textarea>
                <select placeholder="Topic">
                    <option>Topic 1</option>
                    <option>Topic 2</option>
                    <option>Topic 3</option>
                </select>
                <input type="text" placeholder="Notify a team member"></input>
            </div>
            <button type="submit">Submit</button>
        </div>
    )
}