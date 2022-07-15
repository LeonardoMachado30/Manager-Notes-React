import React, { Component } from "react";
import CardNota from "../CardNota";
import './ListaDeNotas.css';

class ListaDeNotas extends Component {

  render() {
    return (
      <ul className="listaDeNotasContainer">
        {this.props.grades.map((grades, index) => {
          return (
            <li key={index}>
              <CardNota title={grades.title} text={grades.text}/>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
