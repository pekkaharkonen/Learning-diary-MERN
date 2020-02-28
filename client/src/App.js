import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/layout/Nav';
import Home from './components/pages/Home';
import About from './components/pages/About';
import { getTopics, createTopic, deleteTopic } from './services/topicsService';
import TimelineForm from './components/timeline/TimelineForm';
import Timeline from './components/timeline/Timeline';
import TimelineList from './components/timeline/TimelineList';

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

  const addTopic = async data => {
    try {
      await createTopic(data);
      getAndSetTopics();
    } catch (err) {
      console.error(err);
    }
  };

  const removeTopic = async id => {
    try {
      await deleteTopic(id);
      getAndSetTopics();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Router>
      <div className='App'>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route
            path='/add'
            render={routerProps => (
              <TimelineForm {...routerProps} addTopic={addTopic} />
            )}
          />
          <Route path='/timeline' component={Timeline} />
          <Route
            path='/manage'
            render={routerProps => (
              <TimelineList
                {...routerProps}
                topics={topics}
                removeTopic={removeTopic}
              />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
