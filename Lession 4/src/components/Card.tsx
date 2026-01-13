type Props = {
    image: string
    title: string
    description: string
    date: string
}

function Card(props: Props) {
    return (
        <div style={styles.card}>
            <img src={props.image} alt={props.title} style={styles.image}/>
            <div style={styles.content}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <span>{props.date}</span>
            </div>
        </div>
    )    
}

const styles={
    card: {
        width: "300px",
        borderRadius: "12px",
        overflow: "hidden",
        backgroundcolor: "#fff",
    },
    image: {},
    content: {}
}

export default Card;