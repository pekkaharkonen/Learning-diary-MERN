import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/layout/Nav';
import Home from './components/pages/Home'
import About from './components/pages/About'
import { getTopics } from './services/topicsService';
import TimelineForm from './components/timeline/TimelineForm';
import Timeline from './components/timeline/Timeline';

function App() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getAndSetTopics();
  }, []);

  const getAndSetTopics = async () => {
    try {
      let response = await getTopics();
      setTopics(response.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Router>
      <div className='App'>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/form" component={TimelineForm}/>
          <Route path="/timeline" component={Timeline}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
