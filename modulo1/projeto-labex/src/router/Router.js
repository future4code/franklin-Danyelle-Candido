import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdmAreaPage from '../components/PrivatePages/admAreaPage';
import CreateTripPage from '../components/PrivatePages/createTripPage';
import LoginAreaPage from '../components/PrivatePages/loginAreaPage';
import TripDetailsPage from '../components/PrivatePages/tripDetailsPage';
import ApplicationFormPage from '../components/PublicPages/formPage';
import HomePage from '../components/PublicPages/homePage';
import TravelListPage from '../components/PublicPages/travelListPage';

function Router() {

    return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/adm' element={<AdmAreaPage/>}/>
              <Route path='/adm/trips/createtrip' element={<CreateTripPage/>}/>
              <Route path='/login' element={<LoginAreaPage/>}/>
              <Route path='/adm/trips/details' element={<TripDetailsPage/>}/>
              <Route path='/trips/application' element={<ApplicationFormPage/>}/>
              <Route path='/trips' element={<TravelListPage/>}/>
          </Routes>
      </BrowserRouter>
    );
  }

export default Router;
