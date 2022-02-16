import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import NavBar from './components/navbar/NavBar';
import './App.css';
import FavList from './components/FavList/FavList';

function App() {

  const [favoriteList, setFavList] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER}/getMovies`);

      const data = await response.json();
      setFavList(data);

    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(()=>{fetchData();} , []);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/FavList' element={<FavList favoriteList={favoriteList} />} />

      </Routes>
    </div>
  );

}

export default App;
