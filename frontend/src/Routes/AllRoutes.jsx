import React from "react";
import { Route, Routes } from "react-router-dom";
import Companies from "../Components/Companies/Companies";
import CompanyProfile from "../Components/Companies/CompanyProfile";
import CreateCompany from "../Components/Companies/CreateCompany";
import HomePage from "../Components/Homepage/HomePage";
import JobDetail from "../Components/Jobs/JobDetail";
import JobPage from "../Components/Jobs/JobPage";
import Login from "../Components/Login/Login";
import ServicesPage from "../Components/Services/ServicesPage";
import Signup from "../Components/Signup/Signup";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const AllRoutes = () => {
  return (
    <Routes>
      {/* Don't Touch it Starts*/}
      <Route path='/' element={<><Navbar trans={true}/><HomePage /><Footer/></>} />
      <Route path='/companies' element={<><Navbar trans={false}/><Companies /><Footer/></>} />
      <Route path='/companies/:id' element={<><Navbar trans={false}/><CompanyProfile /><Footer/></>} />
      <Route path='/create' element={<><Navbar trans={true}/><CreateCompany /><Footer/></>} />
      {/* Don't Touch it Ends*/}

      <Route path='/login' element={<><Navbar trans={false}/><Login /><Footer/></>} />
      <Route path='/signup' element={<><Navbar trans={false}/><Signup/><Footer/></>} />
      <Route path='/jobpage' element={<><Navbar trans={false}/><JobPage /><Footer/></>} />
      <Route path='/jobpage/:jobId' element={<><Navbar trans={false}/><JobDetail /><Footer/></>} />
      <Route path='/services' element={<><Navbar trans={false}/><ServicesPage /><Footer/></>} />
    </Routes>
  );
};

export default AllRoutes;
