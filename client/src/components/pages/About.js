import React, { Fragment } from 'react';
import { Typography } from '@material-ui/core';

const About = () => {
  return (
    <Fragment>
      <Typography align='center' variant='h4' style={{ marginBottom: '3rem' }}>
        About this project
      </Typography>
      <Typography paragraph={true}>
        This project is created as a continuous weekly project at AW Academy
        Spring -20
      </Typography>
      <Typography paragraph={true}>
        The React client is supposed to generate a timeline including the
        components added with the provided form. The timeline components can be
        managed on a separate page with edit and delete functionality.
      </Typography>
      <Typography paragraph={true}>
        The data is stored with MongoDB Atlas
      </Typography>
    </Fragment>
  );
};

export default About;
