import { useEffect, useState } from "react";
import { getUsers } from "../services";
import { IDataUsers } from "../interfaces";

const useUser = () => {
    const [users, setUsers] = useState<IDataUsers[]>([]);

    useEffect(() => {
        getUsers(setUsers);
    }, [setUsers]);

    return {
        users
    };
};

export default useUser;