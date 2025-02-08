import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

function AuthProvider({ children }) {
    const User = localStorage.getItem("User")
    const [authUser, setAuthUser] = useState(
        User ? JSON.parse(User) : undefined
    );

    return (
        <AuthContext.Provider value={{ authUser, setAuthUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
