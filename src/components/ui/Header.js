import React, { useState, useEffect } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles'
import Tabs from '@material-ui/core/tabs'
import Tab from '@material-ui/core/tab'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import logo from '../../assets/intellivets-logo.png'
const ElevationScroll = props => {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
const useStyles = makeStyles(theme => ({
  header: {
    boxShadow: "0 0 30px rgba(0,0,0,.15)",
    background: "#FFFFFF"
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '60px'
  },
  logo: {
    height: '5em',
    paddingLeft: "20px",
    paddingTop: "10px",
    paddingBottom: "10px"
  },
  logoContainer: {
    paddingLeft: 0,
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  tabContainer: {
    marginLeft: 'auto'
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px"
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "8px",
    marginLeft: "50px",
    marginRight: "20px",
    textTransform: 'none',
    height: "45px",
    minWidth: "90px" 
  }
}))
const Header = () => {
  const classes = useStyles()
  const [value, setValue] = useState(0)

  useEffect(() => {

    if(window.location.pathname === "/" && value !== 0){
      setValue(0)
    } else if(window.location.pathname === "/about-us" && value !== 1){
      setValue(1)
    } else if(window.location.pathname === "/contact-us" && value !== 2){
      setValue(2)
    } else if(window.location.pathname === "/login" && value !== 3){
      setValue(3)
    }
  }, [value])
  const handleChange = ( e, value ) => {
    setValue(value)
  }
  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.header}>
          <Toolbar disableGutters>
            <Button disableRipple onClick={() => setValue(0)} component={Link} to="/" className={classes.logoContainer}>
              <img src={logo} className={classes.logo} alt="company logo" />
            </Button>
            <Tabs value={value}  className={classes.tabContainer} onChange={handleChange}>
              <Tab className={classes.tab} component={Link} to="/" label="Home" />
              <Tab className={classes.tab} component={Link} to="/about-us" label="About Us" />
              <Tab className={classes.tab} component={Link} to="/contact-us" label="Contact Us" />
            </Tabs>
            <Button variant="outlined" color="secondary" component={Link} to="/login" onClick={() => setValue(3)} className={classes.button}>Login</Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  )
}

export default Header
