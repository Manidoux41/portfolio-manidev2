import About from "./components/About"
import Contact from "./components/Contact"
import Experiences from "./components/Experiences"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Portfolio from "./components/Portfolio"
import SocialLinks from "./components/SocialLinks"

function App() {

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experiences />
      <Contact />
      
      <SocialLinks />
    </div>
  )
}

export default App
