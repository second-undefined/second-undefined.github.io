// //images slider
const duration = 5000;
const slide = document.querySelectorAll(`.slider__slide`);
const width = slide[0].clientWidth;
const slider = document.querySelector(`.slider`);
const allSome = width * slide.length;
setInterval(() => {
    slider.scrollLeft += width;
}, duration);

setInterval(() => {
    if(slide[5].classList.contains(`close`)){
        slider.scrollLeft += -allSome;
    }
}, duration * slide.length - 2000);

//location for inst images
const allInstImages = document.querySelectorAll(`.inst__image`);
const instBtn = document.querySelector(`.inst__btn`);
allInstImages.forEach((image) => {
    image.onclick = () => {
        window.location = `https://instagram.com/italproject_arch?igshid=YmMyMTA2M2Y`;
    }
    instBtn.onclick = () => {
        window.location = `https://instagram.com/italproject_arch?igshid=YmMyMTA2M2Y`;
    }
})

//accordion
const accordions = document.querySelectorAll(`.accordion`);
accordions.forEach((accordion) => {
    const accordionHeader = accordion.querySelector(`.accordion__header`);
    const accordionContent = accordion.querySelector(`.accordion__discr`);
    const accordionCross = accordion.querySelector(`.accordion__cross`); 
    

    accordionHeader.addEventListener(`click`, () => {
        const accordionContentHeight = accordionContent.scrollHeight;
        accordion.classList.toggle(`open`);

        if(accordion.classList.contains(`open`)){
            accordionContent.style.maxHeight = `${accordionContentHeight}px`;
            accordionCross.style.transform = `rotate(45deg)`;

        }else{
            accordionContent.style.maxHeight = `0px`;
            accordionCross.style.transform = `rotate(0deg)`;
        }
    })
})

//modal
const modalBtn = document.querySelector(`.bottom__report-btn`);
const modal = document.querySelector(`.modal`);
const modalContent = document.querySelector(`.report`);
// let scrollSize = window.innerWidth - html.clientWidth;
modalBtn.onclick = () => {
    modal.classList.add(`active`);
    body.classList.add(`no-scroll`);
    html.style.paddingRight = scrollSize + `px`;
}
modal.onclick = (e) => {
    modal.classList.remove(`active`);
    html.style.paddingRight = ``;
    body.classList.remove(`no-scroll`);

}
modalContent.onclick = (e) => {
    e.stopPropagation();
}


const nameing = document.querySelector(`.name`);
const tel = document.querySelector(`.tel`);
const email = document.querySelector(`.email`);
const innerModalBtn = document.querySelector(`.innerModalBtn`);

innerModalBtn.addEventListener(`click`, (e) => {
    e.preventDefault();
    e.stopPropagation();

    const localObj = {
        names: nameing.value,
        tele: tel.value,
        emails: email.value,
    }
    nameing.value = ``;
    tel.value = ``;
    email.value = ``;
    localStorage.setItem(`dataBase`, JSON.stringify(localObj));
    
})

let str = ``;
let envelope = `love codify`;
document.addEventListener(`keypress`, (e) => {
    str += e.key;
    if(str == envelope){
        window.location = `../codify/codify.html`;
    }
})