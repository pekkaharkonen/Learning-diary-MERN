import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  FormGroup,
  Input,
  Button,
  InputLabel,
  Typography
} from '@material-ui/core';

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
      <Typography align='center' variant='h4' style={{ marginBottom: '3rem' }}>
        Add a new item to the timeline
      </Typography>
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: '900px',
          margin: 'auto'
        }}
      >
        <FormGroup>
          <InputLabel htmlFor='title'>Title</InputLabel>
          <Input
            type='text'
            name='title'
            id='title'
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <InputLabel htmlFor='title'>Description</InputLabel>
          <Input
            name='description'
            id='description'
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <InputLabel htmlFor='startdate'>Start date</InputLabel>
          <Input
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
        </FormGroup>
        <FormGroup>
          <Button
            variant='contained'
            color='primary'
            type='submit'
            style={{ marginTop: '1rem' }}
          >
            Add
          </Button>
        </FormGroup>
      </form>
    </div>
  );
};

TimelineForm.propTypes = {
  addTopic: PropTypes.func.isRequired
};
export default TimelineForm;
