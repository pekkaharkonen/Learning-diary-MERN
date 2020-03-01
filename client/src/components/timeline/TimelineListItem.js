import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Swal from 'sweetalert2';

const TimelineListItem = ({ topic, removeTopic, history }) => {
  const handleDelete = () => {
    Swal.fire({
      title: `Are you sure you want to delete ${topic.title} from the list?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then(result => {
      if (result.value) {
        removeTopic(topic._id);
      }
    });
  };

  const handleEdit = e => {
    history.push(`/edit/${topic._id}`);
  };

  return (
    <tr>
      <td>{topic.title}</td>
      <td>{topic.description}</td>
      <td>{moment(topic.startdate).format('DD.MM.YYYY')}</td>
      <td>
        <button onClick={handleEdit}>Edit</button>
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
