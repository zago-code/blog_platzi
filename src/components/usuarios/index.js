import React, { Component } from 'react';
import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';
import Tabla from '../usuarios/Tabla';
import { connect } from 'react-redux';
import * as usuariosActions from '../../actions/usuariosActions';

class Usuarios extends Component {
  componentDidMount() {
    if(!this.props.usuarios.length) {
      this.props.traerTodos();
    }
  }

  ponerContenido = () => {
    if (this.props.cargando) {
      return <Spinner />;
    }
    if (this.props.error) {
      return <Fatal mensaje={this.props.error} />;
    }
    return <Tabla />
    // return <Tabla usuarios={this.props.usuarios} />;
  };

  render() {
    return (
      <>
        <h1>Usuarios</h1>
        {this.ponerContenido()}
      </>
    );
  }
}

const mapStateToProps = reducers => {
  return reducers.usuariosReducer;
};

export default connect(mapStateToProps, usuariosActions)(Usuarios);
