import React from 'react';
import Header from './components/Header';
import Home from './components/Home'
import AdBar from './components/AdBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <AdBar />
      <Header />
      <Home />
    </div>
  );
}

export default App;
