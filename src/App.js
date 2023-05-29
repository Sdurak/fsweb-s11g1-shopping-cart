import React from "react";
import { Route } from "react-router-dom";

import ProductContextProvider from "./context/ProductContext";
import CartContextProvider from "./context/CartContext";

// Bileşenler
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <CartContextProvider>
      <ProductContextProvider>
        <div className="App">
          <Navigation /* cart={cart} */ />

          {/* Routelar */}
          <main className="content">
            <Route exact path="/">
              <Products /* products={products} addItem={addItem} */ />
            </Route>

            <Route path="/cart">
              <ShoppingCart /* cart={cart} */ />
            </Route>
          </main>
        </div>
      </ProductContextProvider>
    </CartContextProvider>
  );
}

export default App;
