export const maxLength = (length) => (value) => value.length <= length;
export const minLength = (length) => (value) => value.length >= length;
export const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
export const hasSuchUser = (email) => {
    const users = JSON.parse(localStorage.getItem('users'));
    if (users && users.length) {
        const candidate = users.find(user => user.email === email);
        if (candidate)
            return true;
        else
            return false;
    } else {
        return false;
    }
}

export const validatePassword = (p) => {

    const errors = [];
    if (p.length < 8) {
        errors.push("Your password must be at least 8 characters");
    }
    if (p.search(/[a-z]/i) < 0) {
        errors.push("Your password must contain at least one letter.");
    }
    if (p.search(/[0-9]/) < 0) {
        errors.push("Your password must contain at least one digit.");
    }
    if (errors.length > 0) {

        return errors;
    }
    return false;
}
export const isAllValid = (form) => {
    let isValid = false;
    for (let key in form) {
        if (form[key].isValid) {
            isValid = true;
        } else {
            return false;
        }
    }
    return isValid;
}