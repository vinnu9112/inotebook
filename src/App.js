import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NoteState from './context/notes/NoteState';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Alert from './components/Alert';
import Login from './components/Login';
import SignUp from './components/SignUp';
import AboutMe from './components/AboutMe';
import { useState } from 'react';

function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  return (
    <>
 
      <Router>
        <NoteState>
      <Navbar/>
      <Alert alert={alert}/>
            <div className="container my-2">
          <Routes>
            <Route exact path="/about" element={<About/>}></Route>

            <Route exact path="/aboutme" element={<AboutMe/>}></Route>

            <Route exact path="/" element={<Home showAlert={showAlert}/>}></Route>

            <Route exact path="/login" element={<Login showAlert={showAlert}/>}></Route>

            <Route exact path="/signup" element={<SignUp showAlert={showAlert}/>}></Route>
          </Routes>
            </div>
        </NoteState>
      </Router>
    </>
  );
}

export default App;
