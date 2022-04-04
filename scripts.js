
const hamburger = document.querySelector('.hamburger-btn');
const dropdown = document.querySelector('.mobile-menu');
const close = document.querySelector('.close-button');
const closeList = document.querySelector('.mobile-menu-list');

hamburger.addEventListener('click', function(){
    dropdown.classList.remove('hide');
}) 

close.addEventListener('click', function(){
  dropdown.classList.add('hide');
}) 

closeList.addEventListener('click', ()=>{
  dropdown.classList.add('hide');
})
