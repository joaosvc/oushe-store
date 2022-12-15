import { getMessage, MessageHasTypeAndKey } from './messages.js';
import { initializeAndUpdateUser } from './mainPage.js';

const passwordInput = $("#password");
const confirmPasswordInput = $("#confirmPassword");
const checkboxPassword = $("#checkbox-password");
const formContent = $("#data");
const formContentQuery = document.querySelector("#data");

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

const canValidatePassword = () => {
    return $(".change-password").hasClass("active");
}

const editDone = async () => {
    data = processFormData();
    let filled = false;
    let clearError = [];

    (() => {
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
            if (!canValidatePassword() && (i === "password" || i === "confirmPassword")) {
                continue;
            }

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
        if (canValidatePassword()) {
            if (!data.password && !data.confirmPassword) {
                sendComponentError("password-cls", "empty", "password");
            }
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
        if (!canValidatePassword()) {
            return true;
        }

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

    const hasError = () => {
        let keys = Object.keys(clearError);
        
        for (let i in keys) {
            let key = keys[i];
            let value = clearError[key];
            
            if (value === false) {
                return true;
            }
        }
        return false;
    }

    if (filled && !hasError()) {
        if (validate_email() && validate_password()) {
            await $.ajax({
                type: 'POST',
                url: 'includes/editProfile.php',
                data: formContent.serialize() + "&changePassword=" + canValidatePassword(),
                success: async (result) => {
                    switch (result) {
                        case 'user.info.edited':
                            await initializeAndUpdateUser();
                            break;
                        default:
                            alert(result);
                            break;
                    }
                },
                beforeSend: () => {
                    //TODO:
                    console.log("editing profile...");
                },
                error: (e, msg) => {
                    alert(msg);
                }
            });
            return true;
        }
    }
    return false;
}

const initEditProfile = () => {
    formContent.submit((event) => event.preventDefault());
    checkboxPassword.change(function() {
        if ($(this).is(":checked")) {
            passwordInput.attr("type", "text");
            confirmPasswordInput.attr("type", "text");
        } else {
            passwordInput.attr("type", "password");
            confirmPasswordInput.attr("type", "password");
        }
    });
}

export { editDone, initEditProfile };