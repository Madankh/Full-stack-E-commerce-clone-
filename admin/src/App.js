
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from './pages/Home';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import UserList from './components/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newPage/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';


function App() {
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UserList/>} />
            <Route path="/newUser" element={<NewUser/>} />
            <Route path="/user/:userId" element={<User/>} />
            <Route path="/products" element={<ProductList/>} />
            <Route path="/newProducts" element={<NewUser/>} />
            <Route path="/product/:productId" element={<Product/>} />
            <Route path="/newproduct" element={<NewProduct/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>

  );
}

export default App;
