import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';
import React,{useState} from 'react';
import Alerts from './components/Alerts';

//import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';


function App() {
  const [darkMode,setdarkMode]=useState('light');
  const[Alert,setAlert]=useState(null);
  const[buttonColor,setbuttonColor]=useState('primary');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type
    });
    
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode=()=>{
    if(darkMode==='light')
    {
      setdarkMode('dark');
      setbuttonColor('primary');
      document.body.style.backgroundColor='#042743';
      document.body.style.color='white';
      showAlert('dark mode has been enabled','success');
      document.title="Text editor-dark mode";
      }
    else{
      setdarkMode('light');
      setbuttonColor('primary');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert('light mode has been enabled','success');
      document.title="Text editor-light mode";
         
    }
  }

  const toggleRedColor=()=>{
    if(buttonColor==='primary')
    {
      document.body.style.backgroundColor='#a87373';
    setbuttonColor('danger');
    showAlert('Red mode has been enabled','success');
    document.title="Text editor-red mode";
    }
    else{
      document.body.style.backgroundColor='white';
    setbuttonColor('primary');
    showAlert('light mode has been enabled','success');
    document.title="Text editor-light mode";

    } 
  }

  const toggleGreenColor=()=>{
    if(buttonColor==='primary')
    {
      setbuttonColor('success');
      document.body.style.backgroundColor='#719571';
      document.title="Text editor-green mode";


    }
    else{
      setbuttonColor('primary');
      document.body.style.backgroundColor='white';
      document.title="Text editor-light mode";
    }

  }

  return (
    <>  
     
     <Navbar title="textutills" About="Aboutus" mode={darkMode} toggleMode={toggleMode} toggleGreenColor={toggleGreenColor} toggleRedColor={toggleRedColor}/  >
    <Alerts Alert={Alert}/>
    <TextForm showAlert={showAlert} TextAreaLabel="Try Textutils -Word counter, Character counter,Copy to clipboard" mode={darkMode} buttonColor={buttonColor}  />   
 
    </>
   
  

  );
}

export default App;
