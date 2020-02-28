import React from 'react';
import PropTypes from 'prop-types';

const TimelineListItem = ({ topic, removeTopic }) => {
  const handleDelete = () => {
    removeTopic(topic._id);
  };

  return (
    <tr>
      <td>{topic.title}</td>
      <td>{topic.description}</td>
      <td>{topic.startdate}</td>
      <td>
        <button>Edit</button>
      </td>
      <td>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
};

TimelineListItem.propTypes = {
  topic: PropTypes.object.isRequired,
  removeTopic: PropTypes.func.isRequired
};

export default TimelineListItem;
