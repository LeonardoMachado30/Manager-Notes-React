import React, { Component } from "react";
import "./FormularioCadastro.css";

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.title = "";
    this.text = "";
  }

  _handleChangeTitle(event) {
    event.stopPropagation();
    this.title = event.target.value;
  }

  _handleChangeNote(event) {
    event.stopPropagation();
    this.text = event.target.value;
  }

  _createGrades(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.createNote(this.text, this.title);
  }

  render() {
    return (
      <form
        className="formularioContainer"
        onSubmit={this._createGrades.bind(this)}
      >
        <input
          type="text"
          placeholder="titulo"
          onChange={this._handleChangeTitle.bind(this)}
        />
        <textarea
          rows={30}
          placeholder="Escreva sua nota..."
          onChange={this._handleChangeNote.bind(this)}
        />
        <button>Criar nota</button>
      </form>
    );
  }
}

export default FormularioCadastro;
