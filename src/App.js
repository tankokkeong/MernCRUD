import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import SignUp from './components/SignUp';


const App = () => (
  <div className='app'>
    <Navigation />
    <Main />
  </div>
);

const Navigation = () => (
  
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink exact activeClassName="current" to='/' className="navbar-brand">EasySurvey</NavLink>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

        </ul>
        <div className="form-inline my-2 my-lg-0">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <NavLink exact activeClassName="active" to='/' className="nav-link">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact activeClassName="active" to='/contact' className="nav-link">Contact</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact activeClassName="active" to='/about' className="nav-link">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact activeClassName="active" to='/login' className="nav-link">Login</NavLink>
          </li>
        </ul>
         
        </div>
      </div>
  </nav>

);

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/about' component={About}></Route>
    <Route exact path='/contact' component={Contact}></Route>
    <Route exact path='/login' component={Login}></Route>
    <Route exact path='/signup' component={SignUp}></Route>
  </Switch>
);

export default App;