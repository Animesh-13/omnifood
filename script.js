'use strict';

const modal = document.querySelector('.header');
const btnCloseModal = document.querySelector('.menuClose');
const btnOpenModal = document.querySelector('.menuOpen');

const openModal =function(){
    modal.classList.add('nav-open');
}
const closeModal =function(){
    modal.classList.remove('nav-open');
}

btnOpenModal.addEventListener('click',openModal);
btnCloseModal.addEventListener('click',closeModal);