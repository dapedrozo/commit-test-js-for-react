/*
//manipulando el dom
const title = document.createElement('h1')
title.innerText = 'Hello World'
const button = document.createElement('button')
button.innerText = 'Click Me'

button.addEventListener('click', function() {
    title.innerText = 'You clicked me'
    alert('You clicked me')
})

document.body.append(title)
document.body.append(button)
*/

/*
//usando objetos en el dom
const user = {
    name: 'Juan',
    age: 30,
}
function printInfo(user) {
    return '<h1>Hola ' + user.name + '</h1>'
}

document.body.innerHTML = printInfo(user)
*/

/*
//añadiendo styles a un elemento y string literals para concatenar y operadores ternarios
const background='red'
const color='white'
const isAuthorized = true
const button = document.createElement('button')
button.innerText = 'Click Me'
button.style = `background: ${isAuthorized ? 'blue' : background}; color: ${color}; font-size: 20px;`
document.body.append(button)
*/