import React from 'react';
import Homepage from './components/HomePage.js'
import About from './components/About.js'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={Homepage} />
        <Route path='/about' component={About}/>
        </Router>
    </div>
  );
}

export default App;
