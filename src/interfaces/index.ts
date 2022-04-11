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
}

export interface LayoutProps {
    children: ReactNode 
}

export interface ClickProps {
    onClick?: () => void
}