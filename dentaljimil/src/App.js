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

function App() {
  // const [loading, setLoading] = React.useState(false);

  // React.useEffect(() => {
  //   setLoading(true)
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 2000);
  // }, [])
  return (


    <BrowserRouter>

      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Main />} >

          <Route path="/clinic/create" element={<Create />} />
          <Route path="/clinic" element={<Clinic />} />
          <Route path="/problem" element={<Problem />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/*" element={<Error />} />
        </Route>
        <Route path="/Contact" element={<Cont />} />
        <Route path="/TermsAndCondition" element={<TermsAndCondiction />} />
        <Route path="/Policy" element={<Privacy />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
