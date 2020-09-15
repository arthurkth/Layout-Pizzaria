let btnMobile = document.querySelector('#menu-mobile');
let menuMobile = document.querySelector('.nav-mobile-container');
let links = document.querySelector('.nav-mobile');

btnMobile.addEventListener('click', function clickMobile(){
if(clickMobile && menuMobile.style.display == 'none'){
    menuMobile.style.display = 'block';
}  

else{
    menuMobile.style.display = 'none';

}
});

links.addEventListener('click', function clicLink(){
    menuMobile.style.display = 'none';
})