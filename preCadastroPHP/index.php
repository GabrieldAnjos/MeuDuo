<!DOCTYPE html>

<html>

<head>
    <meta charset="UTF-8">
    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@515&family=Ubuntu:wght@300;400&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="css/index.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="data_check.js"></script>
</head>



<body>




    <div class="preCadastro-container">
        <section class="esquerda">

            <h1>Concorra a prêmios no dia do lançamento</h1>

            <form method="post" action="salvar.php">

                <input name="nome" id="nome" type="text" placeholder="Nome" />

                <input name="email" id="email" type="text" placeholder="E-mail (Só aviso do lançamento)" />

                <input name="idade" id="idade" type="number" min="5" max="100" placeholder="Idade" />

                <h4>Quantas estrelas vc daria pelo seu motivo de usar o Meu Duo? Para encontrar alguém que...</h4>

                <div id="afirmacoes">

                    <p>Perdoe suas noobagens assim como você perdoa as dela</p>

                    <section id="pergunta1" class="rating">

                        <input type="radio" id="sstar_5" name="pergunta1" value="5" />

                        <label for="sstar_5">&#9733;</label>



                        <input type="radio" id="sstar_4" name="pergunta1" value="4" />

                        <label for="sstar_4">&#9733;</label>



                        <input type="radio" id="sstar_3" name="pergunta1" value="3" />

                        <label for="sstar_3">&#9733;</label>



                        <input type="radio" id="sstar_2" name="pergunta1" value="2" />

                        <label for="sstar_2">&#9733;</label>



                        <input type="radio" id="sstar_1" name="pergunta1" value="1" />

                        <label for="sstar_1">&#9733;</label>

                    </section>



                    <p>Tenha aquele plano infalível para darem gg aos 20min</p>

                    <section id="pergunta2" class="rating">



                        <input type="radio" id="sttar_5" name="pergunta2" value="5" />

                        <label for="sttar_5">&#9733;</label>



                        <input type="radio" id="sttar_4" name="pergunta2" value="4" />

                        <label for="sttar_4">&#9733;</label>



                        <input type="radio" id="sttar_3" name="pergunta2" value="3" />

                        <label for="sttar_3">&#9733;</label>



                        <input type="radio" id="sttar_2" name="pergunta2" value="2" />

                        <label for="sttar_2">&#9733;</label>



                        <input type="radio" id="sttar_1" name="pergunta2" value="1" />

                        <label for="sttar_1">&#9733;</label>

                    </section>

                    <p>Te acompanhe naquela dive suicida spamando maestria igual maluco</p>

                    <section id="pergunta3" class="rating">



                        <input type="radio" id="staar_5" name="pergunta3" value="5" />

                        <label for="staar_5">&#9733;</label>



                        <input type="radio" id="staar_4" name="pergunta3" value="4" />

                        <label for="staar_4">&#9733;</label>



                        <input type="radio" id="staar_3" name="pergunta3" value="3" />

                        <label for="staar_3">&#9733;</label>



                        <input type="radio" id="staar_2" name="pergunta3" value="2" />

                        <label for="staar_2">&#9733;</label>



                        <input type="radio" id="staar_1" name="pergunta3" value="1" />

                        <label for="staar_1">&#9733;</label>

                    </section>

                    <p>Dê aquele belo trato ͡° ͜ʖ ͡° na sua skin</p>

                    <section id="pergunta4" class="rating">



                        <input type="radio" id="starr_5" name="pergunta4" value="5" />

                        <label for="starr_5">&#9733;</label>



                        <input type="radio" id="starr_4" name="pergunta4" value="4" />

                        <label for="starr_4">&#9733;</label>



                        <input type="radio" id="starr_3" name="pergunta4" value="3" />

                        <label for="starr_3">&#9733;</label>



                        <input type="radio" id="starr_2" name="pergunta4" value="2" />

                        <label for="starr_2">&#9733;</label>



                        <input type="radio" id="starr_1" name="pergunta4" value="1" />

                        <label for="starr_1">&#9733;</label>

                    </section>

                </div>



                <textarea name="sugestao" id="sugestao" cols="80" rows="10" placeholder="Tem alguma ideia ou sugestão?                                   Fala pra gente, somos todo ouvidos :)"></textarea>

                <button disabled="true" id="btn_enviar" class="curtaindown_blocked" type="submit" name="btn_salvar">Enviar</button>

            </form>

        </section>

        <section class="direita">

            <header>

                <img id="intro" src="assets/introLink.svg" alt="" />

            </header>

            <main>

                <img id="logo" src="assets/logoLink.svg" alt="" />

            </main>

            <footer>

                <div id="parceiros">

                    <h1>Parceiros</h1>

                    <a href="https://www.youtube.com/playeronegames"> <img title="PlayerOneGames" src="assets/parceiro1.svg" alt="PlayerOneGames"></a>

                    <a href="https://www.facebook.com/groups/IDFOficial/"> <img title="IlhaDeFreljord" src="assets/parceiro2.svg" alt="IlhaDeFreljord"></a>

                </div>

            </footer>

        </section>



    </div>



</body>

</html>