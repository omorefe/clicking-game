import { functions } from './script.js';

let resetButton = document.querySelector('.reset');

resetButton.addEventListener('click', () => {
    functions.reset()

    resetButton.classList.remove('spin')
    void resetButton.offsetWidth;
    resetButton.classList.add('spin')
})

let shareButton = document.querySelector('.share');

shareButton.addEventListener('click', () => {
    alert("Sharing isn't available just yet")
})