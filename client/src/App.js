import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchPage from './SearchPage/SearchPage';
import CartPage from './CartPage/CartPage';


function App() {
  return (
    <div className="App">
        
      <div className='Wrapper'>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchPage />}/>
          <Route path="/CartPage" element={<CartPage />}/>

        </Routes>

      </BrowserRouter>

      </div>


    </div>
  );
}

export default App;
