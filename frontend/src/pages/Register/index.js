import { Background, Container, Title } from "./styles.js";
import React, { useState } from "react";
import { useNavigate } from "react-router";

//Serviços
import api from "../../services/api";
//Componentes
import FormUser from "../../components/FormUser";
import Header from "../../components/Header";

//imagens

export default function Register() {

  const navigate = useNavigate();

  const [form] = useState({
    username: "",
    password: "",
    password2: "",
    email: "",
    userInstagram: "",
    age: "",
    route: "Nenhuma",
    route2: "Nenhuma",
    champion: "",
    champion2: "",
    champion3: "",
  });

  async function handleSubmit(formStateChild) {
    await api.post("/user", {
      username: formStateChild.username,
      summonerName: formStateChild.username,
      password: formStateChild.password,
      email: formStateChild.email,
      instagram: formStateChild.userInstagram,
      age: formStateChild.age,
      route: formStateChild.route,
      route2: formStateChild.route2,
      champion: formStateChild.champion,
      champion2: formStateChild.champion2,
      champion3: formStateChild.champion3,
    });
    
    navigate("/");
  }

  return (
    <Background>
      <Container>
        <Header arrowBack />

        <Title>Registre-se</Title>
        <FormUser formStateParent={form} onSave={handleSubmit}></FormUser>
      </Container>
    </Background>
  );
}
