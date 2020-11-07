const btn = document.getElementById('button');
const btns = document.getElementById('hide-buttons');

btn.addEventListener('click', () => btns.classList.toggle('buttons--show') );