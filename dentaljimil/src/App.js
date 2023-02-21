import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './component/Login';
import Main from './component/Data/Main';
import Clinic from './component/Data/Clinic';
import Problem from './component/problem/Problem';
import Contact from './component/Contactus/Contact';
import Cont from './component/Contact/Cont';
import Profile from './component/Profie/Profile';
import Create from './component/Create/Create';
import TermsAndCondiction from './component/TermsAndCondiction/TermsAndCondiction';
import Privacy from './component/TermsAndCondiction/Privacy';
import * as React from 'react';
import Error from './component/Error/Error';
import View from './component/View/View';
import Update from './component/Update/Update';
import Main2 from './component/Data/Main2';
import Patients from './component/Patient/Patients';
import Staff from './component/Staff/Staff';
import StaffCreate from './component/Create/StaffCreate';
import PatientsCreate from './component/Create/PatientsCreate';
import { useSelector } from 'react-redux';
import Profilepatints from './component/Profie/Profilepatients';
import UpdatePatients from './component/Update/Updatepaitents';
import Patientsview from './component/View/Patientsview';
import Updatestaff from './component/Update/Updatestaff';

function App() {
 
  let de = JSON.parse(localStorage.getItem("logindata")) ? JSON.parse(localStorage.getItem("logindata")) : ''

  if (de.username === "admin" && de.password === "Test@123") {
    console.log(de.username === "admin" && de.password === "Test@123");
  }
  else {
    console.log("false")
  }
  return (


    <BrowserRouter>

      <Routes>
      <Route path="/" element={<Login />} />

      {de.username === "admin" && de.password === "Test@123" ?

          <Route path='/' element={<Main />} >
            <Route path="/clinic" element={<Clinic />} />
            <Route path="/clinic/create" element={<Create />} />
            <Route path="/clinic" element={<Clinic />} />
            <Route path="/problem" element={<Problem />} />
            <Route path="/contactus" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/view" element={<View />} />
            <Route path="/Update" element={<Update />} />
            <Route path="/*" element={<Error />} />
          </Route>
          :<Route path='/' element={<Main2 />} >
          <Route path="/patients" element={<Patients/>} />
          <Route path="/patients/create" element={<PatientsCreate />} />
          <Route path="/staff/create" element={<StaffCreate />} />
          <Route path="/profile" element={<Profilepatints />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/updatepatients" element={<UpdatePatients />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/Updatestaff" element={<Updatestaff />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/patientsview" element={<Patientsview />} />
          <Route path="/*" element={<Error />} />

        </Route> 
        

  }

        <Route path="/Contact" element={<Cont />} />
        <Route path="/TermsAndCondition" element={<TermsAndCondiction />} />
        <Route path="/Policy" element={<Privacy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
