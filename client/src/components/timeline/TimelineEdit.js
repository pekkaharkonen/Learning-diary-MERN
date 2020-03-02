import React, { useState, useEffect } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import {
  FormGroup,
  Input,
  Button,
  InputLabel,
  Typography
} from '@material-ui/core';

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
    <div
      style={{
        maxWidth: '900px',
        margin: 'auto'
      }}
    >
      <Typography align='center' variant='h4' style={{ marginBottom: '3rem' }}>
        Edit component
      </Typography>
      <FormGroup>
        <InputLabel htmlFor='title'>Enter new title</InputLabel>
        <Input
          type='text'
          name='title'
          id='edittitle'
          value={topic.title}
          onChange={e => setTopic({ ...topic, title: e.target.value })}
        />
      </FormGroup>
      <FormGroup>
        <InputLabel htmlFor='description'>Enter new description</InputLabel>
        <Input
          name='description'
          id='editdescription'
          value={topic.description}
          onChange={e => setTopic({ ...topic, description: e.target.value })}
        ></Input>
      </FormGroup>
      <FormGroup>
        <InputLabel htmlFor='startdate'>Start date</InputLabel>
        <Input
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
      </FormGroup>
      <FormGroup>
        <Button
          variant='contained'
          color='primary'
          type='submit'
          style={{ marginTop: '1rem' }}
          onClick={handleEdit}
        >
          Confirm
        </Button>
        <Button
          variant='contained'
          color='default'
          type='submit'
          style={{ marginTop: '0.5rem' }}
          onClick={handleCancel}
        >
          Cancel
        </Button>
      </FormGroup>
    </div>
  );
};

TimelineEdit.propTypes = {
  topics: PropTypes.array.isRequired,
  updateItem: PropTypes.func.isRequired
};

export default TimelineEdit;
