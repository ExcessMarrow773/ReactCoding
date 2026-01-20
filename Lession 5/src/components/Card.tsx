type Props = {
    image: string
    title: string
    description: string
    date: string
}

function Card({image, title, description, date}: Props) {
    return (
        <div style={styles.card}>
            <img src={image} alt={title} style={styles.image}/>
            <div style={styles.content}>
                <h3 style={styles.title}>{title}</h3>
                <p style={styles.description}>{description}</p>
                <span style={styles.date}>{date}</span>
            </div>
        </div>
    )
}

const styles={
    card: {
        width: "275px",
        borderRadius: "12px",
        overflow: "hidden",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column" as const
    },
    image: {
        width: "100%",
        hight: "180px",
        objectFit:"cover" as const,
    },
    content: {
        padding: "16px",
    },
    title: {
        color:"#000",
        fontSize: "1.1rem"
    },
    description: {
        color:"#555",
        fontSize:"0.95rem"
    },
    date: {
        color:"#888",
        fontSize:"0.8rem",
        textAlign: "right" as const,
        display: "block",
    }
}

export default Card;