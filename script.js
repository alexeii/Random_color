let color = document.querySelector('#color');
let btn = document.querySelector('#change');

function randomColor() {
    color.value = '#' + (Math.random().toString(16) + "000000").substring(2, 8);
    color.textContent = color.value;
    document.body.style.backgroundColor = color.value;
    btn.style.color = color.value;
};

btn.addEventListener('click', randomColor);