import { useState } from "react";
import AddCards from "../components/AddCards";
import Body from "../components/Body";
import CardList from "../components/CardList";
type Props = {};

function Home({}: Props) {
    const [cards, setCards]=useState([])
    function addCard(card:never) {
      setCards([...cards, card])
    }
    return (
      <>
        <AddCards onAddCard={addCard}/>
        <Body>
          <div style={{
            display:"flex",
            flexDirection:"row",
            flexWrap:"wrap",
            gap:"16px"
          }}>
            <CardList cards={cards} />
          </div>
        </Body>
      </>
    )
}

export default Home;
