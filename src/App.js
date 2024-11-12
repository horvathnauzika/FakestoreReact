import React from 'react';
import './App.css';
import { KosarProvider } from './contexts/KosarContext';
import Public from './pages/Public';
import Urlap from './components/Urlap';
import TermekAdmin from './components/TermekAdmin';

function App() {
  return (
    <KosarProvider>
      <div className="container">
        <header>
          <h1>Fakestore</h1>
        </header>
        <main>
          <Urlap/>
        </main>
        <article>
          <h2>Admin</h2>
          <TermekAdmin/>
        </article>
      </div>
    </KosarProvider>
  );
}

export default App;
