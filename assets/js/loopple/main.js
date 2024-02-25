
const hamburgerBtn = document.getElementById('ham-btn');
const mobileBtn = document.getElementById('mobile-menu');


function initApp(){
    hamburgerBtn.addEventListener('click', toggleMenu);
    mobileBtn.addEventListener('click', toggleMenu);
}

function toggleMenu(){
    mobileBtn.classList.toggle('hidden');
    mobileBtn.classList.toggle('flex');
}

document.addEventListener('DOMContentLoaded', initApp);