import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './ui/Header'
import { ThemeProvider } from '@material-ui/styles'
import theme from './ui/Theme'
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <div>Home</div>} />
          <Route exact path="/about-us" component={() => <div>About Us</div>} />
          <Route exact path="/contact-us" component={() => <div>Contact Us</div>} />
          <Route exact path="/login" component={() => <div>Login</div>} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
    
  );
}

export default App;
