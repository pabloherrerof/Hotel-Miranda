const prevButton = document.querySelector('.room-card__button-prev');
const nextButton = document.querySelector('.room-card__button-next');

const menuPrevButton = document.querySelector('.menu__button-prev');
const menuNextButton = document.querySelector('.menu__button-next');

const swiper = new Swiper('.swiper--handpicked-rooms', {
   direction: "horizontal",
   loop: true,

   navigation: {
    nextEl: nextButton,
    prevEl: prevButton, 
  },

   
  });


  const swiperCoreFeatures = new Swiper('.swiper--core-features', {
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,
 
    pagination: {
      el: '.swiper-pagination--core-features',
      clickable: true,
    },
 
    
   });
   
  
   const swiperMenu = new Swiper('.swiper--menu', {
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,
 
    navigation: {
     nextEl: menuNextButton,
     prevEl: menuPrevButton, 
   },
 
    
   });
 
   
   const swiperMenuPhoto = new Swiper('.swiper--menu__photo', {
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,
 
    pagination: {
      el: '.swiper-pagination--menu__photo',
      clickable: true,
    },
 
    
   });

   const swiperCoreFeaturesDark = new Swiper('.swiper__core-features--dark', {
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,
 
    pagination: {
      el: '.swiper-pagination__core-features--dark',
      clickable: true,
    },
 
    
   });

   const swiperFunFacts = new Swiper('.swiper__fun-facts__slider', {
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,
 
    pagination: {
      el: '.swiper-pagination--fun-facts',
      clickable: true,
    },
 
    
   });