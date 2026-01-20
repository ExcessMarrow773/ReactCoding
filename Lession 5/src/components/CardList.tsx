import Card from "./Card"

type CardData = {
    image: string;
    title: string;
    description: string;
    date: string;
};

type Props = {
    cards: CardData[];
};

function CardList({cards}: Props) {
  return (
    <div
        style={{
            display:"flex",
            flexDirection:"row",
            flexWrap:"wrap",
            gap:"16px"
        }}>
        {cards.map((card, index)=>(
            <Card 
                key={index}
                image={card.image}
                title={card.title}
                description={card.description}
                date={card.date}
            />
        ))}
    
    </div>
  )
}

export default CardList;
