import { BrowserRouter } from "react-router-dom"
import { Experience, Feedbacks, Hero, Navbar, Tech} from './components'

 const App = () => {return (
    
<BrowserRouter>
  <div className="relative z-0 bg-primary">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar/>
      <Hero/>
     
    </div>
<Experience/>
<Tech/>
<Feedbacks/>

  </div>

</BrowserRouter>
  )
}

export default App
