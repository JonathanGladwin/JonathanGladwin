import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import BasicEmbed from './components/BasicEmbed';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      
          <h1>Tableau Dashboard in React </h1>
          <Navbar />
          <BasicEmbed />
    
    </Router>
  );
}

export default App;
