import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bulma/css/bulma.min.css'

function App() {
  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>
      <section>
          <ItemListContainer>Saludos terricola!</ItemListContainer>
      </section>  
    </>
    
  );
}

export default App;
