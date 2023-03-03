
const generer = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 
                    'l', 'm', 'n', 'o', 'q', 'r', 's', 't', 'u', 'v', 'w', 
                    'x', 'y', 'z', 'A', 'B', 'C', 'D', 'F', 'G', 'H', 'I',
                    'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
                    'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4',
                    '5', '6', '7', '8', '9', '@', '*', '#','£', '_', '&', 
                    '-', '+', '(', ')', '/', "'", ':', ';', '!', '?', '',
                    '', '.'] ;

const password1 = document.getElementById('pass1');
const password2 = document.getElementById('pass2');

document.getElementById('generateurMotdePasse').addEventListener('click', function(){
    let passGenerer1 = '';
    let passGenerer2 = '';

    for (i = 0; i < 15; i++) {
        let password = Math.floor(Math.random() * generer.length);
        passGenerer1 += generer[password];

        password1.textContent = passGenerer1;
    }

    for (i = 0; i < 15; i++) {
        let password = Math.floor(Math.random() * generer.length);
        passGenerer2 += generer[password];

        password2.textContent = passGenerer2;
    }

}) 
    