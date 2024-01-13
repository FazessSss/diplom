//timer
const timeEnd = '2024-02-19';

function getTimeRemaining(endtime){
    const t = Date.parse(endtime) - Date.parse(new Date()),
        days = Math.floor(t/(1000*60*60*24)),
        hours = Math.floor((t/(1000*60*60))%24),
        minutes = Math.floor((t/(1000*60))%60),
        seconds = Math.floor((t/(1000))%60);
    return{
        'total':t,
        'days':days,
        'hours':hours,
        'minutes':minutes,
        'seconds':seconds
    }
}
function setClock(selector,endtime){
    const timer = document.querySelector(selector),
         days = document.querySelector('.days'),
         hours = document.querySelector('.hours'),
         minutes = document.querySelector('.minutes'),
         seconds = document.querySelector('.seconds');
         timeInterval = setInterval(updateClock,1000);
    updateClock();
    function updateClock(){
        const t = getTimeRemaining(endtime);
        days.innerHTML = t.days;
        hours.innerHTML = t.hours;
        minutes.innerHTML = t.minutes;
        seconds.innerHTML = t.seconds;
        if(t.total<=0){
            clearInterval(timeInterval);
            days.innerHTML = "00";
            hours.innerHTML = "00";
            minutes.innerHTML = "00";
            seconds.innerHTML = "00";
        }
    }
}
setClock('.timer',timeEnd);
//slider
const slides = document.querySelectorAll('.testimonilas-carousel-wrap'),
prev = document.querySelector('.tc-button tc-button-prev'),
next = document.querySelector('.tc-button tc-button-next'),
//total = document.querySelector('#total'),
current = document.querySelector('.testi-number');

let slideIndex = 1;

function showSlides(n){
    if(n>slides.length){
        slideIndex = 1;
    }
    if(n<1){
        slideIndex = slides.length;
    }
    if(slides.length <10){
        total.textContent = `0${slides.length}`;
    }else{
        total.textContent = slides.length;
    }
    slides.forEach(item=> item.style.display="none");
    slides[slideIndex-1].style.display ="block";

    if(slides.length<10){
       current.textContent = `0${slideIndex}`;
   }else{
        current.textContent = slideIndex;
    }
}
showSlides(slideIndex);

function plusSlide(n){
    showSlides(slideIndex = slideIndex+n);
}

next.addEventListener('click',()=>{
    plusSlide(1);
})
prev.addEventListener('click',()=>{
    plusSlide(-1);
})

//asdasdasdasdadffgdg

const tabs = document.querySelectorAll('.tabheader__item');
const tabContent = document.querySelectorAll('.tab');
const tabParent = document.querySelector('.hero-menu_header');

function hideTabContent(){
    tabContent.forEach(item =>{
        item.style.display = "none";
    })
    tabs.forEach(item=>{
        item.classList.remove('tabheader__item_active');
    })
}

function showTabContent(i=0){
    tabContent[i].style.display = 'block';
    tabs[i].classList.add('tabheader__item_active');
}


hideTabContent();
showTabContent();

tabParent.addEventListener('click',(event)=>{
    if(event.target = event.target.classList.contains('tabheader__item')){
        tabs.forEach((item,i)=>{
            if(event.target == item){
                hideTabContent();
                showTabContent(i);
            }
        })
    }
})