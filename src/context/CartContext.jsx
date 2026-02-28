import {createContext} from "react";
import { useState } from "react";

export const CartContext = createContext({
    cart: [],
    setCart: () => {},
    addItem: () => {},
    clearCart: () => {},
    removeItem: () => {},
    isInCart: () => {},
    updateQuantity: () => {},
    incrementQty: () => {},
    decreaseQty: () => {}
})

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

    const updateQuantity = (id, newQty) => {
        if (newQty <= 0) {
            removeItem(id)
        } else {
            setCart(cart.map(product => 
                product.id === id ? {...product, qty: newQty} : product
            ))
        }
    }

    const incrementQty = (id) => {
        setCart(cart.map(product => 
            product.id === id ? {...product, qty: product.qty + 1} : product
        ))
    }

    const decreaseQty = (id) => {
        setCart(cart.map(product => {
            if(product.id === id){
                const newQty = product.qty - 1
                return newQty > 0 ? {...product, qty: newQty} : product
            }
            return product
        }).filter(product => product.qty > 0))
    }

    return(
        <CartContext.Provider value={{cart, setCart, addItem, clearCart, removeItem, isInCart, updateQuantity, incrementQty, decreaseQty}}>
            {children}
        </CartContext.Provider>
    )
}