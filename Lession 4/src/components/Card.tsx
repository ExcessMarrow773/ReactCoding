type Props = {
    image: string
    title: string
    description: string
    date: string
}

function Card(props: Props) {
    return (
        <div>
            <img src={props.image} alt={props.title}/>
            <div>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <span>{props.date}</span>
            </div>
        </div>
    )    
}

export default Card;