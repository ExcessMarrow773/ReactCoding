
type Props = {};

function AddCards({}: Props) {
  return (
    <form>
        <h2>Add a new image</h2>
        Title
        <label>
            Title
            <input type="text" value=""/>
        </label>
        <label>
            Description
            <input type="text" value=""/>
        </label>
        <label>
            Date
            <input type="date" value=""/>
        </label>
        <label>
            Image Link
            <input type="url" value=""/>
        </label>
        
        <button type="submit">Save</button>
    </form>
  )
}

export default AddCards;
