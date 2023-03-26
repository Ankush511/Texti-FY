import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import{
  BrowserRouter as Router, 
  Routes,
  Route,
} from "react-router-dom"


function App(props) { 

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#041b31';
      showAlert("Dark mode has been enabled.", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled.", "success");
    }
  }

  return (
    <>
    <Router>
      <Navbar title='TextiFY' aboutText = 'About Us' mode={mode} toggleMode = {toggleMode}/>
      <Alert alert = {alert}/>

      <div className="container my-3">
      
      <Routes>
        <Route exact path="/about" element={<About mode={mode}/>} />
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to transform :" mode={mode}/>} />
      </Routes>

      </div>
    </Router>
    </>
  );
}

export default App;

