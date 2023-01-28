import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './Component/LoginPage';
import LeftSlidbar from './Component/Leftslidbar';
import Term from './Component/Term';
import Problem from './Component/Problem';
import Contactus from './Component/Contactus';
import Adduser from './Component/Adduser';
import Profile from './Component/Profile';
import Data from './Component/Data';
import Contact from './Component/Contact';
import Privacy from './Component/Privacy';
import PageNotFound from './Component/PageNotFound';
import UpdateUser from './Component/UpdateUser';
import ViewUser from './Component/ViewUser';
import PLeftslidbar from './Component/PLeftslidbar';
import PatientsData from './Component/PatientsData';
import Staff from './Component/Staff';
import AddPatients from './Component/AddPatients';
import AddStaff from './Component/AddStaff';
import { useSelector } from 'react-redux';
import ProfilePatients from './Component/ProfilePatients';
import UpdatePatient from './Component/UpdatePatient';
import ViewPatients from './Component/ViewPatients';
import UpdateStaff from './Component/UpdteStaff';


const App = () => {
  const logindetail = useSelector((state) => state.dentalreducers.LoginData)
  // console.log(logindetail[0].data.username === "","appjs")
  let bb = JSON.parse(localStorage.getItem("List"));
  return (
    <>
      <BrowserRouter>
        <Routes>
          {!bb ? <Route path='/login' element={<LoginPage />} /> : "" }
          <Route path='/login' element={<LoginPage />} />
         {/* if(logindetail[0].data.username === "" && logindetail[0].data.password === ''){
           <Route path='/login' element={<LoginPage />} />
         }
         else if(logindetail[0].data.username === "admin" && logindetail[0].data.password === "Test@123"){
             <Route path='/' element={<LeftSlidbar />} >
             <Route path='/clinics' element={<Data />} />
             <Route path='/clinics/create' element={<Adduser />} />
             <Route path='/clinics/view' element={<ViewUser />} />
             <Route path='/clinics/update' element={<UpdateUser />} />
             <Route path='/problem' element={<Problem />} />
             <Route path='/contactus' element={<Contactus />} />
             <Route path='/profile' element={<Profile />} />
             <Route path='/*' element={<PageNotFound />} />
           </Route>
         }
         else{
          <Route path='/patient' element={<PLeftslidbar />} >
          <Route path='/patients' element={<PatientsData />} />
          <Route path='/patients/create' element={<AddPatients />} />
          <Route path='/patients/update' element={<UpdatePatient />} />
          <Route path='/patients/view' element={<ViewPatients />} />
          <Route path='/staffs' element={<Staff />} />
          <Route path='/staffs/create' element={<AddStaff />} />
          <Route path='/staffs/update' element={<UpdateStaff />} />
          <Route path='/contactus' element={<Contactus />} />
          <Route path='/profile' element={<ProfilePatients />} />
          <Route path='/*' element={<PageNotFound />} />
        </Route>
         } */}
          

          {logindetail[0].data.username === "admin" && logindetail[0].data.password === "Test@123" ?
            <Route path='/' element={<LeftSlidbar />} >
              <Route path='/clinics' element={<Data />} />
              <Route path='/clinics/create' element={<Adduser />} />
              <Route path='/clinics/view' element={<ViewUser />} />
              <Route path='/clinics/update' element={<UpdateUser />} />
              <Route path='/problem' element={<Problem />} />
              <Route path='/contactus' element={<Contactus />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/*' element={<PageNotFound />} />
            </Route>
            :
            <Route path='/' element={<PLeftslidbar />} >
              <Route path='/patients' element={<PatientsData />} />
              <Route path='/patients/create' element={<AddPatients />} />
              <Route path='/patients/update' element={<UpdatePatient />} />
              <Route path='/patients/view' element={<ViewPatients />} />
              <Route path='/staffs' element={<Staff />} />
              <Route path='/staffs/create' element={<AddStaff />} />
              <Route path='/staffs/update' element={<UpdateStaff />} />
              <Route path='/contactus' element={<Contactus />} />
              <Route path='/profile' element={<ProfilePatients />} />
              <Route path='/*' element={<PageNotFound />} />
            </Route>
          }

          <Route path='/contact-us' element={<Contact />} />
          <Route path='/TermsAndConditions' element={<Term />} />
          <Route path='/Policy' element={<Privacy />} />

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
