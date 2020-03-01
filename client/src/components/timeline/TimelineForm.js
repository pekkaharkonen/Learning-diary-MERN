import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const TimelineForm = ({ addTopic, history }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startdate, setStartdate] = useState(moment().format('YYYY-MM-DD'));

  const handleSubmit = e => {
    e.preventDefault();
    let topic = {
      title,
      description,
      startdate
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
            value={startdate}
            onChange={e =>
              setStartdate(
                moment(new Date(e.target.value)).format('YYYY-MM-DD')
              )
            }
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
