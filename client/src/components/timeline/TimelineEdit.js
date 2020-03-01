import React, { useState, useEffect } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const TimelineEdit = ({ topics, match, history, updateItem }) => {
  const [topic, setTopic] = useState({
    _id: null,
    title: '',
    description: '',
    startdate: moment().format('YYYY-MM-DD')
  });

  useEffect(() => {
    topics.forEach(topic => {
      if (topic._id === match.params.id) {
        setTopic({
          ...topic,
          startdate: moment(topic.startdate).format('YYYY-MM-DD')
        });
      }
    });
    //eslint-disable-next-line
  }, []);

  const handleEdit = () => {
    updateItem(topic);
    history.push('/manage');
  };
  const handleCancel = () => {
    history.push('/manage');
  };
  return (
    <div>
      <h1>Edit Timeline Item</h1>
      <div className='input-group'>
        <label htmlFor='title'>Enter new title</label>
        <input
          type='text'
          name='title'
          id='edittitle'
          value={topic.title}
          onChange={e => setTopic({ ...topic, title: e.target.value })}
        />
      </div>
      <div className='input-group'>
        <label htmlFor='description'>Enter new description</label>
        <textarea
          name='description'
          id='editdescription'
          cols='30'
          rows='10'
          value={topic.description}
          onChange={e => setTopic({ ...topic, description: e.target.value })}
        ></textarea>
      </div>
      <div className='input-group'>
        <label htmlFor='startdate'>Start date</label>
        <input
          type='date'
          name='startdate'
          id='editstartdate'
          value={topic.startdate}
          onChange={e =>
            setTopic({
              ...topic,
              startdate: moment(new Date(e.target.value)).format('YYYY-MM-DD')
            })
          }
        />
      </div>
      <button onClick={handleEdit}>Confirm</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
};

TimelineEdit.propTypes = {
  topics: PropTypes.array.isRequired,
  updateItem: PropTypes.func.isRequired
};

export default TimelineEdit;
