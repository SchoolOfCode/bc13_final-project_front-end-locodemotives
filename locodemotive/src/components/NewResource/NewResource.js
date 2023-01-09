export default function NewResource() {
    return (
    <div className="new-resource">
        <h1>New Resource</h1>
        <div className='new-resource-submission'>
            <input type="text" placeholder="Title"></input>
            <textarea type="text" placeholder="Resource Description"></textarea>
            <input type="text" placeholder="Resource Link"></input>
            <select placeholder="Topic">
                <option>Topic 1</option>
                <option>Topic 2</option>
                <option>Topic 3</option>
            </select>
            <select placeholder="Type">
                <option>Type 1</option>
                <option>Type 2</option>
                <option>Type 3</option>
            </select>
        </div>
        <button type="submit">Submit</button>
    </div>
    )
}