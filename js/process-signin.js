import { getMessage, MessageHasTypeAndKey } from './messages.js';

const passwordInput = $("#password");
const checkboxPassword = $("#checkbox-password");
const forgotEmail = $("#forgot-email");
const formContent = $("#formContent");
const formContentQuery = document.querySelector("#formContent");

forgotEmail.click(() => location.href = "recovery");
checkboxPassword.change(function() {
    if ($(this).is(":checked")) {
        passwordInput.attr("type", "text");
    } else {
        passwordInput.attr("type", "password");
    }
});

let data, values = {};
let components = {};
let elements = ["email-cls", "password-cls"];    
const getContype = (type) => type + "-cls";
const loadComponents = () => {
    elements.forEach((element) => {
        let query = "." + element;
        components[element] = {
            concls: document.querySelector(query),
            label: document.querySelector(query + " label")
        };
    });
}
const processFormValues = () => values = {
    email: formContentQuery["email"],
    password: formContentQuery["password"]
};
const processFormData = () => {
    data = {};
    for (let i in values) {
        data[i] = values[i].value;
    }   
    return data;
}
loadComponents();
processFormValues();

const sendError = (element, key, msg) => {
    if (values[element] && MessageHasTypeAndKey(key, msg)) {
        let contype = getContype(element);
        sendComponentError(contype, key, msg);
        if (values[element].classList.contains("error")) {
            values[element].classList.remove("error");
        }
        values[element].classList.add("error");
    }
}

const sendComponentError = (contype, key, msg) => {
    if (MessageHasTypeAndKey(key, msg)) {
        let message = getMessage(key, msg);
        if (components[contype]) {
            let component = components[contype];
            if (!component.concls.classList.contains("error")) {
                component.concls.classList.add("error");
            }
            component.label.innerHTML = message;
        }
    }
}

const removeComponentError = (contype) => {
    if (components[contype]) {
        let component = components[contype];
        if (component.concls.classList.contains("error")) {
            component.concls.classList.remove("error");
        }
        component.label.innerHTML = "";
    }
}

const removeError = (element) => {
    if (values[element]) {
        if (values[element].classList.contains("error")) {
            values[element].classList.remove("error");
        }
    }
}
formContent.submit((event) => {
    event.preventDefault();
    data = processFormData();
    let filled = false;

    (() => {
        let clearError = [];
        const processError = (key, hasError) => {
            if (clearError[getContype(key)] !== undefined) {
                if (clearError[getContype(key)] === false && hasError) {
                    return;
                }
            }
            clearError[getContype(key)] = hasError;
        }
        const completionError = () => {
            elements.forEach(element => {
                if (clearError[element] !== undefined) {
                    if (clearError[element] === true) {
                        removeComponentError(element);
                        filled = true;
                    } else {
                        filled = false;
                    }
                }
            });
        }
        for (let i in data) {
            let isEmpty = typeof data[i] === 'string' && data[i].trim().length === 0;
            if (isEmpty) {
                sendError(i, "empty", i);
            } else {
                removeError(i);
            }
            processError(i, !isEmpty);
        }
        completionError();
    })();

    if (filled) {
        $.ajax({
            type: 'POST',
            url: 'includes/signin.inc.php',
            data: formContent.serialize(),
            success: (result) => {
                console.log(result);
                switch (result) {
                    case 'form_error':
                        alert("Form error!");
                        break;
                    case 'database_error':
                        alert("Database error!");
                        break;
                    case 'email_not_found':
                        sendError("email", "email", "not_exists");
                        break;
                    case 'incorret_password':
                        sendError("password", "password", "incorrect");
                        break;
                    case 'success':
                        location.href = './';
                        break;
                }
            },
            beforeSend: () => {
                console.log("sending data...");
            },
            error: (e, msg) => {
                alert(msg);
            }
        });
    }
});