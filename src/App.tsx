import { useState } from 'react'
import logo from './logo.svg'
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import './App.css'
import NewLogin from './modules/login/login';
import MainLayout from './common/components/MainLayout';
import DoctorCreate from './modules/doctor/Doctor';
import DoctorsList from './modules/doctor/DoctorsList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router>
        {/* body */}
        <div>
          <div className="body-inner">
            <Routes>
              {/* {routingList?.map((item) => (
                <Route
                  path={item?.path}
                  element={
                    <Suspense fallback={<>..</>}>{item?.component}</Suspense>
                  }
                />
              ))} */}
              {/* <Route exact path="/demo" element={<Demo />} /> */}
              <Route path="/" element={<NewLogin />} />
              <Route path="/doctor" element={<DoctorCreate />} />
              <Route path="/editDoctor/:id" element={<DoctorCreate />} />
              <Route path="/doctorsList" element={<DoctorsList />} />
              {/* <Route path="/accessDenied" element={<AccessDeniedPage />} /> */}
              <Route path="*" element={<h1>Error</h1>} />

            </Routes>
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App
