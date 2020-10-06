/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PetCard from '../PetCard';

const useStyles = makeStyles((theme) => ({
  heroBackground: {
    background: 'linear-gradient(87deg, #212529 0, #212229 100%) !important',
    height: '380px',
    width: '100%',
    position: 'absolute',
    top: '0',
    zIndex: '0',
  },
  pageContainer: {
    paddingTop: theme.spacing(7),
  },
}));
const PetOwner = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Container className={classes.pageContainer} maxWidth="xl">
      <PetCard />
    </Container>
  );
};

export default PetOwner;
