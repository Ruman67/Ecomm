
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import ShopCategory from './Components/Pages/ShopCategory';
import Shop from './Components/Pages/Shop';
import Product from './Components/Pages/Product';
import Cart from './Components/Pages/Cart';
import LoginSignup from './Components/Pages/LoginSignup';
function App() {
  return (
    <div >
      <BrowserRouter>

      <Navbar/>
       <Routes>
        <Route path='/' element={<Shop/>}></Route>
        <Route path='/mens' element={<ShopCategory category="mens"/>}></Route>
        <Route path='/womens' element={<ShopCategory category="womens"/>}></Route>
        <Route path='/kids' element={<ShopCategory category="kids"/>}></Route>

        <Route path="product" element = {<Product/>}></Route>
        <Route path=":productId" element={<Product/>}></Route>
<Route path = '\cart' element={<Cart/>}></Route>
<Route path = '\login' element={<LoginSignup/>}></Route>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
