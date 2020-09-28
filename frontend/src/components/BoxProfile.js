import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Notification from '@material-ui/icons/NotificationsOutlined'
import ExitToApp from '@material-ui/icons/ExitToAppOutlined'

//Serviços
import api from '../services/api';
import { useDataLogin } from '../context/DataLogin';

//Componentes
import BigProfile from '../components/BigProfile';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-content: flex-start;
    justify-content: space-around;
    margin: 10px;
    color: white;
    
`

const Exit = styled(ExitToApp)`
    color: white;
`

const Profile = styled.div`
    width: 150px;
    height: 150px;
`

export default function BoxProfile({ history }) {

    const [user, setUser] = useState({});

    const { authentication, setAuthentication } = useDataLogin();

    useEffect(() => {
        async function loadUser() {
            const response = await api.get('/user/profile', {
                headers: {
                    authorization: authentication.token,
                }
            })
            setUser(response.data);
        }
        loadUser();

    }, [authentication]);

    function handleLogout() {
        setAuthentication({});
    }

    return (
        <Container>
            <Notification />
            <Profile>
                <Link to="/profile">
                    <BigProfile profileIconId={user.profileIconId} username={user.username}></BigProfile>
                </Link>
            </Profile>
            <Link to="/">
                <Exit/>
            </Link>
        </Container>
    );
}