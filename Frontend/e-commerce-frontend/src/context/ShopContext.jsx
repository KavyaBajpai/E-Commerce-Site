import { createContext, useEffect } from "react";
import { products } from "../assets/assets";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    
    const currency = "₹";
    const deliveryCharge = 40;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    //structuredclone??
    const addToCart = async (itemId, size) => {
        if(!size){
            toast.error("Please select a size.", {theme: 'dark'});
            return 
        }
        let cartData= structuredClone(cartItems);
        if( cartData[itemId]){
            if( cartData[itemId][size]){
                cartData[itemId][size] += 1;
                toast.success("Item added to cart!" , {theme: 'dark'});
            }
            else{
                cartData[itemId][size] = 1;
                toast.success("Item added to cart!", {theme: 'dark'});
            }
        }
        else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
            toast.success("Item added to cart!", {theme: 'dark'});
        }

        setCartItems(cartData);
    }

    const getCartCount = () => {
        let count =0;
        for ( const items in cartItems)
            {
              for ( const item in cartItems[items])
                {
                   try 
                   {
                    if(cartItems[items][item]){
                    count += cartItems[items][item];
                    }
                   }
              catch (error) 
              {
                console.log(error);
              }
            }
        }
        return count;
    }

    const updateQuantity = async (itemId, size, quantity)=>{
        let cartData = structuredClone(cartItems)
        cartData[itemId][size]= quantity;
         setCartItems(cartData)
         console.log(cartData)
    }

    const getCartAmount = () => {
        let amount=0;
        for(const items in cartItems)
        {
            let itemInfo = products. find((product)=> product._id===items)
            for(const item in cartItems[items]) 
            {
                try{
                     if(cartItems[items][item]>0)
                     {
                        amount+= itemInfo.price*cartItems[items][item]
                     }
                }
                catch(error)
                {

                }
            }
        }
        return amount
    }

    const value = { products,currency,deliveryCharge,search,setSearch,showSearch,setShowSearch,cartItems,addToCart,getCartCount,updateQuantity,getCartAmount };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
  
}

export default ShopContextProvider;
