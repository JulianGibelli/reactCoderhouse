import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bulma/css/bulma.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <header>
        <NavBar></NavBar>
      </header>
      <Routes>        
        <Route path='/' element={<ItemListContainer/>} />

        <Route path='/category/:categoryID' element={<ItemListContainer/>} />

        <Route path='*' element={<h1>404: Page not found</h1>} />      
      </Routes>    
    </BrowserRouter>
    
  );
}

export default App;
