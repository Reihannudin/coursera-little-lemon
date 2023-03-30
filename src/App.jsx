import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import "@fortawesome/fontawesome-free/css/all.css";
import CheckoutReservastion from "./Pages/CheckoutReservastion";
import CheckoutDelivery from "./Pages/CheckoutDelivery";
import Product from "./Pages/Product";
import Profile from "./Pages/Profile";
import Catalog from "./Pages/Catalog";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  return (
    <div className="App">
      <div
          className="app-content bg-white mx-auto"
          style={{ maxWidth: "400px", minHeight: "100vh" }}
      >
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/catalog" element={<Catalog />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/checkout/delivery" element={<CheckoutDelivery />}></Route>
          <Route path="/checkout/reservastion" element={<CheckoutReservastion />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
