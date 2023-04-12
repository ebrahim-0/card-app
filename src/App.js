import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import AddProduct from "./Pages/AddProduct";
import ProductDetails from "./Pages/ProductDetails";
import EditProduct from "./Pages/EditProduct";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="row">
        <div className="col-2 bg-light sidebar">
          <Sidebar />
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products">
              <Route index element={<Products />} />
              <Route path="add" element={<AddProduct />} />
              <Route path="edit/:productId" element={<EditProduct />} />
              <Route path=":productId" element={<ProductDetails />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
