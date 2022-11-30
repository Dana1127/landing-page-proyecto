
const buttonAdministrator = document.getElementById('button-admin')

//para que el boton de admin aparzca despues
export function validateUserState(userIsSigned){
    if(userIsSigned){
        buttonAdministrator.setAttribute('disabled', true)
    }else{
        buttonAdministrator.setAttribute('disabled', false)
    }
} 


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }
  });

  