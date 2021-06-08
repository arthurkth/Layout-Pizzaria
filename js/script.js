const btnOpen = document.querySelector('.header__button--open')
const btnClose = document.querySelector('.header__button--close')
const nav = document.querySelector('.header__nav')
const banner = document.querySelector('.banner')
const header = document.querySelector('.header')


btnOpen.addEventListener('click', ()=>{
    nav.classList.add('active')
})
btnClose.addEventListener('click', ()=>{
    nav.classList.remove('active')
})

 window.addEventListener('scroll',()=>{
    const device = verifyDevice(window.innerWidth)
    scrollAnime(device, window.pageYOffset)
 })
      
function verifyDevice(x){
    if(x < 768){
        return 'mobile'
    }
    if(x >=768){
        return 'desktop'
    }
}


function scrollAnime(device, y){
    switch(device){
        case 'mobile':
        if(y>= banner.offsetHeight){
            header.style.background = 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))'
        }else{
            header.style.background = 'transparent'
        }
        break;
        case 'desktop':
        if(y>= banner.offsetHeight){
            header.style.background = '#000000'           
        }else{
            header.style.background = 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))'
        }
    }
    
 
 }