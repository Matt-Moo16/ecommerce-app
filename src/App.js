import React, {useState, useEffect} from "react";
import Cart from "./Components/Cart/Cart";
import NavBar from "./Components/NavBar/NavBar";
import Products from "./Components/Products/Products";
import Checkout from "./Components/CheckoutForm/Checkout/Checkout"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { commerce } from './lib/commerce'

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({})
  const [errorMessage, setErrorMessage] = useState('')

  const fetchProducts = async () => {
    const { data }= await commerce.products.list()

    setProducts(data)
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  }

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity)
    setCart(cart)
  }

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, {quantity: quantity})
    setCart(cart)
  }

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId)
    setCart(cart)
  }

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty()
    setCart(response)
  }

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh()
    setCart(newCart)
  }

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    console.log(newOrder)
    try {
      setErrorMessage('')
      setOrder({})
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      console.log(error)
      setErrorMessage(error.message)
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(errorMessage)

  return (
    <Router>
      <div className="App">
      <NavBar totalItems={cart.total_items} />
      <Routes>
        <Route exact path='/' element={<Products products={products} onAddToCart={handleAddToCart} />} />
        <Route exact path='/cart' element={<Cart cart={cart} handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart} handleEmptyCart={handleEmptyCart}/>}/>
        <Route exact path='/checkout' element={<Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />} />
      </Routes>
    </div>
    </Router>
  );
};

export default App;
