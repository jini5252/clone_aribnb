window.addEventListener('scroll', function() {
    var this_scroll = window.scrollY;
    if(this_scroll > 100){
        document.querySelector('.search_top').classList.add('active');
        document.querySelector('.header_bottom').classList.add('hide');
        document.querySelector('.header').classList.add('fixed');
        document.querySelector('.main_tab_area').classList.add('fixed');

    }else{
        document.querySelector('.search_top').classList.remove('active');
        document.querySelector('.header_bottom').classList.remove('hide');
        document.querySelector('.header').classList.remove('fixed');
        document.querySelector('.main_tab_area').classList.remove('fixed');
    }

});

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