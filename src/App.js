import { useContext } from 'react';
import './App.css';
import Kosar from './components/Kosar';
import Vasarloter from './components/Vasarloter';
import { ApiContext } from './contexts/ApiContext';
import { KosarContext } from './contexts/KosarContext';

function App() {

  const {termekLista}=useContext(ApiContext);
  const {kosarLista}=useContext(KosarContext);
  
  return (
    <div className="container">
      <header>
        <h1>Fakestore</h1>
      </header>
      <main className='row'>
        <aside className='col-lg-4'>
          <h4>Kosár</h4>
          <Kosar kosarLista={kosarLista}/>
        </aside>
        <article className='col-lg-8'>
          <h4>Vásárlótér</h4>
          <Vasarloter termekLista={termekLista}/>
        </article>
      </main>
    </div>
  );
}

export default App;
