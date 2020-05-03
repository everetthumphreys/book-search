import React from "react";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Books from "./pages/Books";
import Saved from "./pages/Saved";
import Home from "./pages/Home";
import Nav from './components/Nav';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {

  return (
    <ThemeProvider theme={createMuiTheme({})}>
      <Router>
        <Nav>
        <Container>
          <Switch>
            <Route path="/booksearch" component={Books} />
            <Route path="/saved" component={Saved} />
            <Route path="/" component={Home} />
            {/* <Books /> */}
            <Saved />
          </Switch>
        </Container>
        </Nav>
      </Router>
    </ThemeProvider>
  );
}

export default App;