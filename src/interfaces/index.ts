import {ReactNode} from 'react';

export interface IProductosPlp {
    categoryName: string[]
    categoryName1: string[]
    productClothes: ProductItemProps[]
    productElectronics: ProductItemProps[]
    productFurniture: ProductItemProps[]
    productShoes: ProductItemProps[]
    productOthers: ProductItemProps[]
    productCategory?: ProductItemProps[]
    catProductsOrder?: ProductItemProps[]
    catProductOrderMayor?: ProductItemProps[]
    visible: boolean
    onVisible: () => void
    eleccion: Ieleccion
    onEleccionMenor: () => void
    onEleccionMayor: () => void
}

export interface Ieleccion {
    menor: boolean
    mayor: boolean
}

export interface ProductListProps {
    products?: ProductItemProps[]
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
    isVisible?: boolean
    onClick?: any
}

export interface ICategories {
    id: number
    name: string
    image: string
}

export interface ICategoryMenu {
    categories: ICategories[]
}

export interface IOrderBy {
    visible: boolean
    onClick: () => void
    onClickMenor: () => void
    onClickMayor: () => void
}

export interface IDataUsers {
    id?: number
    email: string
    password: string
    name: string
    role: string
    avatar: string
}

export interface ILoginUsers {
    email: string
    password: string
}

export interface IFilter {
    categoryName: string[]
    productClothes?: ProductItemProps[]
    productElectronics?: ProductItemProps[]
    productFurniture?: ProductItemProps[]
    productShoes?: ProductItemProps[]
    productOthers?: ProductItemProps[]
}
