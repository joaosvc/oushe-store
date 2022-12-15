<!DOCTYPE html>
<html lang="PT-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/x-icon" href="img/favicon.ico">

    <!-- CSS -->
    <link rel="stylesheet" href="css/theme.css">
    <link rel="stylesheet" href="css/main-page-style.css">

    <!-- JavaScript -->
    <script type="text/javascript" src="js/jquery.js"></script>
    <script type="module" src="js/mainPage.js"></script>
    <title>Oushe - Store</title>
</head>
<body>
    <div class="load-page">
        <div class="spinner">
            <div></div><div></div><div></div><div></div>
        </div>
    </div>

    <div class="main">
        <div class="header">
            <div class="content">
                <div class="oushe">
                    <div class="logo">
                        <img src="img/favicon.ico" alt="Oushe Store Logo">
                    </div>
                    <div class="title">
                        <h3>oushe store</h3>
                    </div>
                </div>
                <div class="user">
                    <div class="profile">
                        <img class="user-profile" src="./img/default-profile.png" accept="image/png, image/jpeg, image/gif" alt="Perfil">
                    </div>
                    <div class="user-name">
                        <span></span>
                    </div>
                </div>
            </div>
        </div>

        <div class="contents">
            <div class="nav">
                <div class="search">
                    <svg class="search-icon" viewBox="0 0 30 30" width="30px" height="30px"><path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"/></svg>
                    <input class="search-input" type="text" value="" maxlength="300" autocomplete="on" placeholder="Pesquisar a loja" aria-autocomplete="both" aria-owns="store-search-suggestions" aria-label="Pesquisar a loja" required>
                    <svg class="clear-search" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve"><g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" ><path d="M 6 90 c -1.536 0 -3.071 -0.586 -4.243 -1.758 c -2.343 -2.343 -2.343 -6.142 0 -8.484 l 78 -78 c 2.342 -2.343 6.143 -2.343 8.484 0 c 2.344 2.343 2.344 6.142 0 8.485 l -78 78 C 9.071 89.414 7.536 90 6 90 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /><path d="M 84 90 c -1.535 0 -3.071 -0.586 -4.242 -1.758 l -78 -78 c -2.343 -2.343 -2.343 -6.142 0 -8.485 c 2.343 -2.343 6.143 -2.343 8.485 0 l 78 78 c 2.344 2.343 2.344 6.142 0 8.484 C 87.071 89.414 85.535 90 84 90 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /></g></svg> 
                    <div class="search-itens"></div>
                </div>
                <div class="announce">
                    <div class="title">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="menu-2"><circle cx="4" cy="12" r="1"/><rect width="14" height="2" x="7" y="11" rx=".94" ry=".94"/><rect width="18" height="2" x="3" y="16" rx=".94" ry=".94"/><rect width="18" height="2" x="3" y="6" rx=".94" ry=".94"/></g></g></svg>
                        <span>Anuncios</span>
                    </div>
                    <div class="announce-manager">
                        <div class="item create-announce">
                        <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 67.733 67.733"><path d="M18.094 231.519c-8.73 0-15.841 7.112-15.841 15.842v31.545c0 8.73 7.11 15.842 15.841 15.842h31.545c8.73 0 15.842-7.112 15.842-15.842V247.36c0-8.73-7.112-15.842-15.842-15.842zm0 5.293h31.545c5.89 0 10.55 4.659 10.55 10.549v31.545c0 5.89-4.66 10.548-10.55 10.548H18.094c-5.89 0-10.549-4.658-10.549-10.548V247.36c0-5.89 4.659-10.549 10.549-10.549zm16.395 8.068a2.646 2.646 0 0 0-2.608 2.682v12.752h-12.75a2.646 2.646 0 1 0 0 5.29h12.75v12.75a2.647 2.647 0 1 0 5.293 0v-12.75h12.75a2.646 2.646 0 1 0 0-5.29h-12.75v-12.752a2.646 2.646 0 0 0-2.685-2.682z" color="#000" font-family="sans-serif" font-weight="400" overflow="visible" transform="translate(0 -229.267)" style="line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;text-orientation:mixed;shape-padding:0;isolation:auto;mix-blend-mode:normal"/></svg>
                            <button>Anunciar um Produto</button>
                        </div>
                        <div class="item view-posts">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M8 19h8c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v13c0 .55.45 1 1 1zm-5-2h2c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1zM18 7v9c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1z"/></svg>
                            <button>Seus Anuncios</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="center">
                <div class="body">
                </div>
            </div>
        </div>

        <!-- MODALS -->
        <div class="modal" id="profileModal">
            <div class="head">
                <div class="title">
                    <span>Atualizar Perfil</span>
                </div>
                <div class="close" id="cancel">
                    <span></span>
                </div>  
            </div>
            <div class="body">
                <div class="userUpdate">
                    <div class="profile">
                        <div class="profile-header">
                            <form method="POST" class="form-change-profile" enctype="multipart/form-data">
                                <label for="change-profile" class="change-profile">
                                    <input type="file" id="change-profile" name="change-profile">
                                    <div class="round-image">
                                        <img class="user-profile" src="./img/default-profile.png" accept="image/png, image/jpeg, image/gif">
                                    </div>
                                    <span>trocar</span>
                                </label>
                            </form>

                            <div class="profile-head">
                                <div class="itens">
                                    <div class="user-fullname">
                                        <span></span>
                                    </div>
                                    <div class="remove-profile">
                                        <span>Remover Foto</span>
                                    </div>
                                </div>    
                                <div class="logout">
                                    <button>Deslogar</button>
                                </div>
                            </div>
                        </div>

                        <form class="data" id="data">
                            <div class="item-data name-cls">
                                <div class="itens">
                                    <div class="option short" id="option-name">
                                        <input type="text" name="name" id="name" placeholder="Nome">
                                    </div>
                                    <div class="option short" id="option-lastname">
                                        <input type="text" name="lastname" id="lastname" placeholder="Sobrenome">
                                    </div>   
                                </div>
                                <div class="errno"> 
                                    <svg aria-hidden="true" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
                                    <label for="name"></label>
                                </div>
                            </div>
                            <div class="item-data email-cls">
                                <div class="itens">
                                    <div class="option" id="option-email">
                                        <input type="email" name="email" id="email" placeholder="Seu endereço de e-mail ">
                                    </div>
                                    <div class="errno"> 
                                        <svg aria-hidden="true" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
                                        <label for="email"></label>
                                    </div>
                                </div>
                            </div>
                            <button class="change-password">Trocar senha</button>
                            <div class="toggle-change-password">
                                <div class="item-data password-cls">
                                    <div class="itens">
                                        <div class="option short" id="option-password">
                                            <input type="password" name="password" id="password" autocomplete="off" placeholder="Senha">
                                        </div>
                                        <div class="option short" id="option-confirmPassword">
                                            <input type="password" name="confirmPassword" id="confirmPassword" autocomplete="off" placeholder="Confirmar">
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
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="footer">
                <div class="options">
                    <button id="cancel">Cancelar</button>
                    <button id="confirm">Confirmar</button>
                </div>
            </div>
        </div>
        
        <!-- MODALS -->
        <div class="modal" id="createAnnounceModal">
            <div class="head">
                <div class="title">
                    <span>Criar um anúncio</span>
                </div>
                <div class="close" id="cancel">
                    <span></span>
                </div>  
            </div>
            <div class="body">
                <form method="POST" enctype="multipart/form-data">
                    <label class="image" for="image-input">
                        <input type="file" id="image-input">
                        <span>Selecionar uma Imagem</span>
                        <img src="" alt="">
                    </label>
                </form>
                <div class="title">
                    <label for="title">Titulo do anúncio:</label>
                    <input type="text" id="title">
                </div>
            </div>
            <div class="footer">
                <div class="options">
                    <button id="cancel">Cancelar</button>
                    <button id="confirm">Criar anúncio</button>
                </div>
            </div>
        </div>

        <div class="modal-background">
        </div>
    </div>
</body>
</html>
