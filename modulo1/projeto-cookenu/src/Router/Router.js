import React from "react";
import { Routes, Route } from 'react-router-dom';
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AddRecipe from "../pages/AddRecipePage/AddRecipe";
import DetailRecipe from "../pages/DetailRecipePage/DetailRecipe";
import FeedPage from "../pages/FeedPage/FeedPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SingUpPage from "../pages/SingUpPage/SingUpPage";

function Router({setRightButtonText}) {
  return (
        <Routes>
            <Route exact path='/' element={<FeedPage/>}/>
            <Route exact path='/login'  element={<LoginPage setRightButtonText={setRightButtonText}/>}/>
            <Route exact path='/singup' element={<SingUpPage setRightButtonText={setRightButtonText}/>}/>
            <Route exact path='/recipe' element={<AddRecipe/>}/>
            <Route exact path='/recipe/id' element={<DetailRecipe/>}/>
            
            <Route path='*' element={<ErrorPage/>}/>
        </Routes>
  );
}
export default Router;