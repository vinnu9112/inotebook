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
function App() {
  return (
    <>
 
      <Router>
        <NoteState>
      <Navbar/>
      <Alert message="this is a message"/>
            <div className="container my-2">
          <Routes>
            <Route exact path="/about" element={<About/>}></Route>

            <Route
              exact
              path="/"
              element={
                <Home/>
              }
            ></Route>
          </Routes>
            </div>
        </NoteState>
      </Router>
    </>
  );
}

export default App;
