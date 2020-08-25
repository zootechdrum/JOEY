import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
      <Wrapper>
        <Navbar />
      </Wrapper>
    );
  }
}
//comment
export default App;
