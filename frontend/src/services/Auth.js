import React from 'react';
import api from './api';

import { useDataLogin } from '../context/DataLogin';
import { useState, useEffect } from 'react';

export default function Auth({ isAuth }) {
    const { authentication } = useDataLogin();
    const [log, setLog] = useState(false);

    useEffect(() => {
        async function auth(res) {
            try {
                await api.get('/authenticate', {
                    headers: {
                        authorization: authentication.token,
                    }
                })
                setLog(true);

            } catch {}
        }
        auth();

    }, [authentication]);

    isAuth(log);

    return (<></>);
}