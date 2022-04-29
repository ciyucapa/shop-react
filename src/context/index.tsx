import {createContext} from "react";
import {AppContextProps} from '../interfaces'

const AppContext = createContext<AppContextProps>({});

export default AppContext;
