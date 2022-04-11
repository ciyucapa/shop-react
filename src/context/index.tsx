import {createContext} from "react";

interface AppContextProps {
    state?: any
    addCart?: any
}

const AppContext = createContext<AppContextProps>({});

export default AppContext;