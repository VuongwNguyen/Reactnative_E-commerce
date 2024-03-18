import React, { useState, useContext, createContext, useReducer } from 'react'


// tạo context
export const AppContext = createContext()
// tạo dữ liệu dùng chung cho app
export const AppProvider = (props) => {
  const [cart, reducerCart] = useReducer(cartReducer, []);
  
  function cartReducer(cart, action) {
    switch (action.type) {
      case 'add':
        return [...cart, action.product];
      case 'remove':
        const newCart = [...cart];
        newCart.splice(action.index, 1);
        return newCart;
      
      default:
        return cart;
    }
  }



  console.log('account>>>>>>>', account);
  return (
    <AppContext.Provider value={{
      cart: cart,
      reducerCart: reducerCart
    }}>
      {props.children}
    </AppContext.Provider>
  )
}
