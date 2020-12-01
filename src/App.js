import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import React, {useState,useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {BrowserRouter as Router} from 'react-router-dom';
import MightNavbar from './components/MightNavbar';
import {Admin, Resource, ListGuesser} from 'react-admin';
import APIURL from './helpers/environment';

const dataProvider = APIURL;

/*
let useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/grocery8.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));
*/

function App() {
  
  useEffect(() => {
    document.title = "TEST THEIR MIGHT"
  }, []);

  return (
    <div className='{classes.root}'>
      
        
      <Router>
        <MightNavbar/>
        <Admin dataProvider={dataProvider}>
            <Resource name='users' list={ListGuesser}/>
        </Admin>
      </Router>
      
    </div>
  );
}

export default App;
