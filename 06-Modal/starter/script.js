'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const removeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

const openModal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for(let i = 0; i < btnsOpenModal.length; i++) 
    btnsOpenModal[i].addEventListener('click', openModal);


document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) removeModal();
});

btnCloseModal.addEventListener('click', removeModal);
overlay.addEventListener('click', removeModal);
