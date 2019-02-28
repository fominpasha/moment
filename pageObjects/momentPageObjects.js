module.exports = {
    url: 'https://airmoment.live/',
    elements: {
        
        signUpButton: 'a[href="/register"]',

        username: {
            selector: '(//input[@class="register-fields"])[1]',
            locateStrategy: 'xpath'
        },
        firstName: {
            selector: '(//input[@class="register-fields"])[2]',
            locateStrategy: 'xpath'
        },
        lastName: {
            selector: '(//input[@class="register-fields"])[3]',
            locateStrategy: 'xpath'
        },
        password: {
            selector: '(//input[@class="register-fields"])[4]',
            locateStrategy: 'xpath'
        },
        email: {
            selector: '(//input[@class="register-fields"])[5]',
            locateStrategy: 'xpath'
        },
        phoneNumber: {
            selector: '(//input[@class="register-fields"])[6]',
            locateStrategy: 'xpath'
        },
        yourLocation: {
            selector: '(//input[@class="register-fields"])[7]',
            locateStrategy: 'xpath'
        },
        genderSelect: 'select[required]',

        selectGenderOption: 'option[value=""]',

        female: 'option[value="Female"]',

        male: 'option[value="Male"]',

        notProvided: 'option[value="Not Provided"]',

        other: 'option[value="Other"]',

        describeYourself: 'textarea[cols="80"]',

        registerButton: 'input[class="register-button"]',

        logInUsername: {
            selector: '(//input[@class="login-input"])[1]',
            locateStrategy: 'xpath'
        },
        logInPassword: {
            selector: '(//input[@class="login-input"])[2]',
            locateStrategy: 'xpath'
        },
        logInButton:{
            selector: '(//input[@class="login-button"])[1]',
            locateStrategy: 'xpath'
        },
        logoutButton: 'button[style="display: none;"]',

        
    }
}