import React, { Component } from "react";
import FormularioCadastro from "./FormularioCadastro";
import ListaDeNotas from "./ListaDeNotas";
import CategoryList from "./CategoryList";
import GradesList from "../Dates/Grades";
import Categorys from "../Dates/Categorys";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.categorys = new Categorys();
    this.gradesList = new GradesList();
  }

  componentDidMount() {
    console.log(this.gradesList.grades)
  }

  render() {
    return (
      <section className="appContainer flex-column gap-2">
        <CategoryList
          categorys={this.categorys} //e passado o estado da categoria
          addCategoryList={this.categorys.addCategoryState.bind(this)} //e passado o metodo para adicionar categoria
        />

        <main className="flex-row w-100 flex-wrap justify-between">
          <FormularioCadastro
            categorys={this.categorys}
            setGrades={this.gradesList.addGradesState.bind(this.gradesList)}
            setRegisterForm={this.gradesList.setRegister.bind(this.gradesList)}
          />

          <ListaDeNotas
            getGrades={this.gradesList.state} //e passado o estado da categoria
            deleteGrades={this.gradesList.deleteGradesState.bind(this.gradesList)}
            setRegisterGrades={this.gradesList.setRegister.bind(this.gradesList)}
            setRegisterCategorys={this.categorys.setRegister.bind(this.categorys)}
          />
        </main>
      </section>
    );
  }
}

export default App;
