import { useEffect, useState } from "react";
import { getUsers } from "../services";
import { IDataUsers } from "../interfaces";

const useUser = () => {
    const [users, setUsers] = useState<IDataUsers[]>([]);

    const changeUsers = (usersData: IDataUsers[] ) => {
        setUsers(usersData)
    }

    useEffect(() => {
        getUsers(changeUsers);
    }, [setUsers]);

    return {
        users
    };
};

export default useUser;