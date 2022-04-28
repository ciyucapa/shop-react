import { useState } from "react";
import { IPrice, ProductItemProps } from "../interfaces";

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

    const calculateTotalCart = () => {
        const reducer = (acumulador : number, currentValue: IPrice ) => acumulador + currentValue.price
        const sum = state.cart.reduce(reducer, 0);
        return sum
    }

    const deleteCart = (id: number) => {
        setState({
            ...state,
            cart: state.cart.filter((product: ProductItemProps) => product.id !== id)
        })
    }
    
    return {
        state,
        addCart,
        calculateTotalCart,
        deleteCart
    }
};

export default useInitialState;