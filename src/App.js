import "bootstrap/dist/css/bootstrap.min.css";
import 'antd/dist/antd.css';
import './App.css';
import React, {useState,useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {BrowserRouter as Router} from 'react-router-dom';
import MightNavbar from './components/MightNavbar';


let useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/backgroundexplosion.png"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));


function App() {
  const classes = useStyles();
  useEffect(() => {
    document.title = "TEST THEIR MIGHT"
  }, []);

  return (
    <div className={classes.root}>
      <Router>
        <MightNavbar/>
      </Router>
    </div>
  );
}

export default App;
