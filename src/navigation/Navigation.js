import React from 'react';
import { BrowserRouter as Router,  Switch } from "react-router-dom";
import Home from '../modules/home/Home';
import Login from '../modules/login/Login';
import Singup from '../modules/singup/Singup';
import PublicRouting from './PublicRouting';
import PrivateRouting from './PrivateRouting';
import Resturantdetail from '../modules/detail/ResturantDetail';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { useSelector } from "react-redux";

export default function Navigation() {
    const authState = useSelector(state => state.AuthReducer.isUserLoggedIn)
    return (
        <div>
            <Router>
           <Header/>
           <Switch>
               
               <PrivateRouting exact path='/' auth={authState}>
                   <Home/>
               </PrivateRouting>
               <PublicRouting exact path='/login' auth={authState}>
                   <Login/>
               </PublicRouting>
               <PublicRouting exact path='/singup' auth={authState}>
                   <Singup/>
               </PublicRouting>
               <PublicRouting exact path='/contactUs' auth={authState}>
                   <Singup/>
               </PublicRouting>
               
               <PublicRouting exact path='/detail' >
                      <Resturantdetail/>
               </PublicRouting>
              
           </Switch>
           <Footer/>
       </Router>
            
        </div>
    )
}
