import { useContext } from "react";
import { AuthProviderContext } from "../context/AuthProvider"

const useAuth = () =>  {
    const auth = useContext(AuthProviderContext)
    return auth;
}

export default useAuth;