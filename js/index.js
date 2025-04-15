window.addEventListener('scroll', function() {
    var this_scroll = window.scrollY;
    if(this_scroll > 100){

        document.querySelector('.search_wrap.top').classList.add('active');
        document.querySelector('.header_bottom').classList.add('hide');
        document.querySelector('.header').classList.add('fixed');
        document.querySelector('.main_tab_area').classList.add('fixed');

    }else{
        document.querySelector('.search_wrap.top').classList.remove('active');

        document.querySelector('.header_bottom').classList.remove('hide');
        document.querySelector('.header').classList.remove('fixed');
        document.querySelector('.main_tab_area').classList.remove('fixed');
    }

});
// window.addEventListener('scroll', function() {
//   var this_scroll = window.scrollY;
//   if(this_scroll > 100){


//   }else{

//   }

// });
document.querySelector('.btn_translate').addEventListener('click', function(event) {
    document.querySelector('.pop_language').classList.add('open');
    document.body.style.overflow = 'hidden';
  });
  document.querySelector('.social_translate button').addEventListener('click', function(event) {
    document.querySelector('.pop_language').classList.add('open');
    document.body.style.overflow = 'hidden';
  });
document.querySelector('.pop_close').addEventListener('click', function(event) {
    document.querySelector('.pop_language').classList.remove('open');
    document.body.style.overflow = '';
 });

document.querySelector('.btn_filter').addEventListener('click', function(event) {
    document.querySelector('.width_type02').style.display = 'block';
    document.body.style.overflow = 'hidden';
  });
  document.querySelector('.width_type02 .pop_close').addEventListener('click', function(event) {
    document.querySelector('.width_type02').style.display = 'none';
    document.body.style.overflow = '';
  });


  /*지도 표시하기*/
  const thumbnail_pos = document.querySelector('.main_contents_list');
  const rect = thumbnail_pos.getBoundingClientRect().bottom;
  const desc_map = document.querySelector('.desc_map');
  console.log(rect);
  window.addEventListener('scroll', function() {
    var this_scroll = window.scrollY;
    if(this_scroll < 500){
      desc_map.classList.add('fixed');
    }else{
      desc_map.classList.remove('fixed');
    }
});


/*like 버튼 */

document.querySelector('.slide_like button').addEventListener('click', function(event) {
  element.classList.toggle('disabled');
});
/* 팝업 아코디언  */

// const acc_btn =  document.querySelector('.acc_menu_btn button');

// acc_btn.forEach( button =>{
// button.addEventListener('click', function(){
//   const siblings = Array.from(this.parentElement.children);
//   siblings.forEach(el => {})
//   });
// });

// let acc_btn = $('.acc_menu_btn button');

// acc_btn.on('click', function () {
//   $(this).addClass('open');
//   const accCont = $(this).siblings('.acc_cont');
//   accCont.css('display', 'block');
// });
const buttons = document.querySelectorAll('.acc_menu_btn button');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    const siblings = Array.from(this.parentElement.children);
    siblings.forEach(el => {
      if (el !== this && el.classList.contains('acc_cont')) {
        el.classList.add('open'); 
      }
    });
  });
});