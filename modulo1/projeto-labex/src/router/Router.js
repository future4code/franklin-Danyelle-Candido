import AdmArea from '../components/PrivatePages/admArea';
import CreateTrip from '../components/PrivatePages/createTrip';
import LoginArea from '../components/PrivatePages/loginArea';
import TripDetail from '../components/PrivatePages/tripDetails';
import ApplicationForm from '../components/PublicPages/ApplicationForm';
import HomePage from '../components/PublicPages/HomePage';
import TravelList from '../components/PublicPages/travelList';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdmArea from '../components/PrivatePages/admArea';
import CreateTrip from '../components/PrivatePages/createTrip';
import LoginArea from '../components/PrivatePages/loginArea';
import TripDetails from '../components/PrivatePages/tripDetails';
import ApplicationForm from '../components/PublicPages/ApplicationForm';
import HomePage from '../components/PublicPages/HomePage';
import TravelList from '../components/PublicPages/travelList';

function Router() {

    return (
      <BrowserRouter>
          <Routes>
              <Route index element={<HomePage/>}/>
              <Route path='/adm' element={<AdmArea/>}/>
              <Route path='/adm/trips/createtrip' element={<CreateTrip/>}/>
              <Route path='/login' element={<LoginArea/>}/>
              <Route path='/adm/trips/details' element={<TripDetails/>}/>
              <Route path='/trips/application' element={<ApplicationForm/>}/>
              <Route path='/trips/list' element={<TravelList/>}/>
          </Routes>
      </BrowserRouter>
    );
  }

export default Router;
