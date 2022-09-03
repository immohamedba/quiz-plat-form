import { AuthConext } from "../context/AuthContext"
import { useContext } from "react";


export const useAuthContext = () => {
    const context = useContext(AuthConext);

    if (!context) {
        throw Error('useAuthContext must be used inside an AuthContextProvider')
    }
    return context;
}
