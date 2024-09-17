'use client';
import { createContext, ReactNode, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

interface Product {
  id: number;
  category: string;
  shoeName: string;
  price: number;
  discountPrice: number;
  shortDescription: string;
  rating: number;
  image: string;
  quantity: number;
}

interface CartContextType {
  cart: Product[] | any;
  grandTotal: number;
  addCart: (product: Product) => void;
  updateQuantityOfProduct: (productId: number, state: boolean) => void;
  deleteCart: (productId: number) => void;
  compareShoes: (shoeId: string) => void;
  getComparedShoes: () => string[];
  removeShoe: (shoeId: string) => void;
}

export const CartContext = createContext<CartContextType | null>(null);

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [compare, setCompare] = useState<string[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saveCompare = localStorage.getItem('comparedShoes');
      setCompare(saveCompare ? JSON.parse(saveCompare) : []);
    }
  }, []);

  const [grandTotal, setGrandTotal] = useState<number>(0);

  const [cart, setCart] = useState(() => {
    const saveCart = localStorage.getItem('cart');
    return saveCart ? JSON.parse(saveCart) : [];
  });

  useEffect(()=>{
    localStorage.setItem('comparedShoes', JSON.stringify(compare));
  },[compare])


  const compareShoes = (shoeId: any): void => {
    if (typeof window === 'undefined') return;

    let comparedShoes: string[] = JSON.parse(localStorage.getItem('comparedShoes') || '[]');
    const isShoe = comparedShoes.find((shoe: any) => shoe.id === shoeId.id);

    if (isShoe) {
      toast.error('Shoe is already in the comparison list');
      return;
    }

    if (comparedShoes.length >= 2) {
      toast.error('You can only compare two shoes at a time');
      return;
    }

    comparedShoes.push(shoeId);
    localStorage.setItem('comparedShoes', JSON.stringify(comparedShoes));
    toast.success('Shoe added for comparison');
    setCompare(comparedShoes);
  };

  const getComparedShoes = (): string[] => {
    if (typeof window === 'undefined') return [];
    return JSON.parse(localStorage.getItem('comparedShoes') || '[]');
  };

  const removeShoe = (shoeId: string): void => {
    if (typeof window === 'undefined') return;

    let comparedShoes: string[] = JSON.parse(localStorage.getItem('comparedShoes') || '[]');
    const remaining = comparedShoes.filter((shoe: any) => shoe.id !== shoeId);

    localStorage.setItem('comparedShoes', JSON.stringify(remaining));
    toast.success('Shoe removed from comparison');
    setCompare(remaining);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('shoeCart', JSON.stringify(cart));
    }

    // Calculate grand total
    let result = 0;
    cart.forEach((product: Product) => {
      const totalPrice = product.discountPrice * product.quantity;
      result += totalPrice;
    });
    setGrandTotal(result);
  }, [cart]);

  // add to cart
  const addCart = (product: Product) => {
    const existingProduct = cart.find((c: any) => c.id === product.id);
    if (existingProduct) {
      const result = cart.map((c: any) =>
        c.id === product.id ? { ...c, quantity: c.quantity + 1 } : c
      );
      toast.success('Quantity updated', {
        style: {
          background: '#2B3440',
          color: '#fff',
        },
      });
      setCart(result);
      return;
    }

    setCart([...cart, product]);
    toast.success('Product Added', {
      style: {
        background: '#2B3440',
        color: '#fff',
      },
    });
  };

  // update product quantity
  const updateQuantityOfProduct = (productId: number, state: boolean) => {

    if (state) {
      const result = cart.map((c) => (c.id === productId ? { ...c, quantity: c.quantity + 1 } : c));
      toast.success(' +1 Quantity Updated', {
        style: {
          background: '#2B3441',
          color: '#fff',
        },
      });
      return setCart(result);
    } else {
      const result = cart.map((c:any) => (c.id === productId && c.quantity > 0 ? { ...c, quantity: c.quantity - 1 } : c));

      cart.forEach(e => {
        if(e.id === productId && e.quantity === 0) {
         
          toast.error('You cant Reduce', {
            style: {
              background: '#2B3440',
              color: '#fff',
            },
          });
        } else{
          toast.success(' -1 Quantity Updated', {
            style: {
              background: '#2B3440',
              color: '#fff',
            },
          });
        }
      });


      return setCart(result);
    }
  };

  // delete from cart
  const deleteCart = (productId: number) => {
    const result = cart.filter((p: any) => productId !== p.id);
    setCart(result);
  };

  const cartInfo: CartContextType = {
    cart,
    grandTotal,
    addCart,
    updateQuantityOfProduct,
    deleteCart,
    compareShoes,
    getComparedShoes,
    removeShoe,
  };

  return <CartContext.Provider value={cartInfo}>{children}</CartContext.Provider>;
};

export default CartProvider;
