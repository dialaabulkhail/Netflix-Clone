import React from 'react';
import { Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Movie from './components/Movie/Movie';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Movie' element={<Movie />} />
      </Routes>
    </div>
  );
}

export default App;
