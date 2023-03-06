import logo from './logo.svg';
import './App.css';
import React from 'react';
import{Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import TypePath from './components/TypePath';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/:string" element={<TypePath/>}/>
        <Route path="/:string/:color/:backgroundColor" element={<TypePath/>}/>
      </Routes>
    </div>
  );
}

export default App;
