import React from 'react';
import TimelineItem from './TimelineItem';
import './Timeline.css';

const Timeline = ({ topics }) => {
  return (
    <div className='timeline-container'>
      {topics
        .sort((a, b) => new Date(a.startdate) - new Date(b.startdate))
        .map((topic, index) => (
          <TimelineItem key={index} topic={topic} />
        ))}
    </div>
  );
};

export default Timeline;
