import React from 'react';
import moment from 'moment';

const TimelineItem = ({ topic }) => {
  return (
    <div className='timeline-item'>
      <div className='timeline-item-content'>
        <span className='timeline-item-date'>
          {moment(topic.startdate).format('DD.MM.YYYY')}
        </span>
        <span className='timetine-item-title'>{topic.title}</span>
        <span className='timeline-item-description'>{topic.description}</span>
        <span className='circle'></span>
      </div>
    </div>
  );
};

export default TimelineItem;
