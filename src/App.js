import React from 'react';
import './App.css';
import List from './components/List';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <SearchBar/>
      <List/>
    </div>
  );
}

export default App;
