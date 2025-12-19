import About from "./components/sections/About"
import Contact from "./components/sections/Contact"
import Hero from "./components/sections/Hero"
import Projects from "./components/sections/Projects"

function App() {

  return (
    <>
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact/>
      </main>
      
      <footer>
        <p>Built with Vite, deployed on AWS (S3 + CloudFront).</p>
      </footer>
    </>
  )
    
  
}

export default App
