import { createContext, useState, useEffect, useContext, useRef } from "react";
import { account } from "../appwriteConfig";
import { ID } from 'appwrite';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        checkUserStatus();
    }, []);

    const loginUser = async (userInfo) => {
        setLoading(true);

        console.log('userInfo',userInfo)

        try {
            let response = await account.createEmailSession(userInfo.email, userInfo.password);
            let accountDetails = await account.get();
            setUser(accountDetails);
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    };

    const logoutUser = async () => {
        await account.deleteSession('current');
        setUser(null);
    };

    const registerUser = async (userInfo, onSuccess) => {
        setLoading(true);
        try {
            let response = await account.create(ID.unique(), userInfo.email, userInfo.password1, userInfo.name);

            await account.create(ID.unique(), userInfo.email, userInfo.password1, userInfo.name);
            await account.createEmailSession(userInfo.email, userInfo.password1);
            let accountDetails = await account.get();
            setUser(accountDetails);
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    };

    const checkUserStatus = async () => {
        try {

            let response = await account.create(ID.unique(), userInfo.email, userInfo.password1, userInfo.name);
        
            await account.createEmailSession(userInfo.email, userInfo.password1)
            let accountDetails = await account.get();
            setUser(accountDetails);
        } catch (error) {
            // Handle error if needed
        }
        setLoading(false);
    };

    const contextData = {
        user,
        loginUser,
        logoutUser,
        registerUser
    };

    return (
        <AuthContext.Provider value={contextData}>
            {loading ? <p>Loading...</p> : children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
