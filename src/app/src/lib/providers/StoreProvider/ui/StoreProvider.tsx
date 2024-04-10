import { Provider } from "react-redux";

import { StateScheme } from "../config/StateScheme";
import { createReduxStore } from "../config/store";

interface StoreProviderProps {
    children?: React.ReactNode;
    initialState?: StateScheme
}

export const StoreProvider = (props:StoreProviderProps) => {
    const {children, initialState} = props;
    const store = createReduxStore(initialState);
    
    return (<Provider store={store}>{children}</Provider>)
}
