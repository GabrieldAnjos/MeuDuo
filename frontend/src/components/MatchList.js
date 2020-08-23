import './MatchList.css';
import React, {useState} from 'react';

//Componentes
import MiniProfile from '../components/MiniProfile';

export default function MatchList({ matchList, chatFriendsId }) {
    const [nameDuo, setNameDuo] = useState('');

    function handleClick(idFriend) {
        chatFriendsId(idFriend);
    }

    return (
        <div className="matchList-container">
            <h1>Duos:</h1>
            <input
                name="nameDuo"
                placeholder="Pesquisar"
                defaultValue={nameDuo}
                onChange={e => setNameDuo(e.target.value)}
            />
            {
                matchList.length > 0 ?
                    (<ul>
                        {matchList.filter(m => m.username.includes(nameDuo)).map(m => (
                            <li key={m._id} onClick={() => handleClick(m._id)}>
                                <MiniProfile profileIconId={m.profileIconId} username={m.username} ></MiniProfile>
                            </li>
                        ))}
                    </ul>
                    ) : (<p>Dê um Like</p>)
            }
        </div>
    );
}