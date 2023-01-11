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


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/' element={<LeftSlidbar />} >
            <Route path='/clinics' element={<Data />} />
            <Route path='/clinics/create' element={<Adduser />} />
            <Route path='/problem' element={<Problem />} />
            <Route path='/contactus' element={<Contactus />} />
            <Route path='/profile' element={<Profile />} />
          </Route>
            <Route path='/TermsAndConditions' element={<Term />} />
            <Route path='/contact-us' element={<Contact />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
