import { useState } from "react";

const initialValues: any = {
    cart: [],
}

const useInitialState = () => {
    const [state, setState] = useState(initialValues);
    
    const addCart = (payload: any) => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        })
    }
    
    return {
        state,
        addCart
    }
};

export default useInitialState;