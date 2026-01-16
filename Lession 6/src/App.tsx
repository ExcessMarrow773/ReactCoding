import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import AboutMe from "./pages/AboutMe"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<AboutMe />}
    </Routes>
  )
}

export default App
