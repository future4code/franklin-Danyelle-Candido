import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorPage from "../pages/ErrorPage";
import AddRecipe from "../pages/AddRecipe";
import DetailRecipe from "../pages/DetailRecipe";
import FeedPage from "../pages/FeedPage";
import LoginPage from "../pages/LoginPage";
import SingUpPage from "../pages/SingUpPage";
import Header from "../pages/static/Header";


function Router() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/login'  element={<LoginPage/>}/>
            <Route path='/singup' element={<SingUpPage/>}/>
            <Route path='/recipe' element={<AddRecipe/>}/>
            <Route path='/recipe/id' element={<DetailRecipe/>}/>
            <Route path='/' element={<FeedPage/>}/>
            <Route path='*' element={<ErrorPage/>}/>
        </Routes>
    </BrowserRouter>
  );
}
export default Router;