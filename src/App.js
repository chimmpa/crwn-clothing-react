import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component'

function HatsPage(){
  return(
    <div>
      <h1>HATS PAGE </h1>
    </div>
  );
}

function TopicDetail(){
  return(
    <div>
      <h1>Topic Detail Page</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop/hats' component={HatsPage} />
        <Route path='/topics/:topicId' component={TopicDetail} />
      </Switch>
      
    </div>
  );
}

export default App;
