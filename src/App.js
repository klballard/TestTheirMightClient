import "bootstrap/dist/css/bootstrap.min.css";
import 'antd/dist/antd.css';
import './App.css';
import React, {useState,useEffect} from 'react';
import {makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
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
 
const fontTheme = createMuiTheme({
  typography:{
    fontFamily:['Bangers'].join(','),
  },
});


function App() {
  const classes = useStyles();
  useEffect(() => {
    document.title = "TEST THEIR MIGHT"
  }, []);

  return (
    <ThemeProvider theme={fontTheme}>
    <div className={classes.root}>
      <CssBaseline/>
      <Typography>
      <Router>
        <MightNavbar/>
      </Router>
      </Typography>
    </div>
    </ThemeProvider>
  );
}

export default App;
