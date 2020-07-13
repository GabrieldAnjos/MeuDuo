<?php
    try {
        
        $HOST = "localhost";
        $BANCO = "meuduoco_bd";
        $USUARIO = "meuduoco_root";
        $SENHA = "meuduo92247660";

        $PDO = new PDO("mysql:host=" . $HOST . ";dbname=" . $BANCO . ";charset=utf8", $USUARIO, $SENHA);
    
    } catch (PDOException $erro) {
        echo "Erro de conexao, detalhes: " . $erro->getMessage();
    }

?>