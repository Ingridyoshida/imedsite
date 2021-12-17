import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Checkout from './pages/Checkout';
import Agenda from './pages/Agenda';
import Myaccount from './pages/Myaccount';
import FormStep1 from './pages/FormStep1';
import FormStep2 from './pages/FormStep2';
import FormStep3 from './pages/FormStep3';
import Info from './pages/Info';
import Form1 from './pages/Form1';
import Form2 from './pages/Form2';
import Patient from './pages/Patient';
import Timetable from './pages/Timetable';


export default () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/about">
                <About />
            </Route>
            <Route exact path="/signin">
                <SignIn />
            </Route>
            <Route exact path="/signUp">
                <SignUp />
            </Route>
            <Route exact path="/checkout">
                <Checkout />
            </Route>

            <Route exact path="/agenda">
                <Agenda />
            </Route>

            <Route exact path="/myaccount">
                <Myaccount />
            </Route>

            <Route exact path="/info">
                <Info />
            </Route>
            
            <Route exact path="/FormStep1">
                <FormStep1 />
            </Route>

            <Route exact path="/FormStep2">
                <FormStep2 />
            </Route> 
            
            <Route exact path="/FormStep3">
                <FormStep3 />
            </Route>
           
            <Route exact path="/Form1">
                <Form1 />
            </Route>

            <Route exact path="/Form2">
                <Form2 />
            </Route>

            <Route exact path="/Patient">
                <Patient />
            </Route>

            <Route exact path="/Timetable">
                <Timetable />
            </Route>
           
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}