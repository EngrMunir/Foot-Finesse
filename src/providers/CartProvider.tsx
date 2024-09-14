"use client"
import { createContext, ReactNode, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export const CartContext = createContext(null)

const CartProvider = ({children}: {children: ReactNode}) => {
    const [grandTotal, setGrandTotal] = useState(0)

    const [cart , setCart] = useState(() => {
        const saveCart = localStorage.getItem("shoeCart")
        return saveCart ? JSON.parse(saveCart) : []
    })

  // save cart in local storage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));

    //   grand Total
    let result = 0;

    cart.forEach((product) => {

      let totalPrice = product.discountPrice * product.quantity;
      result += totalPrice;
    });
    setGrandTotal(result);

  }, [cart]);

    // add to cart
    const addCart = (product) => {
        const existingProduct = cart.find(c => c.id === product.id);
        if(existingProduct){
            const result = cart.map((c) =>
                c.id === product.id ? { ...c, quantity: c.quantity + 1 } : c
              );
              toast.success("Quantity updated", {
                style: {
                  background: "#2B3440",
                  color: "#fff",
                },
              });
              return setCart(result);
        }

        setCart([...cart, product])
        toast.success("Product Added", {
            style: {
              background: "#2B3440",
              color: "#fff",
            },
          });
    }

      //   quantity update
  const updateQuantityOfProduct = (productId, state) => {
    if (state) {
      const result = cart.map((c) =>
        c.id === productId ? { ...c, quantity: c.quantity + 1 } : c
      );
      toast.success(" +1 Quantity Updated", {
        style: {
          background: "#2B3441",
          color: "#fff",
        },
      });
      return setCart(result);
    } else {

      const result = cart.map((c) =>
        c.id === productId ? { ...c, quantity: c.quantity - 1 } : c
      );
      
      toast.success(" -1 Quantity Updated", {
        style: {
          background: "#2B3440",
          color: "#fff",
        },
      });
      return setCart(result);
    }
  };

  //   delete from cart
  const deleteCart = (productId) => {
    const result = cart.filter((p) => productId !== p.id);
    setCart(result);
  };

    const cartInfo  = {
        cart, 
        grandTotal,
        addCart,
        updateQuantityOfProduct,
        deleteCart

    }

    return (
        <CartContext.Provider value={cartInfo}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;