/* eslint-disable react/prop-types */
import  { Component } from 'react';

export class MessageClass extends Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}

export class CustomMessageClass extends Component {
  render() {
    return <p>Eu sou o {this.props.message}</p>;
  }
}