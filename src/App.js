import React, { useState } from 'react';

// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [darkmode, setDarkmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      msg: message
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }

  const togglemode = () => {
    if (darkmode === 'light') {
      setDarkmode('dark')
      document.body.style.backgroundColor = '#04093a'
      document.body.style.color = 'white'
      showAlert('success', 'Dark Mode Enabled Successfully!')
    }
    else {
      setDarkmode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert('success', 'Light Mode Enabled Successfully!')
    }
  }



  return (
    <>
    <Router>
      <Navbar title='TextUtiles' About='About Us' mode={darkmode} togglemode={togglemode} />
      <Alert Alert={alert} />
      <Routes>
        <Route path="/" element={<TextForm showAlert={showAlert} heading='Enter your Text here to Analyze' mode={darkmode}/>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>

      {/* <Navbar title={3} About='About Us' />
    If we write title in integer type then propTypes function will give Errors */}



      {/* <Navbar About='About Us' />    */}
      {/* if title will not pass by programmer then it will accept arguement from default props */}
    </>

  );
}

export default App;
