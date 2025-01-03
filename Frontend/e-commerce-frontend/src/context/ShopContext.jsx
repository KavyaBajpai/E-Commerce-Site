import { createContext } from "react";
import { products } from "../assets/assets";
import { useState } from "react";
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    
    const currency = "₹";
    const deliveryCharge = 40;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const value = { products,currency,deliveryCharge,search,setSearch,showSearch,setShowSearch };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
  
}

export default ShopContextProvider;
