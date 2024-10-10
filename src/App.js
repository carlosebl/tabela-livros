import React, { Component } from "react";

import TableBody from "./components/TableBody";
import TableFoot from "./components/TableFoot";
import TableHead from "./components/TableHead";

class App extends Component {

  state = {
    livros: []
  }

  componentDidMount() {
    fetch("/api/livros.json")
    .then(response => response.json())
    .then(livros => this.setState({livros}))
    .catch(function(error){
      console.log("Erro na requisição")
    })
    .finally(function() {
      console.log("Sempre retorna")
    })
  }

  handleRemoverLinha = (id) => {
    const livros = this.state.livros.filter(l => l.id !== id)
    this.setState({livros})
  }

  handleOrdenarCrescente = (titulo) => {
    const livros = this.state.livros.sort((a, b) =>
      a.titulo < b.titulo ? -1 : 0
  )
  this.setState(livros)
  }

  handleOrdenarDecrescente = (titulo) => {
    const livros = this.state.livros.sort((a, b) =>
      a.titulo < b.titulo ? -1 : 0
  )
  livros.reverse()
  this.setState({livros})
  }

  render() {
    return (
      <div className="App">
        <table className="table">
          <TableHead ordenarCrescente={this.handleOrdenarCrescente} ordenarDecrescente={this.handleOrdenarDecrescente} />
          <TableBody livros={this.state.livros} removerLinha={this.handleRemoverLinha} />
          <TableFoot qdeLivros={this.state.livros.length} />
        </table>
      </div>
    );
  }
  }

export default App;
