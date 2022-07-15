import React, { Component } from "react";
import ListaDeNotas from "../ListaDeNotas";
import FormularioCadastro from "../FormularioCadastro";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: [],
    };
  }

  createGrades(title, text) {
    const newGrades = { title, text };
    const newArrayGrades = [...this.state.grades, newGrades];
    const newState = {
      grades: newArrayGrades,
    };
    this.setState(newState);
  }

  render() {
    return (
      <section className="appContainer">
        <FormularioCadastro createNote={this.createGrades.bind(this)} />
        <ListaDeNotas grades={this.state.grades} />
      </section>
    );
  }
}

export default App;
