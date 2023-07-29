import React from 'react';
import ReactDOM from 'react-dom';
import { GreetingFuncional } from './components/desafio 02/GreetingFuncional';
import { MessageClass, CustomMessageClass } from './components/desafio 01/MessageClass';
import Card from './components/desafio 03/Card';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GreetingFuncional name="Rafaela" />
    <GreetingFuncional name="Marcos" />

    <MessageClass />
    <CustomMessageClass message="Marcos!" />

    <div>
      <Card>
        <p>Mensagem 1</p>
      </Card>
      <Card>
        <p>Mensagem 2</p>
      </Card>
      <Card>
        <p>Mensagem 3</p>
      </Card>
    </div>
  </React.StrictMode>
);
