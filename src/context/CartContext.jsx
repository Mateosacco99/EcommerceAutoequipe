import {createContext} from "react";
import { useState } from "react";
import Modal from "../components/Modal";

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
    const [modalState, setModalState] = useState({
        isOpen: false,
        title: '',
        message: ''
    });

    const showModal = (title, message) => {
        setModalState({
            isOpen: true,
            title,
            message
        });
    };

    const closeModal = () => {
        setModalState({
            isOpen: false,
            title: '',
            message: ''
        });
    };

    const addItem = (item, cantidad) => {
        if(isInCart(item.id)){
            setCart(cart.map(product => {
                if(product.id === item.id){
                    const newQty = product.qty + cantidad
                    if(newQty > product.stock){
                        showModal(
                            'Stock insuficiente',
                            `No puedes agregar más de ${product.stock} unidades. Ya tienes ${product.qty} en el carrito.`
                        );
                        return product
                    }
                    return {...product, qty: newQty}
                } else{
                    return product
                }
            }))
        } else{
            if(cantidad > item.stock){
                showModal(
                    'Stock insuficiente',
                    `No puedes agregar más de ${item.stock} unidades.`
                );
                return
            }
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
        setCart(cart.map(product => {
            if(product.id === id){
                if(product.qty >= product.stock){
                    showModal(
                        'Stock insuficiente',
                        `No hay más stock disponible. Máximo: ${product.stock} unidades.`
                    );
                    return product
                }
                return {...product, qty: product.qty + 1}
            }
            return product
        }))
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
            <Modal 
                isOpen={modalState.isOpen}
                onClose={closeModal}
                title={modalState.title}
                message={modalState.message}
            />
        </CartContext.Provider>
    )
}