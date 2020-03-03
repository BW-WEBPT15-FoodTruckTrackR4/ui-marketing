import React from 'react';
import Homepage from './components/HomePage.js'
import About from './components/About.js'
import {Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
        <Route exact path='/' component={Homepage} />
        <Route exact path='/about' component={About}/>
        
    </div>
  );
}

export default App;
