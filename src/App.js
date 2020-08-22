import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import home from "./pages/home";
import work from "./pages/work";
import contact from "./pages/contact";
import Navbar from "./components/Navbar";
//import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={home} />
          <Route exact path="/home" component={home} />
          <Route exact path="/work" component={work} />
          <Route exact path="/contact" component={contact} />
        </Wrapper>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
