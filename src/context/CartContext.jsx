import {createContext} from "react";
import { useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, cantidad) => {
        if(isInCart(item.id)){
            setCart(cart.map(product => {
                if(product.id === item.id){
                    return {...product, qty: product.qty + cantidad}
                } else{
                    return product
                }
            }))
        } else{
            setCart([...cart, {...item, qty:cantidad}])
        }
        console.log(cart)
    }

    const clearCart = () => {
        setCart([])
    }

    const removeItem = (id) => {
        setCart(cart.filter(item => item.id !== id))
    }

    const isInCart = (id) => {
        return cart.some(item => item.id === id)
    }

    return(
        <CartContext.Provider value={{cart, setCart, addItem, clearCart, removeItem, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}