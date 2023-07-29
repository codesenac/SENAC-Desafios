import React from 'react';
import ReactDOM from 'react-dom';
import { GreetingFuncional } from './components/greeting/GreetingFuncional';
import { MessageClass, CustomMessageClass } from './components/counterClass/MessageClass';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GreetingFuncional name="Rafaela" />
    <GreetingFuncional name="Marcos" />

    <MessageClass />
    <CustomMessageClass message="Marcos!" />
  </React.StrictMode>
);
