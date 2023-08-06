import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { Routes ,Route } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;