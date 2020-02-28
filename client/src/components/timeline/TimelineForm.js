import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TimelineForm = ({ addTopic, history }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date().toLocaleDateString('fi'));

  const handleSubmit = e => {
    e.preventDefault();
    let topic = {
      title,
      description,
      date
    };
    addTopic(topic);
    history.push('/manage');
  };

  return (
    <div>
      <h1>Add a new item to the timeline</h1>
      <form onSubmit={handleSubmit}>
        <div className='input-group'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            name='title'
            id='title'
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className='input-group'>
          <label htmlFor='title'>Description</label>
          <textarea
            name='description'
            id='description'
            cols='30'
            rows='10'
            value={description}
            onChange={e => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className='input-group'>
          <label htmlFor='startdate'>Start date</label>
          <input
            type='date'
            name='startdate'
            id='startdate'
            value={date}
            onChange={e => setDate(e.target.value)}
          />
        </div>
        <button type='submit'>Add</button>
      </form>
    </div>
  );
};

TimelineForm.propTypes = {
  addTopic: PropTypes.func.isRequired
};
export default TimelineForm;
