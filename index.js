const userDatabase = {
    'user123' : {
        firstName: 'Becca',
        lastName: 'Rebecca',
        email: 'rebecca@gmail.com',
        password: 'becca1234',
        accountActivated: true
    },

    'user12' : {
        firstName: 'Bebe',
        lastName: 'Rebec',
        email: 'bebecoco@gmail.com',
        password: '12345678',
        accountActivated: false
    },

    'user1' : {
        firstName: 'Dave',
        lastName: 'David',
        email: 'davede@gmail.com',
        password: 'dave1234',
        accountActivated: true
    },

    'user' : {
        firstName: 'Davo',
        lastName: 'Davifidi',
        email: 'dafidi@gmail.com',
        password: 'davo1234',
        accountActivated: true
    },
}




function displayUserDetails() {
    let username = prompt('Enter your username')

    while (validateUsername(username) == false) {
            
        username = prompt('Username is not valid. Please enter a valid username')
    }

    if (username == null) {
        return;
    }

    let password = prompt('Enter your password')

    while (validatePassword(password) == false) {
        password = prompt('Password is not valid. Please enter a valid password')
    }

    if (password == null) {
        return;
    }

    let passwordConfirm = prompt('Confirm your password')

    while (passwordConfirm !== password) {
        passwordConfirm = prompt('Password incorrect, confirm your password again!')
    }

    if (passwordConfirm == null) {
        return;
    }

    const user = userDatabase[username]

    if (user == undefined) {
        alert('User not found! Please check your username and password')
        return;
    }


    alert(`
    User found with the following details:
    First Name: ${user.firstName}
    Last Name: ${user.lastName}
    Email: ${user.email}
    Account Activated: ${user.accountActivated}
    `)

    //console.log(username, password, passwordConfirm);
}

displayUserDetails()
alert('You have come to the of this program! Goodbye')


function validateUsername(username) {
    if (username == null) {
        return true;
    }
    if (username.length > 10) {
        return false;
    } else {
        return true;
    }
}

function validatePassword(password) {
    if (password == null) {
        return true;
    }
    if (password.length < 6) {
        return false;
    } else {
        return true;
    }
}

