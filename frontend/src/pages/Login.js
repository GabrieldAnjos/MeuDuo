import React, { useState } from "react";
import { useNavigate } from "react-router";

import styled, { css } from "styled-components";
import "../assets/fonts.css";

import { useDataLogin } from "../context/DataLogin";

import api from "../services/api";

import Logo from "../components/Logo";

import background from "../assets/Nunu_0.jpg";

import TextField from "@material-ui/core/TextField";
import AccountCircle from "@material-ui/icons/AccountCircleOutlined";
import Lock from "@material-ui/icons/LockOutlined";

const ContainerInput = styled.div`
  background-color: var(--white);
  border-radius: 10px;
  height: fit-content;
  width: fit-content;
  margin: 15px;
  padding: 8px;

  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    margin: 5px;
  }

  input {
    font-family: "Roboto", sans-serif;
    font-size: 15px;
    background-color: transparent;
    height: 40px;
    width: 200px;
    padding: 5px;
  }
`;

const ButtonLogin = styled.button`
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 15px;
  font-kerning: auto;
  color: white;
  background-color: gray;
  box-shadow: 0px 1px 2px #0008;
  border-radius: 5px;
  border: 0px;
  padding: 10px 20px;
  margin: 15px;
  transition: 0.5s;
  &:hover {
    box-shadow: 0px 1px 5px #0008;
    background-color: #d7553e;
  }
`;

const FormWraper = styled.div`
  /* background-color: #DDD; */
  border-radius: 10px;
  padding: 10px;
  position: fixed;
  top: 30%;
  left: 8%;
`;

const Underline = styled.div`
  background: gray;
  height: 4px;
  width: 100%;
  transition: 0.5s;
  padding: 0px;
`;

const UnderlineBar = styled.div`
  background: #7fe0f2;
  width: 0px;
  height: 100%;
  margin: 0px;
  transition: width 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  float: ${(props) => props.side};
`;

const ContainerLink = styled.div`
  margin: 15px;
  cursor: default;
  display: inline-block;
  &:hover {
    ${UnderlineBar} {
      width: 100%;
    }
    a {
      color: white;
    }
  }
  a {
    color: #ddd;
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
  }
`;

const BackFrame = styled.img`
  min-height: 100%;
  min-width: 100%;
  z-index: -1;
  margin: 0px;
  position: relative;
  margin-left: 50%;
  transform: translateX(-50%);
`;

const BackShadow = styled.div`
  background-image: linear-gradient(to right, #00000f 20%, #0000 40%);
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px;
`;

const Form = styled.form`
  border-radius: 5px;
  /* padding:10px; */
`;

export default function Login() {
  const navigate = useNavigate();

  const { setAuthentication } = useDataLogin();

  const [form, setForm] = useState({ username: "", password: "" });


  async function handleClickLogar(e) {
    e.preventDefault();
    const response = await api.post("/authenticate", {
      username: form.username,
      password: form.password,
    });

    const { token, _id } = response.data;
    setAuthentication({
      token: "Bearer ".concat(token),
      idUser: _id,
    });
    navigate("/user");
  }

  async function handleClickCadastrar(e) {
    e.preventDefault();
    navigate("/register");
  }

  return (
    <>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <BackShadow>
        <BackFrame src={background} />
      </BackShadow>
      <FormWraper>
        <ContainerLink>
          <a>Login</a>
          <Underline>
            <UnderlineBar side="right" />
          </Underline>
        </ContainerLink>

        <ContainerLink>
          <a onClick={handleClickCadastrar}>Cadastrar</a>
          <Underline>
            <UnderlineBar side="left" />
          </Underline>
        </ContainerLink>

        <Form>
          <ContainerInput>
            <AccountCircle />
            <TextField
              id="input-user"
              label="username"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              variant="outlined"
            />
          </ContainerInput>

          <ContainerInput>
            <Lock />
            <TextField
              id="input-pass"
              label="password"
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              variant="outlined"
            />
          </ContainerInput>

          <ButtonLogin onClick={handleClickLogar}>ENTRAR</ButtonLogin>
        </Form>
      </FormWraper>
    </>
  );
}
