import {ReactNode} from 'react';

export interface ProductListProps {
    products: ProductItemProps[]
}

export interface ButtonProps {
    text: string
    isIcon?: boolean
    onClick?: () => void
}

export interface ProductItemProps {
    id: number
    price: number
    title: string
    images: string
    product?: {}
    deleteC?: () => void
}

export interface LayoutProps {
    children: ReactNode 
}

export interface ClickProps {
    onClick?: () => void
}

export interface AppContextProps {
    state?: any
    addCart?: any
    calculateTotalCart?: any
    deleteCart?: any
}

export interface IPrice {
    price : number
}