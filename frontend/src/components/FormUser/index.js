import React, { useState } from 'react';
import { Container, Form, ChampsContainer, SubTitle, RoutesContainer, Button } from './styles';


//Componentes
import ChampionSelector from "../ChampionSelector";
import RouteSelector from "../RouteSelector";
import { useEffect } from 'react';

import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const CssTextField = withStyles({
    root: {

        '& input': {
            color: 'white',
            width: 485,
        },
        '& label': {
            color: 'white',
        },
        '& label.Mui-focused': {
            color: '#48ECFF',
        },
        '& .MuiOutlinedInput-root': {
            marginBottom: 22,
            '& fieldset': {
                borderColor: "white",
            },
            '&:hover fieldset': {
                borderColor: 'grey',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#48ECFF',
            },
        },
    },
})(TextField);



export default function FormUser({ onSave, formStateParent }) {


    const [focus, setFocus] = useState('');
    const [form, setForm] = useState({
        username: '',
        password: '',
        password2: '',
        email: '',
        userInstagram: '',
        age: '',
        route: 'Nenhuma',
        route2: 'Nenhuma',
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
        <Container>
            <Form onSubmit={handleSubmit}>
                <CssTextField
                    variant="outlined"
                    id="custom-css-filled-input"
                    color="primary"
                    label="Nome Invocador"
                    name="username"
                    defaultValue={form.username}
                    onChange={e => setForm({ ...form, username: e.target.value })}
                />
                <CssTextField
                    variant="outlined"
                    id="custom-css-outlined-input"
                    label="Senha"
                    name="password"
                    type="password"
                    placeholder="Digite sua Senha"
                    defaultValue={form.password}
                    onChange={e => setForm({ ...form, password: e.target.value })}
                />
                <CssTextField
                    variant="outlined"
                    id="custom-css-outlined-input"
                    label="Confirmação Senha"
                    name="password"
                    type="password"
                    placeholder="Confirme sua Senha"
                    defaultValue={form.password}
                    onChange={e => setForm({ ...form, password: e.target.value })}
                />
                <CssTextField
                    variant="outlined"
                    id="custom-css-outlined-input"
                    type=" E-mail"
                    label="E-mail"
                    name="email"
                    placeholder="Digite seu E-mail"
                    defaultValue={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                />
                <CssTextField
                    variant="outlined"
                    id="custom-css-outlined-input"
                    label="Instagram"
                    name="userInstagram"
                    placeholder="Digite seu Instagram"
                    defaultValue={form.userInstagram}
                    onChange={e => setForm({ ...form, userInstagram: e.target.value })}
                />
                <CssTextField
                    variant="outlined"
                    id="custom-css-outlined-input"
                    type="Number"
                    label="Idade"
                    name="age"
                    placeholder="Digite sua Idade"
                    defaultValue={form.age}
                    onChange={e => setForm({ ...form, age: e.target.value })}
                />
                <ChampsContainer>
                    <CssTextField
                        variant="outlined"
                        id="custom-css-outlined-input"
                        onFocus={() => { setFocus('champion') }}
                        label="Campeão Principal"
                        name="champion"
                        placeholder="Digite o nome do Campeão"
                        value={form.champion}
                        onChange={e => setForm({ ...form, champion: e.target.value })}
                    />
                    {form.champion !== '' ? (
                        <CssTextField
                            variant="outlined"
                            id="custom-css-outlined-input"
                            onFocus={() => { setFocus('champion2') }}
                            label="Segundo Campeão"
                            name="champion2"
                            placeholder="Digite o nome do campeão"
                            value={form.champion2}
                            onChange={e => setForm({ ...form, champion2: e.target.value })}
                        />
                    ) : null}

                    {form.champion2 !== '' ? (
                        <CssTextField
                            variant="outlined"
                            id="custom-css-outlined-input"
                            onFocus={() => { setFocus('champion3') }}
                            label="Terceiro Campeão"
                            name="champion3"
                            placeholder="Digite o nome do campeão"
                            value={form.champion3}
                            onChange={e => setForm({ ...form, champion3: e.target.value })}
                        />
                    ) : null}

                </ChampsContainer>

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
                <SubTitle>Escolha suas Rotas:</SubTitle>  
                <RoutesContainer>

                    <RouteSelector routeDatas={form.route} name='route' onSelection={route => setForm({ ...form, route: route })}></RouteSelector>
                    {form.route !== 'Nenhuma' ? (
                        <RouteSelector routeDatas={form.route2} name='route2' onSelection={route => setForm({ ...form, route2: route })}></RouteSelector>
                    ) : null}

                </RoutesContainer>
                <Button type="submit" >Confirmar</Button>
            </Form>

        </Container>
    );

}