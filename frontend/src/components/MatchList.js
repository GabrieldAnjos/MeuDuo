import React, {useState} from 'react';
import styled from 'styled-components'

//Componentes
import MiniProfile from '../components/MiniProfile';
import Search from '@material-ui/icons/Search'

const Container = styled.div`
    padding: 5px;
    margin: 0px;
    width: 100%;
    
`
const ContainerBusca = styled.div`
    height: 25px;
    margin-left: 10%;
    margin-right: 10%;

    background: white;
    border-radius: 30px;
    box-sizing: border-box;
    padding: 5px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    color: #333;

    input{
        margin-left: 5%;
        margin-right: 5%;
        background:transparent;
        border:none;
        font-family: 'Montserrat', sans-serif;

    }
`

const List = styled.div`
    width: 100%;
    margin-top: 5px;
    height: 50vh;
    overflow-y: scroll;
    border-bottom: 2px solid gray;
    li{ 
        border-radius: 10px;
        cursor: pointer;
        &:hover{
            background: #FFF1;
        }
    }
`

export default function MatchList({ matchList, chatFriendsId }) {
    const [nameDuo, setNameDuo] = useState('');

    function handleClick(idFriend) {
        chatFriendsId(idFriend);
    }

    return (
        <Container>
            <ContainerBusca>
                <Search/>
                <input
                    name="nameDuo"
                    placeholder="Pesquisar"
                    defaultValue={nameDuo}
                    onChange={e => setNameDuo(e.target.value.toLowerCase())}
                    />
            </ContainerBusca>
            <List>
            {
                matchList.length > 0 ?
                    (<ul>
                        {matchList.filter(m => m.username.toLowerCase().includes(nameDuo)).map(m => (
                            <li key={m._id} onClick={() => handleClick(m._id)}>
                                <MiniProfile profileIconId={m.profileIconId} username={m.username} ></MiniProfile>
                            </li>
                        ))}
                    </ul>
                    ) : (<p>Dê um like!</p>)
            }
            </List>
           
        </Container>
    );
}