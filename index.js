// const sections = document.querySelectorAll('.sec1,.sec2')
// sections.forEach((section , index )=>{
//     setTimeout(()=>{
//         section.style.transform = 'translatex(0)';
//     },index * 200)
// })

// const container = document.querySelector('.container')
// const sections = document.querySelectorAll('.sec1 , .sec2')

// if(container && sections.length > 0) { 

// container.addEventListener('mouseover', ()=>{
//     sections.forEach((section , index )=>{
//         setTimeout(()=>{
//             section.classList.add('animate')
//         }, index * 200)
//     })
// })

// container.addEventListener('mouseout',()=>{
//     sections.forEach((section)=>{
//         section.classList.remove('animate')
//     })
// })
// }
// const slider =document.querySelector('.slider')
// const slides = document.querySelectorAll('.slide')
// if(slider && slides.length > 0) { 

// let currentslide = 0
// let slideInterval;

// function slideNext(){
//     slides[currentslide].style.display ='none'
//     currentslide =(currentslide + 1)% slides.length
//     slides[currentslide].style.display = 'block'
// }
// slides.forEach((slide, index) => {
//     if(index == 0){
//         slide.style.display = 'block'
//     }else{
//         slide.style.display = 'none'
//     }
// })
// slideInterval = setInterval(slideNext, 5000)
// }

function toggleMenu(){
    console.log('toggleMenu function')
    const navLinks = document.getElementById('nav-links')
    const menuIcon = document.getElementById('menu-icon')
    if(navLinks && menuIcon) {
    navLinks.classList.toggle('show')
    menuIcon.classList.toggle('fa-times')
    menuIcon.classList.toggle('fa-bars')
    }else{
        console.log('Element not found')
    }
}


const slides = document.querySelectorAll('.charting_area');
let index = 0;

function showSlide(){
    slides.forEach((charting_area, i) =>{
        charting_area.classList.remove('active');
        if(i === index){
         charting_area.classList.add('active');

        }
    })
    index = (index + 1) % slides.length

}

showSlide()

setInterval(showSlide, 2000)