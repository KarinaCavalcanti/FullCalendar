import React from 'react';
import './App.css';
import Modal from 'react-modal';
import Calendar from './components/Calendar';

Modal.setAppElement('#root');

function App() {
  return (
    <div className="App">
        <Calendar />
    </div>
  );
}

export default App;
