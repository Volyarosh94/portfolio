import './App.css'
import Header from './components/Header'
import Experience from './sections/Experience'
import Outcomes from './sections/Outcomes'
import Work from './sections/Work'
import Contact from './sections/Contact'
import Approach from './sections/Approach'
import Intro from './sections/Intro'

function App() {

  return (
    <div>
      <Header />
      <div className="lg:grid lg:grid-cols-10 lg:gap-4 lg:px-4 md:mx-auto max-w-[1600px] lg:w-[1400px] md:w-[650px]">
        <Intro />
        <Approach />
        <Experience />
        <Work />
        <Outcomes />
        <Contact />
      </div>
    </div>
  )
}

export default App
