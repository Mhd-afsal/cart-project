import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Product from "./Product";

import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "react-redux";
import store from "./store";
import Cart from './Cart';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="cart" element={<Cart/>}></Route>
      
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
