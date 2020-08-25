import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Router, Route } from "react-router-dom";
import home from "./pages/home";
import work from "./pages/work";
import about from "./pages/about";
import contact from "./pages/contact";
import Navbar from "./components/Navbar";
//import Footer from "./components/Footer/Footer";
import Wrapper from "./components/Wrapper";

class App extends Component {
  render() {
    return (
      // eslint-disable-next-line react/jsx-no-undef
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Router>
          <div>
            <Navbar />
            <Wrapper>
              <Route
                exact
                path={process.env.PUBLIC_URL + "/"}
                component={home}
              />
              <Route exact path="/work" component={work} />
              <Route exact path="/about" component={about} />
              <Route exact path="/contact" component={contact} />
            </Wrapper>
          </div>
        </Router>
      </BrowserRouter>
    );
  }
}
//text is wrongs

export default App;
