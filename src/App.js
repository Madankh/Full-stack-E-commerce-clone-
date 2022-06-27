import './App.css';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Pay from './pages/Pay';
import Product from './pages/Product';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Success from './pages/Success';
import { useSelector } from 'react-redux';
import {
  BrowserRouter,
  Routes,
  Navigate,
  Route,
} from "react-router-dom";

function App() {
  const user = useSelector(state => state.user.currentUser);
  return (
    <>
    <BrowserRouter> 
    <Routes>
      <Route path="/"element={<Home/>} />  
      <Route path="/Product/:id"element={<Product/>} />  
      <Route path="/Products/:category"element={<ProductList/>} />  
      <Route path="/Cart"element={<Cart/>} />  
      <Route path="/Register"element={user ? <Navigate to="/"/> : <Register/>} /> 
      <Route path="/Login"element={user ? <Navigate to="/"/>: <Login/>} />  
      <Route path="/pay" element={<Pay/>}/>
      <Route path="/Success"element={<Success/>} />
    </Routes> 
    </BrowserRouter>
    </>
  );
}

export default App;
