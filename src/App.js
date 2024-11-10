import React, { useContext } from 'react';
import './App.css';
import Kosar from './components/Kosar';
import Vasarloter from './components/Vasarloter';
import { ApiContext } from './contexts/ApiContext';
import { KosarProvider } from './contexts/KosarContext';

function App() {

  const { termekLista } = useContext(ApiContext);
  
  return (
    <KosarProvider>
      <div className="container">
        <header>
          <h1>Fakestore</h1>
        </header>
        <aside className='col-lg-4'>
            <form class="d-flex">
            <input class="form-control me-2" type="text" placeholder="Keresés"></input>
            </form>
        </aside>
        <main className='row'>
          <aside className='col-lg-4'>
            <h4>Kosár</h4>
            <Kosar/>
          </aside>
          <article className='col-lg-8'>
            <h4>Vásárlótér</h4>
            <Vasarloter termekLista={termekLista}/>
          </article>
        </main>
      </div>
    </KosarProvider>
  );
}

export default App;
