import React, { Component } from "react";
import './CardNota.css';

class CardNota extends Component {
  render() {
    return (
      <section className="card-nota">
        <header className="card-nota__cabecalho">
          <h3 className="card-nota__titulo">{this.props.title}</h3>
        </header>
        <p className="card-nota_texto">{this.props.text}</p>
      </section>
    );
  }
}

export default CardNota;
