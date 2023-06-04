//import logo from './logo.svg';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import {Amplify} from "aws-amplify";
import awsExports from "./aws-exports";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@aws-amplify/ui-react/styles.css';
//import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

import SiteNav from './components/SiteNav';
import SiteFooter from './components/SiteFooter';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Orders from './pages/Orders';
import Cart from './pages/Cart';
import Profile from './pages/Profile';

Amplify.configure(awsExports);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  function updateAuthStatus(authStatus) {
    setIsAuthenticated(authStatus)
  }

  return (

    <div>
      <SiteNav isAuthenticated={isAuthenticated} updateAuthStatus={updateAuthStatus} />
      <Routes>
        <Route path='*' element={<Home isAuthenticated={isAuthenticated} />} />
        <Route path='/' exact={true} element={<Home isAuthenticated={isAuthenticated} />} />
        <Route path='/login' element={<Login updateAuthStatus={updateAuthStatus} />} />
        <Route path='/register' element={<Register />} />
        <Route path='/orders' element={<Orders isAuthenticated={isAuthenticated} />} />
        <Route path='/cart' element={<Cart isAuthenticated={isAuthenticated} />} />
        <Route path='/profile' element={<Profile isAuthenticated={isAuthenticated} />} />
      </Routes>
      <SiteFooter />
    </div>
  )
};

{/* <div className="App">
      <Router>
        <div className='content'>
          <NavLink className='content' exact activeClassName="active" to="/">Home</NavLink>
          <NavLink className='content' activeClassName="active" to="/authenticate">Authenticate</NavLink>
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/authenticate" element={<Authentication />}></Route>
        </Routes>
      </Router>
    </div>
  );
}*/}

export default App;
