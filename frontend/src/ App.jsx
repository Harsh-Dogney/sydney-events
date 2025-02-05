import React from 'react';
import EventList from './components/EventList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Events in Sydney</h1>
      </header>
      <main>
        <EventList />
      </main>
    </div>
  );
}

export default App;