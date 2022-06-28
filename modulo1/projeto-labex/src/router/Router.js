import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdmAreaPage from '../components/PrivatePages/admAreaPage';
import CreateTripPage from '../components/PrivatePages/createTripPage';
import LoginAreaPage from '../components/PrivatePages/loginAreaPage';
import TripDetailsPage from '../components/PrivatePages/tripDetailsPage';
import ApplicationFormPage from '../components/PublicPages/formPage';
import HomePage from '../components/PublicPages/homePage';
import TravelListPage from '../components/PublicPages/travelListPage';
import ErrorPage from '../components/PublicPages/errorPage';

const Router = () => {

    return (
      <BrowserRouter>
          <Routes>
              <Route index element={<HomePage/>}/>
              <Route path='/admin/trips/list' element={<AdmAreaPage/>}/>
              <Route path='/admin/trips/create' element={<CreateTripPage/>}/>
              <Route path='/login' element={<LoginAreaPage/>}/>
              <Route path='/admin/trips/:id' element={<TripDetailsPage/>}/>
              <Route path='/trips/application' element={<ApplicationFormPage/>}/>
              <Route path='/trips/list' element={<TravelListPage/>}/>
              <Route path='*' element={<ErrorPage/>}/>
          </Routes>
      </BrowserRouter>
    );
  }

export default Router;
