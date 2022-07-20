import React, { Component } from "react";
import "./FormularioCadastro.css";

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.title = "";
    this.text = "";
    this.category = "Sem Categoria";
    this.state = { categorys: [] };
  }

  componentDidMount() {
    this.props.setRegisterForm(this.state.categorys);
  }
  _newCategory(category) {
    this.setState({ ...this.state, category });
  }
  _handleChangeTitle(e) {
    e.stopPropagation();
    this.title = e.target.value;
  }
  _handleChangeText(event) {
    event.stopPropagation();
    this.text = event.target.value;
  }
  _handleCategorysList(e) {
    e.stopPropagation();
    this.category = e.target.value;
  }
  _submitGrades(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.setGrades(this.title, this.title, this.category);
  }

  render() {
    return (
      <form
        className="formularioContainer max-width-2 mb-5"
        onSubmit={this._submitGrades.bind(this)}
      >
        <select onChange={this._handleCategorysList.bind(this)}>
          <option value="" defaultValue>
            Selecione sua categoria
          </option>
          {this.props.categorys.categorys.map((category, index) => {
            return (
              <option key={index} value={category}>
                {category}
              </option>
            );
          })}
        </select>

        <input
          type="text"
          placeholder="titulo"
          onChange={this._handleChangeTitle.bind(this)}
        />

        <textarea
          rows={30}
          placeholder="Escreva sua nota..."
          onChange={this._handleChangeText.bind(this)}
        />
        <button>Criar nota</button>
      </form>
    );
  }
}

export default FormularioCadastro;
