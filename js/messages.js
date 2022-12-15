const Messages = {
    empty: {
        name: "Digite o nome",
        lastname: "Digite o sobrenome",
        nameAll: "Digite o nome e sobrenome",
        email: "Escolha um endereço de e-mail",
        password: "Digite uma senha",
        confirmPassword: "Confirme sua senha"
    },
    password: {
        incorrect: "Senha incorreta",
        not_equal: "As senhas não são iguais. Tente novamente"
    },
    email: {
        not_exists: "Esse e-mail não existe",
        already_exists: "Esse e-mail já foi registrado",
        format: "Formato de e-mail invalido"
    }
}

const getMessage = (type, key) => {
    if (Messages[type]) {
        if (Messages[type][key]) {
            return Messages[type][key];
        }
    }
    return type + " " + key;
}

const MessageHasType = (type) => {
    return Messages[type];
}

const MessageHasTypeAndKey = (type, key) => {
    if (Messages[type]) {
        if (Messages[type][key]) {
            return true;
        }
    }
    return false;
}

export { Messages, getMessage, MessageHasTypeAndKey, MessageHasType };