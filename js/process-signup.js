import { getMessage, MessageHasTypeAndKey } from './messages.js';

const passwordInput = $("#password");
const confirmPasswordInput = $("#confirmPassword");
const checkboxPassword = $("#checkbox-password");
const signinAccount = $("#signinAccount");
const createNewEmail = $("#create-new-email");
const formContent = $("#formContent");
const formContentQuery = document.querySelector("#formContent");

const googleCreateAccountURL = "https://accounts.google.com/signup"; 

checkboxPassword.change(function() {
    if ($(this).is(":checked")) {
        passwordInput.attr("type", "text");
        confirmPasswordInput.attr("type", "text");
    } else {
        passwordInput.attr("type", "password");
        confirmPasswordInput.attr("type", "password");
    }
});
createNewEmail.click(() => window.open(googleCreateAccountURL, "_blank"));
signinAccount.click(() => location.href = "signin");

let data, values = {};
let components = {};
let elements = ["name-cls", "email-cls", "password-cls"];
const getContype = (type) => type.replace("lastname", "name").replace("confirmPassword", "password") + "-cls"; 
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
    name: formContentQuery["name"],
    lastname: formContentQuery["lastname"],
    email: formContentQuery["email"],
    password: formContentQuery["password"],
    confirmPassword: formContentQuery["confirmPassword"]
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

        if (!data.name && !data.lastname) {
            sendComponentError("name-cls", "empty", "nameAll");
        }
        if (!data.password && !data.confirmPassword) {
            sendComponentError("password-cls", "empty", "password");
        }
        
        completionError();
    })();

    const validate_email = () => {
        let regular = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!regular.test(data.email)) {
            sendError("email", "email", "format");
            return false;
        } else {
            removeError("email");
        }
        return true;
    }

    const validate_password = () => {
        if (data.password !== data.confirmPassword) {
            sendError("password", "password", "not_equal");
            sendError("confirmPassword", "password", "not_equal");
            return false;
        } else {
            removeError("password");
            removeError("confirmPassword");
        }
        return true;
    }

    if (filled) {
        if (validate_email() && validate_password()) {
            $.ajax({
                type: 'POST',
                url: 'includes/signup.inc.php',
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
                        case 'email_already_exists':
                            sendError("email", "email", "already_exists");
                            break;
                        case 'success':
                            location.href = './';
                            break;
                    }
                },
                beforeSend: () => {
                    //TODO:
                    console.log("sending data...");
                },
                error: (e, msg) => {
                    alert(msg);
                }
            });
        }
    }
});