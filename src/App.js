import Header from "./components/Layout/Header"
import Meals from "./components/Meals/Meals"
import Cart from "./components/Cart/Cart"
import { useState } from "react";


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
      {cartShown && <Cart hideCartHandler = {hideCartHandler}/> }

      <Header openCartHandler = {openCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
