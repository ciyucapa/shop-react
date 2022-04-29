import axios from "axios";
import { IDataUsers, ProductItemProps, ILoginUsers } from "../interfaces";

const API__USERS = 'https://api.escuelajs.co/api/v1/users';
const API__PRODUCT = 'https://api.escuelajs.co/api/v1/products';
const API_LOGIN = 'https://api.escuelajs.co/api/v1/auth/login';

export const fetchDataUsers = async(dataUser: IDataUsers) => {
    try {
        const response = await axios.post(API__USERS, dataUser);
        return response

    } catch (e) {
        console.log(e)
    }
}

export const getProduct = async (onProduct: (data: ProductItemProps[]) => void) => {
    try {
        const {data} = await axios.get(API__PRODUCT);
        if(data) {
            onProduct(data)
        }

    } catch (e) {
        console.log(e)
    }
    
}

export const getUsers = async (changeUsers: (data: IDataUsers[]) => void) => {
    try {
        const {data} = await axios.get(API__USERS);
        if(data) {
            changeUsers(data);
        }

    } catch (error) {
        console.log(error);
    }
};


export const getLogin = async (credentials : ILoginUsers) => {
    try {
        const {data} = await axios.post(API_LOGIN, credentials);
        return data

    } catch (error) {
        console.log(error);
    }
}