import React, { useState, useEffect } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/tabs';
import Tab from '@material-ui/core/tab';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../../assets/intellivets-logo.png';
import Container from '@material-ui/core/Container';

const ElevationScroll = (props) => {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};
const useStyles = makeStyles((theme) => ({
  header: {
    boxShadow: '0 0 30px rgba(0,0,0,.15)',
    background: '#FFFFFF',
    zIndex: theme.zIndex.modal + 1,
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1em',
    },
  },
  logo: {
    height: '5em',
    // paddingLeft: '20px',
    // paddingTop: '10px',
    // paddingBottom: '10px',
    [theme.breakpoints.down('md')]: {
      height: '4em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '3em',
    },
  },
  logoContainer: {
    // paddingLeft: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px',
  },
  loginBtn: {
    ...theme.typography.estimate,
    borderRadius: '8px',
    marginLeft: '50px',
    marginRight: '20px',
    textTransform: 'none',
    height: '45px',
    minWidth: '90px',
  },
  signUpBtn: {
    ...theme.typography.estimate,
    borderRadius: '8px',
    // marginLeft: "50px",
    marginRight: '20px',
    textTransform: 'none',
    height: '45px',
    minWidth: '90px',
    color: '#FFFFFF',
  },
  drawer: {
    backgroundColor: '#FFFFFF',
  },
  drawerItem: {
    ...theme.typography.tab,
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  drawerIcon: {
    height: '30px',
    width: '30px',
  },
}));

const Header = () => {
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const [openDrawer, setOpenDrawer] = useState(false);
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (window.location.pathname === '/' && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === '/about-us' && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === '/contact-us' && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === '/specialist' && value !== 3) {
      setValue(3);
    }
  }, [value]);
  const handleChange = (e, value) => {
    setValue(value);
  };
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };
  const tabs = (
    <>
      <Tabs
        value={value}
        className={classes.tabContainer}
        onChange={handleChange}
      >
        <Tab className={classes.tab} component={Link} to="/" label="Home" />
        <Tab
          className={classes.tab}
          component={Link}
          to="/about-us"
          label="About Us"
        />
        <Tab
          aria-owns={anchorEl ? 'single-menu' : undefined}
          aria-haspopup={anchorEl ? true : undefined}
          className={classes.tab}
          component={Link}
          onMouseOver={(event) => handleClick(event)}
          to="/contact-us"
          label="Contact Us"
        />
        <Tab
          aria-owns={anchorEl ? 'single-menu' : undefined}
          aria-haspopup={anchorEl ? true : undefined}
          className={classes.tab}
          component={Link}
          onMouseOver={(event) => handleClick(event)}
          to="/specialist"
          label="Specialist"
        />
      </Tabs>
      <Button
        variant="outlined"
        color="secondary"
        component={Link}
        to="/login"
        className={classes.loginBtn}
      >
        Log in
      </Button>
      <Button
        variant="contained"
        color="secondary"
        component={Link}
        to="/sign-up"
        className={classes.signUpBtn}
      >
        Sign up
      </Button>
      {/* <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        <MenuItem
          component={Link}
          to="/payment-history"
          onClick={() => {
            setValue(2);
            handleClose();
          }}
        >
          Payment History
        </MenuItem>
        <MenuItem
          component={Link}
          to="/update-account"
          onClick={() => {
            setValue(2);
            handleClose();
          }}
        >
          Update Account
        </MenuItem>
        <MenuItem
          component={Link}
          to="/"
          onClick={() => {
            setValue(2);
            handleClose();
          }}
        >
          Log out
        </MenuItem>
      </Menu> */}
    </>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          <ListItem
            divider
            button
            onClick={() => setOpenDrawer(false)}
            component={Link}
            to="/"
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Home
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            onClick={() => setOpenDrawer(false)}
            component={Link}
            to="/about-us"
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              About Us
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            onClick={() => setOpenDrawer(false)}
            component={Link}
            to="/contact-us"
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Contact Us
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            onClick={() => setOpenDrawer(false)}
            component={Link}
            to="/specialist"
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Specialist
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            onClick={() => setOpenDrawer(false)}
            component={Link}
            to="/login"
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Log in
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            onClick={() => setOpenDrawer(false)}
            component={Link}
            to="/sign-up"
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Sgn up
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        color="inherit"
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon color="primary" className={classes.drawerIcon} />
      </IconButton>
    </>
  );
  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.header}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Button
                disableRipple
                onClick={() => setValue(0)}
                component={Link}
                to="/"
                className={classes.logoContainer}
              >
                <img src={logo} className={classes.logo} alt="company logo" />
              </Button>
              {matches ? drawer : tabs}
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
};

export default Header;
