import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
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
      <HashRouter basename="/">
        <Router>
          <div>
            <Navbar />
            <Wrapper></Wrapper>
          </div>
        </Router>
      </HashRouter>
    );
  }
}
//text is wrong

export default App;
