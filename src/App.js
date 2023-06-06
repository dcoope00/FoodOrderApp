import Header from "./components/Layout/Header"
import Meals from "./components/Meals/Meals"
import Cart from "./components/Cart/Cart"
import { useState } from "react";
import CartProvider from "./store/CartProvider";


function App() {

  const [cartShown, setCartIsShown] = useState(false)

  const openCartHandler = () =>{
    setCartIsShown(true)

  }
  const hideCartHandler = props =>{
    setCartIsShown(false)

  }
  return (
    <>
    <CartProvider>
      {cartShown && <Cart hideCartHandler = {hideCartHandler}/> }

      <Header openCartHandler = {openCartHandler} />
      <main>
        <Meals />
      </main>
      </CartProvider>
    </>
  );
}

export default App;
