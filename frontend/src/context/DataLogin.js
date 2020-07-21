import React, { createContext, useState, useContext } from 'react';
import { useEffect } from 'react';

const DataLoginContext = createContext();

export default function DataLoginProvider({ children }) {
    const [authentication, setAuthentication] = useState(() => {
        const localData = localStorage.getItem('authentication');
        return localData ? JSON.parse(localData) : {};
    });

    useEffect(() => {
        localStorage.setItem('authentication', JSON.stringify(authentication))
    }, [authentication]);

    return (
        <DataLoginContext.Provider
            value={{
                authentication,
                setAuthentication
                
            }}
            >
                {children}
        </DataLoginContext.Provider>
    );
}

export function useDataLogin() {
    const context = useContext(DataLoginContext);
    const { authentication, setAuthentication } = context;
    return { authentication, setAuthentication };
}