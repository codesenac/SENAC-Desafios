import React from 'react';
import ReactDOM from 'react-dom/client';
import { GreetingFuncional } from './components/desafio 02/GreetingFuncional';
import { MessageClass, CustomMessageClass } from './components/desafio 01/MessageClass';
import Card from './components/desafio 03/Card';
import ProductClass from './components/desafio 04/ProductClass';

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

    <div>
      <ProductClass name="Laptop" price="1000" quantity="5" />
      <ProductClass name="Smartphone" price="500" quantity="10" />
    </div>
  </React.StrictMode>
);
