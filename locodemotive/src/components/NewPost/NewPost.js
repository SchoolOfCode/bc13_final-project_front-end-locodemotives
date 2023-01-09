export default function NewPost() {
    return (
        <div className="new-post">
            <h1>New Post</h1>
            <input type="text" placeholder="Title"></input>
            <input type="text" placeholder="Post Body"></input>
            <select placeholder="Topic">
                <option>Topic 1</option>
                <option>Topic 2</option>
                <option>Topic 3</option>
            </select>
            <input type="text" placeholder="Notify a team member"></input>
            <button type="submit">Submit</button>
        </div>
    )
}