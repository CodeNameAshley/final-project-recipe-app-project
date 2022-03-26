import { createContext, useContext } from "react";

const AuthenticationContext = createContext();

export const useAuthentication = () => useContext(AuthenticationContext)

const AuthenticationProvider = ({children}) => {
const value = {
    isAuthenticated: false,  
};

return(
    <AuthenticationContext.Provider value={value}>
    {children}
    </AuthenticationContext.Provider>
) 
};

export default AuthenticationProvider;