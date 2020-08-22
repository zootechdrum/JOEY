import React, { Component } from "react";
import Card from "../components/card";
import project from "../project.json";
import Wrapper from "../components/Wrapper";

let card = [];

class Work extends Component {
  render() {
    return (
      <>
        <Wrapper>
          {this.state.project.map(project => (
            <Card
              key={project.id}
              name={project.name}
              image={project.image}
            />
          ))}
          {card}
        </Wrapper>
      </>
    );
  }
}


export default Work;