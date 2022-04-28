import axios from "axios";
import { IDataUsers } from "../interfaces";

const API__USERS = 'https://api.escuelajs.co/api/v1/users';
const API__PRODUCT = 'https://api.escuelajs.co/api/v1/products';

export const fetchDataUsers = async(dataUser: IDataUsers) => {
    try {
        const response = await axios.post(API__USERS, dataUser);

        return response

    } catch (e) {
        console.log(e)
    }
}

export const getProduct = async(setProducts: any) => {
    try {
        const response = await axios.get(API__PRODUCT);
        if(response) {
            setProducts(response.data)
        }

    } catch (e) {
        console.log(e)
    }
    
}

export const getUsers = async (setUsers: any) => {
    try {
        const response = await axios.get(API__USERS);
        if(response) {
            setUsers(response.data);
        }

    } catch (error) {
        console.log(error);
    }
};