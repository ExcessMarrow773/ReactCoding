import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import AboutMe from "./pages/AboutMe"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Body from "./components/Body"

function App() {
  return (
    <>
      <Header title="My Gallery Website" pagetitle='Home' />
      <Nav/>
      <Body>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<AboutMe />}/>
        </Routes>
      </Body>
      <Footer name="deez" />
    </>
  )
}

export default App
