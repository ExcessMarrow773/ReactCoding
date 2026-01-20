import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import AddCards from './components/AddCards'
import CardList from './components/cardList'
import { useState } from 'react'


function App() {
  const [cards, setCards]=useState([])
  function addCard(card:never) {
    setCards([...cards, card])
  }
  return (
    <>
      <Header title="My Gallery Website" pagetitle='Home' />
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
      <Footer name="deez" />
    </>
  )
}

export default App
