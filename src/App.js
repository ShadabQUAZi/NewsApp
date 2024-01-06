// import logo from './logo.svg';
import Navbar from './components/Navbar';
import './App.css';
import React from 'react'
import News from './components/News';
import { BrowserRouter, Routes, Route  } from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'


const App = () => {
    return (
    
      <div>
      <BrowserRouter>
    
       <Navbar/>
       <Routes>
       <Route exact path='/' element = {<News key={"general"} country= "in" category= "general"/>} />
       <Route exact path="/entertainment" element={<News key="entertainment" country="in" category="entertainment"/>}/>
       <Route exact path='/science' element = {<News key="science" country= "in" category= "science" />} />
       <Route exact path='/sports' element = {<News key="sports" country= "in" category= "sports" />} />
       <Route exact path="/business" element={<News key="business" country="in" category="business" />} />
       <Route exact path="/technology" element={<News key="technology" country="in" category="technology" />} />
       </Routes>
      
      </BrowserRouter>
      </div>
      
    )
}


export default App;
