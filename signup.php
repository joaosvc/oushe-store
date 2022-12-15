<!DOCTYPE html>
<html lang="PT-BR">
<head>
    <meta charset="UTF-8    ">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/x-icon" href="img/favicon.ico">

    <!-- CSS -->
    <link rel="stylesheet" href="css/theme.css">
    <link rel="stylesheet" href="css/signup-style.css">
    
    <!-- JavaScript -->
    <script type="text/javascript" src="js/jquery.js"></script>
    <script type="module" src="js/checkCookie.js"></script>
    <script type="module" src="js/process-signup.js" type="text/css"></script>

    <title>Oushe - Criar sua Conta</title>
</head>
<body>
    <div class="main">
        <div class="container">
            <div class="content">
                <div class="title">
                    <span>Criar sua Conta Oushe</span>
                </div>
                <div class="all">
                    <form class="options" id="formContent">
                        <div class="concls name-cls">
                            <div class="itens">
                                <div class="option ref" id="option-name">
                                    <input type="text" name="name" id="name" placeholder="Nome">
                                </div>
                                <div class="option ref" id="option-lastname">
                                    <input type="text" name="lastname" id="lastname" placeholder="Sobrenome">
                                </div>   
                            </div>
                            <div class="errno"> 
                                <svg aria-hidden="true" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
                                <label for="name"></label>
                            </div>
                        </div>
                        <div class="concls email-cls">
                            <div class="itens">
                                <div class="option" id="option-email">
                                    <input type="e  mail" name="email" id="email" placeholder="Seu endereço de e-mail ">
                                </div>
                                <div class="errno"> 
                                    <svg aria-hidden="true" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
                                    <label for="email"></label>
                                </div>
                            </div>
                        </div>
                        <div class="create-new-email" id="create-new-email">
                            <span>Criar um novo endereço de E-mail?</span>
                        </div>
                        <div class="concls password-cls">
                            <div class="itens">
                                <div class="option ref" id="option-password">
                                    <input type="password" name="password" id="password" placeholder="Senha">
                                </div>
                                <div class="option ref" id="option-confirmPassword">
                                    <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirmar">
                                </div>      
                            </div>
                            <div class="errno"> 
                                <svg aria-hidden="true" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
                                <label for="password"></label>
                            </div>
                            <div class="option-desc">
                                <span>Use oito ou mais caracteres com uma combinação de letras, números e símbolos</span>
                            </div>
                        </div>
                        <div class="show-password">
                            <input type="checkbox" id="checkbox-password" name="checkbox-password">
                            <label for="checkbox-password">Mostrar senha</label>
                        </div>
                        <div class="buttons">
                            <a href="signin.php" id="signinAccount">Faça login em vez disso</a>
                            <input type="submit" id="next" value="Próxima">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</body>
</html>