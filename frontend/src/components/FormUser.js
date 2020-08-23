import React, { useState } from 'react';
import './FormUser.css';
//Componentes
import ChampionSelector from "../components/ChampionSelector";
import RouteSelector from "../components/RouteSelector";
import { useEffect } from 'react';

export default function FormUser({ onSave, formStateParent }) {

    const [focus, setFocus] = useState('');
    const [form, setForm] = useState({
        username: '',
        password: '',
        password2: '',
        email: '',
        userInstagram: '',
        age: '',
        route: 'Todas as Rotas',
        route2: 'Todas as Rotas',
        champion: '',
        champion2: '',
        champion3: ''
    });

    function handleSubmit(e) {
        e.preventDefault();
        if (onSave) {
            try {
                console.log(form);
                onSave(form)
            }
            catch (error) {
                console.error("Erro callback invalido" + error)
            }
        }
    }

    useEffect(() => { setForm(formStateParent) }, [formStateParent]);

    return (
        <div className="formUser-container">
            <form onSubmit={handleSubmit}>
                <input
                    name="username"
                    placeholder="Digite seu nome de Invocador"
                    defaultValue={form.username}
                    onChange={e => setForm({ ...form, username: e.target.value })}
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Digite sua Senha"
                    defaultValue={form.password}
                    onChange={e => setForm({ ...form, password: e.target.value })}
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Confirme sua Senha"
                    defaultValue={form.password}
                    onChange={e => setForm({ ...form, password: e.target.value })}
                />
                <input
                    name="email"
                    placeholder="Digite seu E-mail"
                    defaultValue={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                />
                <input
                    name="userInstagram"
                    placeholder="Digite seu Instagram"
                    defaultValue={form.userInstagram}
                    onChange={e => setForm({ ...form, userInstagram: e.target.value })}
                />
                <input
                    name="age"
                    placeholder="Digite sua Idade"
                    defaultValue={form.age}
                    onChange={e => setForm({ ...form, age: e.target.value })}
                />
                <input
                    onFocus={() => { setFocus('champion') }}
                    name="champion"
                    placeholder="Digite o nome do Campeão"
                    value={form.champion}
                    onChange={e => setForm({ ...form, champion: e.target.value })}
                />
                {form.champion !== '' ? (
                    <input
                        onFocus={() => { setFocus('champion2') }}
                        name="champion2"
                        placeholder="Digite o nome do campeão"
                        value={form.champion2}
                        onChange={e => setForm({ ...form, champion2: e.target.value })}
                    />
                ) : null}

                {form.champion2 !== '' ? (
                    <input
                        onFocus={() => { setFocus('champion3') }}
                        name="champion3"
                        placeholder="Digite o nome do campeão"
                        value={form.champion3}
                        onChange={e => setForm({ ...form, champion3: e.target.value })}
                    />
                ) : null}

                {(() => {
                    if (form.champion === '' || focus === 'champion') {
                        return <ChampionSelector searchingName={form.champion} onSelection={name => setForm({ ...form, champion: name })}></ChampionSelector>
                    }
                    else if ((form.champion !== '' && form.champion2 === '') || focus === 'champion2') {
                        return <ChampionSelector searchingName={form.champion2} onSelection={name => setForm({ ...form, champion2: name })}></ChampionSelector>
                    }
                    else if (form.champion2 !== '' || focus === 'champion3') {
                        return <ChampionSelector searchingName={form.champion3} onSelection={name => setForm({ ...form, champion3: name })}></ChampionSelector>
                    }

                }
                )()}

                <RouteSelector routeDatas={form.route} name='route' onSelection={route => setForm({ ...form, route: route })}></RouteSelector>
                {form.route !== 'Todas as Rotas' ? (
                    <RouteSelector routeDatas={form.route2} name='route2' onSelection={route => setForm({ ...form, route2: route })}></RouteSelector>
                ) : null}


                <button type="submit" >Salvar</button>
            </form>

        </div>
    );

}