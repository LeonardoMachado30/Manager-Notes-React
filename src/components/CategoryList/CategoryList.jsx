import React, { Component } from "react";
import "./CategoryList.css";

class CategoryList extends Component {
  constructor() {
    super();
    this.state = { category:[] };
    this._newCategorys = this._newCategorys.bind(this)
  }

  componentDidMount() {
    this.props.categorys.setRegister(this._newCategorys);
  }

  _newCategorys(categorysArray) {
    this.setState({...this.state.state, categorysArray});
  }

  _addCategory(e) {
    let value = e.target.value;
    if (e.key === "Enter") this.props.addCategoryList(value);
  }

  render() {
    return (
      <section className="flex-row align-items-center justify-between w-100 flex-wrap gap-2">
        <ul className="categoryList flex-row gap-1 w-100 flex-wrap max-width-2">
          {this.state.category.map((category, index) => {
            return <li key={index}>{category}</li>;
          })}
        </ul>
        <div className="w-100 d-flex justify-and-items-center max-width-2">
          <input
            type="text"
            className="w-100"
            placeholder="Adicionar categorias"
            onKeyUp={this._addCategory.bind(this)}
          />
        </div>
      </section>
    );
  }
}

export default CategoryList;
