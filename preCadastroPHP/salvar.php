<?php

require_once 'conexao.php';

if (isset($_POST['btn_salvar'])) {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $idade = $_POST['idade'];
    $pergunta1 = 0;
    $pergunta2 = 0;
    $pergunta3 = 0;
    $pergunta4 = 0;
    if(isset($_POST['pergunta1'])) { $pergunta1 = $_POST['pergunta1']; } 
    if(isset($_POST['pergunta2'])) { $pergunta2 = $_POST['pergunta2']; } 
    if(isset($_POST['pergunta3'])) { $pergunta3 = $_POST['pergunta3']; } 
    if(isset($_POST['pergunta4'])) { $pergunta4 = $_POST['pergunta4']; } 
    $sugestao = $_POST['sugestao'];

    $sql = "INSERT INTO pesquisa (nome, email, idade, pergunta1, pergunta2, pergunta3, pergunta4, sugestao) VALUES (:nome, :email, :idade, :pergunta1, :pergunta2, :pergunta3, :pergunta4, :sugestao) ";

    $stmt  = $PDO->prepare($sql);

    $stmt->bindParam(':nome', $nome);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':idade', $idade);
    $stmt->bindParam(':pergunta1', $pergunta1);
    $stmt->bindParam(':pergunta2', $pergunta2);
    $stmt->bindParam(':pergunta3', $pergunta3);
    $stmt->bindParam(':pergunta4', $pergunta4);
    $stmt->bindParam(':sugestao', $sugestao);


    if ($stmt->execute()) {
        header('Location: conclusao.php');
    } else {
        header('Location: index.php');
    }
}
