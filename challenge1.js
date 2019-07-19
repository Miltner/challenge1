var password = 'areaFiddyOneski';
let caps = 0;
let lowerCase = 0;
let authorized = 0;

//This function splits the password and stores each character into one array and loops through it and stores each uppercase and each lowercase character to caps and lowerCase respectively
const checkCase = () => {
    x = password.split('');
    for (let i = 0; i < x.length; i++) {
        if (x[i] === x[i].toUpperCase()) {
            caps += 1;
        } else {
            lowerCase += 1;
        }
    }
};
checkCase();

//This function checks all of the requirements
const checkReqs = () => {
    switch (true) {
        case (password.length >= 8 && caps >= 1 && lowerCase >= 1):
        authorized = true;    
        console.log('Your password was accepted.');
            break;
        case (password.length < 8):
        authorized = false;    
        let character = password.length;
            console.log(`Your password is too short. Please increase your password by at least ${character} more characters.`);
            break;
        case (caps > 1 || lowerCase > 1):
        authorized = false;    
        console.log('Your password must contain one uppercase and one lower case letter');
            break;
        default:
            console.log('Error')
            break;
    }
};
checkReqs();