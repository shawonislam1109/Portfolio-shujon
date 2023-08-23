import Navbr from "./Component/Navbar/Navbr"

import  './App.css'
import Header from "./Component/Header/Header"
import About from "./Component/About/About"
import Education from "./Component/Education/Education"
import Project from "./Component/Project/Project"
import Skill from "./Component/Skill/Skill"
import Customer from "./Component/Customer/Customer"
import MyBlog from "./Component/MyBlog/MyBlog"
import Footer from "./Component/Footer/Footer"

function App() {

  return (
    <>
      <Navbr/>
      <Header/>
      <About/>
      <Education/>
      <Project/>
      <Skill/>
      <Customer/>
      <MyBlog/>
      <Footer/>
    </>
  )
}

export default App
