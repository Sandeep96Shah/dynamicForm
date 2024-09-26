import React from 'react';
import './App.css';
import Form from './shared/components/Form';
import { fieldData } from './static/data';

function App() {
  return (
    <div className="App">
      <Form fields={fieldData} />
    </div>
  );
}

export default App;
