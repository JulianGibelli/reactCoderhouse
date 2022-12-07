import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bulma/css/bulma.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <header className='mb-3'>
        <NavBar></NavBar>
      </header>
      <Routes>        
        <Route path='/' element={<ItemListContainer/>} />

        <Route path='/category/:categoryID' element={<ItemListContainer/>} />
        <Route path='/item/:itemID' element={<ItemDetailContainer/>} />

        <Route path='*' element={<h1>404: Page not found</h1>} />      
      </Routes>    
    </BrowserRouter>
    
  );
}

export default App;
