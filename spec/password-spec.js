
const passwordTester = require('./password-code/password-verifier.js')

describe("Password Functions", function() {

    describe("Password Verifer Testing", function() {
        
        it("Should test if a password is longer than 8 characters and return true if it is", function()
        {
            let password = passwordTester.isPasswordLongerThanEightCharacters("swimfishing");
            expect(password).toBeTrue();
        })

        it("Should test if a password is null or whitespace and return a message if the password is empty")
        {
            let password = passwordTester.isPasswordNotEmptyOrNull("   ");
            expect(password).toBe("Please provide a password that isn't empty or whitespace");
        }

        it("Should test if a password is contains a lowercase letter and return true if it does")
        {
            let password = passwordTester.doesPasswordContainLowercaseLetters("password");
            expect(password).toBeTrue();
        }

        it("Should test if a password is contains a uppercase letter and return true if it does")
        {
            let password = passwordTester.doesPasswordContainLowercaseLetters("PASSWORD");
            expect(password).toBeTrue();
        }

        
        it("Should test if a password is contains a uppercase letter and lowercase letter and return true if it does")
        {
            let password = passwordTester.doesPasswordContainUpperAndLowerCase("PassWORD");
            expect(password).toBeTrue();
        }

        it("Should test if a password is contains a number")
        {
            let password = passwordTester.doesPasswordContainANumber("PassWORD12");
            expect(password).toBeTrue();
        }

        it("Should test if a password fits three or more cases")
        {
            let password = passwordTester.passwordVerifier("PassWORD12");
            expect(password).toBe("Your password fits the requirements")
        }

        it("Should test if a password doesn't fit case 4")
        {
            let password = passwordTester.passwordVerifier("PASSWORD12");
            expect(password).toBe("Please provide a password that fills the criteria")
        }
    })
})