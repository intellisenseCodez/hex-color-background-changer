
const button = document.querySelector('a');
const body = document.querySelector('body');
const hexadecimal = ['1', '2', '3', '4', '5', '6', '7', '8', '9','A', 'B', 'C', 'D', 'E', 'F'];
const hexValue = document.querySelector("hex-value");

body.style.backgroundColor = "#FFFFFF";


function changeBackground(){

    let hexColor = '#';

    while (hexColor.length <= 6) {

        let index = parseInt(Math.random()* 15);
        let value = hexadecimal[index];
    
        hexColor = hexColor +`${value}`;
    
        hexColor.length++;
    }
    console.log(hexColor);
    hexValue.textContent = hexColor;
    body.style.backgroundColor = hexColor;
};

button.addEventListener('click', changeBackground);


