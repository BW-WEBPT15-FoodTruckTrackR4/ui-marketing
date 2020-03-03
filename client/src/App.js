import React from 'react';
import Homepage from './components/HomePage.js'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={Homepage} />
        </Router>
    </div>
  );
}

export default App;
