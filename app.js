const btns = document.querySelectorAll('.question-btn');
const text = document.querySelector('.question-text');

// btn.style.transform = 'rotate(360deg)';

// btn.style.color = 'red';
btns.forEach(btn=>{
btn.addEventListener('click', (e)=>{
     const button = e.currentTarget;
    const question = button.parentElement.parentElement;
    question.classList.toggle('show-text'); 
    button.classList.toggle('rotate');
})
})
const nav = document.getElementById('nav')
const scrollLinks = document.querySelectorAll('.scroll-link');
const home = document.getElementById('home');
const impact = document.getElementById('impact');
const whyUs = document.getElementById('why-us');
const sectionImpact = document.querySelector('.impact');
const sectionWhyHire = document.querySelector('.why-hire');

window.addEventListener('scroll', (e)=>{
const navHeight = nav.getBoundingClientRect().height;
let scrollPosition = window.pageYOffset;
let whyHirePosition = sectionWhyHire.offsetTop - navHeight;
let impactPosition = sectionImpact.offsetTop - navHeight;

    if(scrollPosition >= 0 && scrollPosition < impactPosition){
home.classList.add('show-line')
} else{
    home.classList.remove('show-line')
}
if(scrollPosition >= impactPosition && scrollPosition < whyHirePosition){
impact.classList.add('show-line')
} else{
    impact.classList.remove('show-line')
}
if(scrollPosition >= whyHirePosition){
whyUs.classList.add('show-line')
} else{
 whyUs.classList.remove('show-line')
}
})

// scroll to particular position 

scrollLinks.forEach((link)=>{
link.addEventListener('click', (e)=>{
e.preventDefault();
const id = e.currentTarget.getAttribute('href').slice(1);
const element = document.getElementById(id);

// calculate the height 
const navHeight = nav.getBoundingClientRect().height;
let position = element.offsetTop -navHeight;
console.log(position);

window.scrollTo({
    left: 0,
    top: position,
})
})
})

const hireBtn = document.querySelectorAll('.hire-btn');
const joinBtn = document.querySelectorAll('.join-btn');
const modalOverlay1 = document.querySelector('.modal-overlay-1');
const modalOverlay2 = document.querySelector('.modal-overlay-2');
const modalContainer = document.querySelector('.modal-container');
const closed = document.querySelector('.close');

hireBtn.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        modalOverlay1.classList.add('open-modal');
    })
})
joinBtn.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        modalOverlay2.classList.add('open-modal');
    })
})

modalOverlay1.addEventListener('click',()=>{
    modalOverlay1.classList.remove('open-modal');
        console.log('closed');
})
  modalOverlay2.addEventListener('click',()=>{
    modalOverlay2.classList.remove('open-modal');
            console.log('closed');
         })



