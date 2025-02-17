import './App.css'
import Header from './components/Header'
import Experience from './sections/Experience'
import Outcomes from './sections/Outcomes'
import Work from './sections/Work'
import Contact from './sections/Contact'
import Approach from './sections/Approach'

function App() {

  return (
    <div className="mx-auto max-w-[980px] lg:w-[980px] md:w-[600px] md:ml-[150px]">
      <Header />
      <Approach />
      <Experience />
      <Work />
      <Outcomes />
      <Contact />
    </div>
  )
}

export default App
