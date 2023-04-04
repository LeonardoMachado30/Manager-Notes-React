import React, { Component } from "react";
import "./ListaDeNotas.css";

class ListaDeNotas extends Component {
  constructor(props) {
    super(props);
    this.state = { grades: [] };
  }
  componentDidMount() {
    this.props.setRegisterGrades(this._newState.bind(this));
    this.props.setRegisterCategorys(this._newState);
  }

  _newState(grades) {
    this.setState(...this.state, this.props.getGrades);
  }

  render() {
    return (
      <ul className="listaDeNotasContainer max-width-2">
        {console.log(this.state)}
      </ul>
    );
  }
}

export default ListaDeNotas;
