import React from 'react'
import {Routes , Route , Navigate} from "react-router-dom"
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import SearchResults from '../pages/SearchResults';
import Tour from '../pages/Tour';
import TourDetails from '../pages/TourDetails';

const Routers = () => {
  return (
    <Routes >
        <Route path='/' element={<Navigate to= '/home'/>}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/tours' element={<Tour />}/>
        <Route path='/tours/:id' element={<TourDetails />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/tours/search' element={<SearchResults />}/>
    </Routes>
  )
}

export default Routers