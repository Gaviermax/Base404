import { useState } from 'react';
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Services from "./pages/Services.jsx";
import Layout from "./pages/Layout.jsx";
import Error from "./pages/Error.jsx";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path='about' element={<About />}></Route>
            <Route path='contact' element={<Contact />}></Route>
            <Route path='services' element={<Services />}></Route>
            <Route path='*' element={<Error />}></Route>
            
            {/* <Route path='*' element={<Home />}></Route> */}

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
