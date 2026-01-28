// import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar.jsx"
import Body from "./components/Body.jsx"
import Footer from "./components/footer.jsx"
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"></link>

export default function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Body />
      <Footer />
    </>
  )
}

