import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <Header title="Note Taking Website" pagetitle='Home'/>
      <hr />
      <Body body="This is a simple note taking website built with React."/>
      <hr />
      <Footer links={["http://example.com", "https://google.com"]}/>
    </>
  )
}

export default App
