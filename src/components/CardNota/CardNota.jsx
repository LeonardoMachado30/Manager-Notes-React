import React, { Component } from "react";
import "./CardNota.css";

class CardNota extends Component {
  _deleteGrades() {
    const index = this.props.index;
    this.props.deleteGradesState(index);
  }

  render() {
    return (
      <>
        <div className="flex-column">
          <h3 className="card-nota__titulo">{this.props.text}</h3>
          <p className="card-nota_texto">{this.props.title}</p>
        </div>
        <div>
          <span
            className="material-icons"
            onClick={this._deleteGrades.bind(this)}
          >
            delete_outline
          </span>
          <h4>{this.props.category}</h4>
        </div>
      </>
    );
  }
}

export default CardNota;
