import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import MainLayout from './layout/MainLayOut';
import HomePage from './pages/homePage/HomePage';
import Visa from './pages/visaPage/Visa';
import StudyAbroad from './pages/studyAbroad/StudyAbroad';
import TourPakage from './pages/tourPakge/TourPakage';
import AirTicket from './pages/airTicket/AirTicket ';
import TourEnquiry from './pages/tourPakge/TourEnquiry';





function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout />}>
         <Route path='/' element={<HomePage/>}/>
         <Route path='/visa' element={<Visa/>}/>
         <Route path='/study-abroad' element={<StudyAbroad/>}/>
         <Route path='/air-ticket' element={<AirTicket/>}/>
         <Route path='/tour-package' element={<TourPakage/>}/>
         <Route path='/tourEnquiry/:id' element={<TourEnquiry/>}/>
      </Route>
    )
  );


  return (
    <RouterProvider router={router}/>
  )
}

export default App