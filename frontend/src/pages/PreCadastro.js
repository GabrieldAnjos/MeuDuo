import React from 'react';

import './PreCadastro.css';

import introLink from '../assets/introLink.svg';
import logoLink from '../assets/logoLink.svg';
import parceiro1 from '../assets/parceiro1.svg';
import parceiro2 from '../assets/parceiro2.svg';

export default function PreCadastro() {
    return (

        <div className="preCadastro-container">
            <section className="esquerda">
                <h1>Só precisamos de alguns dados</h1>
                <form >
                    <input type="text" placeholder="Nome" />
                    <input type="text" placeholder="E-mail (Apenas para notificação do lançamento)" />
                    <input id="idade" type="text" placeholder="Idade" />
                    <h4>Quantas estrelas vc dari pelo seu motivo de usar o Meu Duo? Para encontrar alguém que...</h4>
                    <div id="afirmacoes">
                        <p>Faça o guindaste subir ou a chuva molhar a terra</p>
                        <section id="rate" class="rating">
                            <input type="radio" id="sstar_5" name="rate1" value="5" />
                            <label for="sstar_5" title="Five">&#9733;</label>

                            <input type="radio" id="sstar_4" name="rate1" value="4" />
                            <label for="sstar_4" title="Four">&#9733;</label>

                            <input type="radio" id="sstar_3" name="rate1" value="3" />
                            <label for="sstar_3" title="Three">&#9733;</label>

                            <input type="radio" id="sstar_2" name="rate1" value="2" />
                            <label for="sstar_2" title="Two">&#9733;</label>

                            <input type="radio" id="sstar_1" name="rate1" value="1" />
                            <label for="sstar_1" title="One">&#9733;</label>
                        </section>

                        <p>Tenha aquele plano infalível para darem gg aos 20min</p>
                        <section id="rate" class="rating">

                            <input type="radio" id="sttar_5" name="rate2" value="5" />
                            <label for="sttar_5" title="Five">&#9733;</label>

                            <input type="radio" id="sttar_4" name="rate2" value="4" />
                            <label for="sttar_4" title="Four">&#9733;</label>

                            <input type="radio" id="sttar_3" name="rate2" value="3" />
                            <label for="sttar_3" title="Three">&#9733;</label>

                            <input type="radio" id="sttar_2" name="rate2" value="2" />
                            <label for="sttar_2" title="Two">&#9733;</label>

                            <input type="radio" id="sttar_1" name="rate2" value="1" />
                            <label for="sttar_1" title="One">&#9733;</label>
                        </section>

                        <p>Perdoe suas nobagens assim como você perdoa as dela</p>
                        <section id="rate" class="rating">

                            <input type="radio" id="staar_5" name="rate3" value="5" />
                            <label for="staar_5" title="Five">&#9733;</label>

                            <input type="radio" id="staar_4" name="rate3" value="4" />
                            <label for="staar_4" title="Four">&#9733;</label>

                            <input type="radio" id="staar_3" name="rate3" value="3" />
                            <label for="staar_3" title="Three">&#9733;</label>

                            <input type="radio" id="staar_2" name="rate3" value="2" />
                            <label for="staar_2" title="Two">&#9733;</label>

                            <input type="radio" id="staar_1" name="rate3" value="1" />
                            <label for="staar_1" title="One">&#9733;</label>
                        </section>

                        <p>Te acompanhe naquela dive suicida spamando maestria igual maluco</p>
                        <section id="rate" class="rating">

                            <input type="radio" id="starr_5" name="rate" value="5" />
                            <label for="starr_5" title="Five">&#9733;</label>

                            <input type="radio" id="starr_4" name="rate" value="4" />
                            <label for="starr_4" title="Four">&#9733;</label>

                            <input type="radio" id="starr_3" name="rate" value="3" />
                            <label for="starr_3" title="Three">&#9733;</label>

                            <input type="radio" id="starr_2" name="rate" value="2" />
                            <label for="starr_2" title="Two">&#9733;</label>

                            <input type="radio" id="starr_1" name="rate" value="1" />
                            <label for="starr_1" title="One">&#9733;</label>
                        </section>
                    </div>

                    <textarea name="" id="" cols="80" rows="10" placeholder="Tem alguma ideia ou sugestao?                                   Fala pra gente, somos todo ouvidos :)"></textarea>
                    <button>Enviar</button>
                </form>
            </section>
            <section className="direita">
                <header>
                    <img id="intro" src={introLink} alt="" />
                </header>
                <main>
                    <img id="logo" src={logoLink} alt="" />
                </main>
                <footer>
                    <div id="parceiros">
                        <h1>Parceiros</h1>
                        <img   src={parceiro1}  alt="" />
                        <img   src={parceiro2}  alt=""/>
                    </div>
                </footer>
            </section>
        </div>
    );
}
