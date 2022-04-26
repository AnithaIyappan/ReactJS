import './App.css';
import './components/Form.css';
import './components/home.css';
import React from 'react';
import { Routes, Route} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Home } from './components/home';
import { About } from './components/about';
import {Form} from './components/Form'






function App() {
  return (
    
    <BrowserRouter>
    {/* <Form /> */}
    
    <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/Form' element={<Form />} />
          
        
        </Routes>
    
        
        </BrowserRouter>
  );
}

export default App;
