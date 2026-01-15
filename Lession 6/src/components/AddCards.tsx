import { useState } from "react";

type Props = {
    onAddCard:(obj:object)=>void,
};

function AddCards({onAddCard}: Props) {
    const [title, setTitle]=useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")
    const [image, setImage] = useState("")

    function handleSubmit(e:React.FormEvent) {
        e.preventDefault();

        const formData={
            title,
            description,
            date,
            image
        }
        console.log(formData)
        onAddCard(formData)
        setTitle("");
        setDescription("");
        setDate("");
        setImage("");
    }

  return (
    <form onSubmit={handleSubmit}
        style={{
            maxWidth: "400px",
            margin: "0 auto",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column" as const,
            gap: "12px",
        }}
    >
        <h2>Add a new image</h2>
        <label>
            Title
            <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)}/>
        </label>
        <label>
            Description
            <input type="text" value={description} onChange={(e)=> setDescription(e.target.value)}/>
        </label>
        <label>
            Date
            <input type="date" value={date} onChange={(e)=> setDate(e.target.value)}/>
        </label>
        <label>
            Image Link
            <input type="text" value={image} onChange={(e)=> setImage(e.target.value)}/>
        </label>
        
        <button type="submit">Save</button>
    </form>
  )
}

export default AddCards;
