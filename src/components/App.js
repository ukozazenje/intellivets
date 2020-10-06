import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './ui/Header';
import Footer from './ui/Footer';
import { ThemeProvider } from '@material-ui/styles';
import theme from './ui/Theme';
import LandingPage from './pages/LandingPage';
import Login from './pages/LogIn';
import SignUp from './pages/SignUp';
import Specialist from './pages/Specialist';
import Pet from './pages/Pet';
import Resources from './pages/Resources';
import GeneralPractitioner from './pages/GeneralPractitioner';
import PetOwner from './pages/PetOwner';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <LandingPage />} />
          <Route exact path="/about-us" component={() => <div>About Us</div>} />
          <Route
            exact
            path="/contact-us"
            component={() => <div>Contact Us</div>}
          />
          <Route exact path="/specialist" component={() => <Specialist />} />
          <Route
            exact
            path="/general-practitioner"
            component={() => <GeneralPractitioner />}
          />
          <Route exact path="/login" component={() => <Login />} />
          <Route exact path="/sign-up" component={() => <SignUp />} />
          <Route exact path="/pet" component={() => <Pet />} />
          <Route exact path="/resources" component={() => <Resources />} />
          <Route exact path="/pet-owner" component={() => <PetOwner />} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
