import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path='/' element={<ItemListContainer  />}/>
      <Route path='/category/:categoryName' element={<ItemListContainer  />}/>
      <Route path='detail/:id' element={<ItemDetailContainer  />}/>
      <Route path='cart' element={<Cart  />}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;


/*
<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
*/
