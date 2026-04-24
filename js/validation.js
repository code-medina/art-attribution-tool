export const validationMaxLength = (value, maxLength = 40) => {

    console.log((!value || typeof value !== "string" || value.trim().length > maxLength));

    if (!value || typeof value !== "string" || value.trim().length > maxLength)
        return false;

    return true;
}

export const validationMinLength = (value, minLength = 2) => {
    console.log((!value || typeof value !== "string" || value.trim().length < minLength));

    if (!value || typeof value !== "string" || value.trim().length < minLength) return false;

    return true;

}