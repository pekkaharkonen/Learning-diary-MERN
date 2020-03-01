import React from 'react';
import TimelineListItem from './TimelineListItem';
import PropTypes from 'prop-types';

const TimelineList = ({ topics, removeTopic, history }) => {
  return (
    <div>
      <h1>Timeline list</h1>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Description</td>
            <td>Start Date</td>
          </tr>
        </thead>
        <tbody>
          {topics.map(topic => (
            <TimelineListItem
              key={topic._id}
              topic={topic}
              removeTopic={removeTopic}
              history={history}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

TimelineList.propTypes = {
  topics: PropTypes.array.isRequired,
  removeTopic: PropTypes.func.isRequired
};

export default TimelineList;
