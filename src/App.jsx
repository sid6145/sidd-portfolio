import './App.css'
import Navbar from './components/sections/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Tech from './components/sections/Tech'

function App() {

  return (
    <>
      <Navbar />
    <div className='app'>
      <Hero />
      <About />
      <Experience />
      <Tech />
   </div>
    </>
  )
}

export default App
