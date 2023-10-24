import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Counter from './Counter'

function App() {
  const [count, setCount] = useState(0);
  const title = "Activity 13 - React Components, Props, and useState"
  const copyright = "Developed by Carlos Moritcho 2023"

  return (
    <div className='bg-white'>
        <Header title = {title}/>
        <Counter />
        <Footer copyright = {copyright} />
    </div>
  )
}

export default App
