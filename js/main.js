
/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
// const sections = document.querySelectorAll('section[id]')

// function scrollActive(){
//     const scrollY = window.pageYOffset

//     sections.forEach(current =>{
//         const sectionHeight = current.offsetHeight
//         const sectionTop = current.offsetTop - 50;
//         sectionId = current.getAttribute('id')

//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
//         }else{
//             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
//         }
//     })
// }
// window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById('nav-menu')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

//! =================== Collapse Button ======================
const navigation_box = document.querySelector('#navigation_box')
const menuToggle = document.querySelector('#menuToggle')
const nav_links = document.querySelectorAll('.nav-link')

menuToggle.addEventListener('click', () => {
    navigation_box.classList.toggle('slidein_active')
    transform_hamburger()
})
nav_links.forEach(el => {
    el.addEventListener('click', () => {
        navigation_box.classList.toggle('slidein_active')
        transform_hamburger()
    })
})

function transform_hamburger() {
    let first = document.querySelector('#first_span')
    let second = document.querySelector('#second_span')
    let third = document.querySelector('#third_span')

    first.classList.toggle('first_span_active')
    second.classList.toggle('second_span_active')
    third.classList.toggle('third_span_active')
}

//! ============= resume button ==========
document.getElementById("resume-link-1").onclick = () => {

    window.open("https://drive.google.com/file/d/1ipnSEzLMHm--KlKIRtS8spRTOhYPy3fG/view?usp=share_link");
}
// document.getElementById("resume-link-2").onclick = () => {

//     location.assign("https://drive.google.com/file/d/1ipnSEzLMHm--KlKIRtS8spRTOhYPy3fG/view?usp=share_link");
// }
// document.getElementById("resume-link-1").onclick = () => {

//     location.assign("https://drive.google.com/file/d/1ipnSEzLMHm--KlKIRtS8spRTOhYPy3fG/view?usp=share_link");
// }

//! ================= SCROLL REVEAL JS =================
ScrollReveal({
    reset: false,
    distance: '80px',
    duration: 2000,
    delay: 200
});

//*========> common 
ScrollReveal().reveal('.section_title', { origin: 'top', delay: 200 });

//*========> Side Pannel
ScrollReveal().reveal('.icon_container', { origin: 'left', delay: 200 });
ScrollReveal().reveal('.email_container', { origin: 'right', delay: 200 });

//*========> Navigation Section
// ScrollReveal().reveal('.home', { origin: 'top', delay: 300 });
// ScrollReveal().reveal('.about', { origin: 'top', delay: 400 });
// ScrollReveal().reveal('.projects', { origin: 'top', delay: 500 });
// ScrollReveal().reveal('.skills', { origin: 'top', delay: 600 });
// ScrollReveal().reveal('.contact', { origin: 'top', delay: 700 });
// ScrollReveal().reveal('.nav_link_resume', { origin: 'top', delay: 800 });

//*========> Home Section
ScrollReveal().reveal('.home_container', { origin: 'top' });
ScrollReveal().reveal('.home_container_intro_name', { origin: 'left' });
ScrollReveal().reveal('#user-detail-intro', { origin: 'right' });

// //*========> About Section
ScrollReveal().reveal('.about_left', { origin: 'left' });
ScrollReveal().reveal('.about_right', { origin: 'right' });
ScrollReveal().reveal('#resume-button-2', { origin: 'bottom' });

// //*========> About Section
ScrollReveal().reveal('.project-card_img_section', { origin: 'right', distance: '100px', });
ScrollReveal().reveal('.project-card_description_section', { origin: 'left', distance: '100px', });

ScrollReveal().reveal('#project-flip-description', { origin: 'right', distance: '100px', });
ScrollReveal().reveal('#project-flip-img', { origin: 'left', distance: '100px', });

// //*========> Skills Section
ScrollReveal().reveal('.skills-card', { origin: 'bottom' });
ScrollReveal().reveal('.skills_container h1', { origin: 'bottom' });

// *========> Github Stats
ScrollReveal().reveal('.react-activity-calendar h2', { origin: 'bottom' });
ScrollReveal().reveal('.react-activity-calendar', { origin: 'bottom' });

// *========> Github Activity
ScrollReveal().reveal('.section__title', { origin: 'bottom' });
ScrollReveal().reveal('.github_carousel_container', { origin: 'bottom' });

// *========> Contact Activity
ScrollReveal().reveal('.contact-mobile-active span', { origin: 'bottom' });
ScrollReveal().reveal('.contact-mobile-active p', { origin: 'bottom' });
ScrollReveal().reveal('.contact-mobile-active a', { origin: 'bottom' });
ScrollReveal().reveal('.contact-info-card', { origin: 'bottom' });

ScrollReveal().reveal('.footer-section p', { origin: 'bottom' });
