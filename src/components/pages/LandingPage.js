import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';
import BackgroundImg from '../../assets/home/landing2.jpg';
import GoodDogImg from '../../assets/home/GoodDog.png';
import BackgroundDogImg from '../../assets/home/backgroundDog.png';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PetsImg from '../../assets/home/pets2.png';
const useStyles = makeStyles((theme) => ({
  heroBg: {
    // background: `url(${BackgroundImg})`,
    // backgroundPosition: 'center right',
    // backgroundSize: 'cover',
    // backgroundColor: theme.palette.common.intelliVetDarkBlue,
    // display: 'block',
    // width: '100%',
    minHeight: 'calc(90vh - 120px)',
    marginTop: '-3rem',
    marginBottom: '-5rem',
    paddingTop: '4rem',
  },
  heroImg: {
    display: 'block',
    // width: '100%',
    maxWidth: '100%',
  },
  goodDog: {
    maxWidth: '100%',
    display: 'block',
  },
  transparentDog: {
    maxWidth: '100%',
    maxHeight: '400px',
    display: 'block',
  },
  landingHeading: {
    color: theme.palette.common.intelliVetDarkBlue,
    fontWeight: '500',
    // marginTop: '6rem',
    textAlign: 'center',
  },
  contentWrapper: {
    height: '600px',
    alignItems: 'center',
  },
  absoluteImg: {
    // position: 'absolute',
    // bottom: '100px',
    // left: '5%',
    width: '90%',
    zIndex: '9999',
    display: 'block',
    marginTop: '3rem',
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <section className={classes.heroBg}>
      <Container maxWidth="xl">
        <Grid container direction="column" justify="center" alignItems="center">
          <Typography
            className={classes.landingHeading}
            variant="h2"
            component="h1"
          >
            Intellivet Pet Nutrition App
          </Typography>
          <Typography
            className={classes.landingHeading}
            variant="h2"
            component="h1"
          >
            Coming soon
          </Typography>
          <img
            className={classes.absoluteImg}
            src={PetsImg}
            alt="coming soon"
          />
        </Grid>
      </Container>
    </section>
  );
};

export default LandingPage;
