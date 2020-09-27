import React from 'react';
import { makeStyles } from '@material-ui/styles';
import ToolBar from '@material-ui/core/Toolbar';
const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: '5rem',
    backgroundColor: '#e0e0e0',
    width: '100%',
  },
  copyright: {
    fontFamily: 'Roboto',
    fontWeight: 300,
    textTransform: 'none',
    fontSize: '1rem',
    color: `#000`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <ToolBar className={classes.copyright}>&copy; Intellivets 2020</ToolBar>
    </footer>
  );
};

export default Footer;
