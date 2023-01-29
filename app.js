// grab DOM elements

// set event listeners
console.log('Hello World!');

function sayHello() {
    console.log('Hola Medina!');
    console.log("It's a beautiful day!");
    console.log('I hope you are well!');
}

sayHello();


const nameElem = document.getElementById('name');
nameElem.textContent = 'Julie';

const updateBtn = document.getElementById('update');

updateBtn.addEventListener('click', ()=>{
    console.log('I am clicking the button');
    const nameInput = document.getElementById('input');
    const nameElem = document.getElementById('name');
    nameElem.textContent = nameInput.value;
})
