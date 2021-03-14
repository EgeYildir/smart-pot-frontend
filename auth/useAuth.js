import { useContext } from 'react'
import AuthContext from './context'
import authStorage from './storage'
import jwtDecode from 'jwt-decode'

export default function useAuth(){
    const { user, setUser } = useContext(AuthContext);

    const logout = () => {
        setUser(null);
        authStorage.removeToken();
    }

    //Both authApi (/api/auth.js) and useAuth (/auth/useAuth.js) include login functions. However 
    // these two serve different purposes. Login in authApi only posts the email and password. 
    //Login in useAuth function stores the user to preserve state.
    const login = (authToken) => {
        try {
            const user = jwtDecode(authToken);
            setUser(user);
            authStorage.storeToken(authToken);
        } catch (error) {
            console.log("Error logging in: " + error);
        }        
    }

    return { user, login, logout };
}