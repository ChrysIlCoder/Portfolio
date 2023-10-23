import './App.css'
import AboutMe from './components/aboutme/aboutme'
import Presentation from './components/aboutme/presentation'
import Scrivimi from './components/contact/contact'
import Footer from './components/footer/footer'
import Lavori from './components/lavori/lavori'
import Navbar from './components/navbar/navbar'

export default function App(){
  return (
    <>
      <Navbar />
      <Presentation />
      <AboutMe />
      <Lavori />
      <Scrivimi />
      <Footer />
    </>
  )
}