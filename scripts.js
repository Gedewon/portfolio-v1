const hamburger = document.querySelector('.mobile-menu-list');
const dropdown = document.querySelector('.mobile-menu');
const close = document.querySelector('.close-button');

hamburger.addEventListener('click', function(){
    dropdown.classList.remove('hide');
}) 

close.addEventListener('click', function(){
  dropdown.classList.remove('hide');
}) 
