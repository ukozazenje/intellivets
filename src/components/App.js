import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './ui/Header';
import Footer from './ui/Footer';
import { ThemeProvider } from '@material-ui/styles';
import theme from './ui/Theme';
import Login from './pages/LogIn';
import SignUp from './pages/SignUp';
import Specialist from './pages/Specialist';
import Pet from './pages/Pet';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <div>Home</div>} />
          <Route exact path="/about-us" component={() => <div>About Us</div>} />
          <Route
            exact
            path="/contact-us"
            component={() => <div>Contact Us</div>}
          />
          <Route exact path="/specialist" component={() => <Specialist />} />
          <Route exact path="/login" component={() => <Login />} />
          <Route exact path="/sign-up" component={() => <SignUp />} />
          <Route exact path="/pet" component={() => <Pet />} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
