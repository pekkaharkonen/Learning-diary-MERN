import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Swal from 'sweetalert2';
import { TableRow, TableCell, Button } from '@material-ui/core';

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
    <TableRow>
      <TableCell style={{ fontWeight: 'bold' }}>{topic.title}</TableCell>
      <TableCell>{topic.description}</TableCell>
      <TableCell>{moment(topic.startdate).format('DD.MM.YYYY')}</TableCell>
      <TableCell>
        <Button onClick={handleEdit} variant='contained' color='default'>
          Edit
        </Button>
      </TableCell>
      <TableCell>
        <Button onClick={handleDelete} variant='contained' color='primary'>
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
};

TimelineListItem.propTypes = {
  topic: PropTypes.object.isRequired,
  removeTopic: PropTypes.func.isRequired
};

export default TimelineListItem;
