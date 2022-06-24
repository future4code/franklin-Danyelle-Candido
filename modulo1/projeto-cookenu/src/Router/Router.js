import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorPage from "../pages/ErrorPage";
import AddRecipe from "../pages/AddRecipe";
import DetailRecipe from "../pages/DetailRecipe";
import FeedPage from "../pages/FeedPage";
import LoginPage from "../pages/LoginPage";
import SingUpPage from "../pages/SingUpPage";


function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/'  element={<LoginPage/>}/>
            <Route path='/singup' element={<SingUpPage/>}/>
            <Route path='/recipe' element={<AddRecipe/>}/>
            <Route path='/recipe/id' element={<DetailRecipe/>}/>
            <Route path='/recipe/feed' element={<FeedPage/>}/>
            <Route path='*' element={<ErrorPage/>}/>
        </Routes>
    </BrowserRouter>
  );
}
export default Router;