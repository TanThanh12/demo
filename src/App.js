import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Product from "./components/Product";
import Products from "./components/Products";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index element={<Home />}></Route>
            <Route path="/detail" element={<Detail />}></Route>
            <Route path="/product/:id" element={<Product />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="*" element={<h1>Error page</h1>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
