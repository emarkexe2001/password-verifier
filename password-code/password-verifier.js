var passwordFitsCasesCount = 0;

function passwordVerifier(password)
{
    isPasswordLongerThanEightCharacters(password);
    isPasswordNotEmptyOrNull(password);
    doesPasswordContainANumber(password);
    doesPasswordContainUppercaseLetters(password);

    if (this.passwordFitsCasesCount >= 3 && doesPasswordContainLowercaseLetters(password) === true)
    {
        console.log("Your password fits the requirements")
        return "Your password fits the requirements";
    }
    else
    {
        console.log("Please provide a password that fills the criteria");
        return "Please provide a password that fills the criteria"
    }
}

function isPasswordLongerThanEightCharacters(password)
{
    if (password.length > 8)
    {
        this.passwordFitsCasesCount += 1;
        return true
    }
    else 
    {
        console.log("Please provide a password that has a length of more than 8 characters")
    }
}

function isPasswordNotEmptyOrNull(password)
{
    let checkWhitespace = new RegExp("\\s+")
    if (password != null && checkWhitespace.test(password) === false)
    {
        this.passwordFitsCasesCount += 1;
        return true
    }
    else 
    {
        console.log("Please provide a password that isn't empty or whitespace");
    }
}

function doesPasswordContainUpperAndLowerCase(password)
{
    if (password.toUpperCase() != password && password.toLowerCase() != password)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function doesPasswordContainUppercaseLetters(password)
{
    if (password.toLowerCase() != password)
    { 
        this.passwordFitsCasesCount += 1;
        return true
    }
    else 
    {
        console.log("Please provide a password that contains a uppercase Letter")
    }
}

function doesPasswordContainLowercaseLetters(password)
{
    if (password.toUpperCase() != password)
    { 
        this.passwordFitsCasesCount += 1;
        return true
    }
    else 
    {
        console.log("Please provide a password that contains a uppercase Letter")
    }
}

function doesPasswordContainANumber(password)
{
    if (/\d/.test(password) === true)
    {
        this.passwordFitsCasesCount += 1;
        return true
    }
    else
    {
        console.log("Please provide a password that contains a number");
    }
}

module.exports = {
    passwordVerifier: passwordVerifier,
    isPasswordLongerThanEightCharacters: isPasswordLongerThanEightCharacters,
    doesPasswordContainANumber: doesPasswordContainANumber,
    doesPasswordContainLowercaseLetters: doesPasswordContainLowercaseLetters,
    doesPasswordContainUppercaseLetters: doesPasswordContainUppercaseLetters,
    doesPasswordContainUpperAndLowerCase: doesPasswordContainUpperAndLowerCase,
    isPasswordNotEmptyOrNull: isPasswordNotEmptyOrNull,
}