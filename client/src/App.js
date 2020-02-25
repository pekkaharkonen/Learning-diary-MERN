import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Axios from 'axios'

function App() {
  const [topics, getTopics] = useState([])

  useEffect(()=> {
    getTopicsFromDB()
  }, [])

  const getTopicsFromDB = async() => {
    let response = await Axios.get('/api/topics')
  }
  return (
    <div className='App'>
      <Navbar />
      <h1>Blablabla</h1>
    </div>
  );
}

export default App;
