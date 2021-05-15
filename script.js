/* Gradient background generator */
const colors = ['#d50000', '#ffa000', '#673AB7', '#FF5722', '#64DD17'];
 let body = document.querySelector('body');
 let button = document.querySelector('button');

 button.addEventListener('click', () => {
     let randomNumber = Math.random() * colors.length
     randomNumber = Math.floor(randomNumber)
    let selectedColor = colors[randomNumber];
    body.style.backgroundColor = selectedColor;
 })
