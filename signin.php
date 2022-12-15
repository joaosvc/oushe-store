<!DOCTYPE html>
<html lang="PT-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/x-icon" href="img/favicon.ico">

    <!-- CSS -->
    <link rel="stylesheet" href="css/theme.css">
    <link rel="stylesheet" href="css/signin-style.css">
    
    <!-- JavaScript -->
    <script type="text/javascript" src="js/jquery.js" type="text/css"></script>
    <script type="module" src="js/checkCookie.js"></script>
    <script type="module" src="js/process-signin.js" type="text/css"></script>

    <title>Oushe - Fazer login</title>
</head>
<body>
    <div class="main">
        <div class="container">
            <div class="content">
                <div class="title">
                    <h1>Fazer Login</h1>
                </div>
                <div class="subtitle">
                    <span>Use sua Conta da Oushe</span>
                </div>
                <div class="all">
                    <form class="options" id="formContent">   
                        <div class="concls email-cls">
                            <div class="itens">
                                <div class="option" id="option-email">
                                    <input type="email" name="email" id="email" placeholder="Seu endereço de e-mail ">
                                </div>
                                <div class="errno"> 
                                    <svg fill="currentColor" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
                                    <label for="email"></label>
                                </div>
                            </div>
                        </div>
                        <div class="concls password-cls">
                            <div class="itens">
                                <div class="option" id="option-password">
                                    <input type="password" name="password" id="password" placeholder="Senha">
                                </div> 
                            </div>
                            <div class="errno"> 
                                <svg fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
                                <label for="password"></label>
                            </div>
                        </div>
                        <div class="show-password">
                            <input type="checkbox" id="checkbox-password" name="checkbox-password">
                            <label for="checkbox-password">Mostrar senha</label>
                        </div>
                        <div class="forgot-email" id="forgot-email">
                            <span>Esqueceu seu email?</span>
                        </div>
                        <div class="buttons">
                            <a href="signup.php" id="createAccount">Criar conta</a>
                            <input type="submit" id="next" value="Avançar">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</body>
</html>