import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "bulma/css/bulma.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemListContainer/ItemDetailContainer";
import { CartContextProvider } from "./storage/cartContext";
import CartContainer from "./components/CartContainer/CartContainer";


function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <header className="mb-3">
          <NavBar></NavBar>
        </header>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />

          <Route path="/category/:categoryID" element={<ItemListContainer />} />
          <Route path="/item/:itemID" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />

          <Route path="*" element={<h1>404: Page not found</h1>} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
