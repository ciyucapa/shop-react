import {ReactNode} from 'react';

export interface IProductosPlp {
    categoryName: []
    productCategoryShoes: ProductItemProps[]
}

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
    category?: ICategories
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

export interface INavbar {
    categories: ICategories[]
}

export interface ICategories {
    id: number
    name: string
    image: string
}