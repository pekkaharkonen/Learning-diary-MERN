import React from 'react';
import TimelineListItem from './TimelineListItem';
import PropTypes from 'prop-types';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography
} from '@material-ui/core';

const tableHeaderStyle = {
  fontWeight: 'bold',
  textAlign: 'center'
};

const TimelineList = ({ topics, removeTopic, history }) => {
  return (
    <div>
      <Typography align='center' variant='h4' style={{ marginBottom: '3rem' }}>
        Edit or delete timeline components
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={tableHeaderStyle}>Name</TableCell>
            <TableCell style={tableHeaderStyle}>Description</TableCell>
            <TableCell style={tableHeaderStyle}>Start Date</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {topics.map(topic => (
            <TimelineListItem
              key={topic._id}
              topic={topic}
              removeTopic={removeTopic}
              history={history}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

TimelineList.propTypes = {
  topics: PropTypes.array.isRequired,
  removeTopic: PropTypes.func.isRequired
};

export default TimelineList;
