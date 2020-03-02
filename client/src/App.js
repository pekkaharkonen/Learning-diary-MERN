import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/layout/Nav';
import Home from './components/pages/Home';
import About from './components/pages/About';
import {
  getTopics,
  createTopic,
  deleteTopic,
  updateTopic
} from './services/topicsService';
import TimelineForm from './components/timeline/TimelineForm';
import Timeline from './components/timeline/Timeline';
import TimelineList from './components/timeline/TimelineList';
import TimelineEdit from './components/timeline/TimelineEdit';
import { Container } from '@material-ui/core';

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
      // Remove a topic from the state first to make the UI feel more responsive
      setTopics(topics.filter(topic => topic._id !== id));
      await deleteTopic(id);
      getAndSetTopics();
    } catch (err) {
      console.error(err);
    }
  };

  const updateItem = async data => {
    try {
      await updateTopic(data);
      getAndSetTopics();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Router>
      <div className='App'>
        <Nav title={'My Timeline'} />
        <Container maxWidth='lg'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route
              path='/add'
              render={routerProps => (
                <TimelineForm {...routerProps} addTopic={addTopic} />
              )}
            />
            <Route
              path='/timeline'
              render={routerProps => (
                <Timeline {...routerProps} topics={topics} />
              )}
            />
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
            <Route
              path='/edit/:id'
              render={routerProps => (
                <TimelineEdit
                  {...routerProps}
                  topics={topics}
                  updateItem={updateItem}
                />
              )}
            />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
