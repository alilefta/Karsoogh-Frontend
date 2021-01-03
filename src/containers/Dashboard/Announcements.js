import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(9),
    },
  },
}))


const AnnouncementsTab = ({

}) => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Grid>
        this is announcements tab
      </Grid>
    </Container>
  )
}

const mapStateToProps = (state, ownProps) => {

}

export default connect(
  mapStateToProps,
  {

  }
)(AnnouncementsTab);