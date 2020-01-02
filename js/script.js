let iframe = document.querySelector('#iframe');
iframe.addEventListener('load', () => {
    document.querySelector('.iframe-bg').style.display = 'none';
    iframe.style.display = 'block';
});
iframe.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.380511050395!2d39.73730458197064!3d54.63358728441784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4149e3ca7d798a8b%3A0xe7cd4dc08fecf2ef!2z0YPQuy4g0KHQvtC70L3QtdGH0L3QsNGPLCAxMiwg0KDRj9C30LDQvdGMLCDQoNGP0LfQsNC90YHQutCw0Y8g0L7QsdC7Liwg0KDQvtGB0YHQuNGPLCAzOTAwMDA!5e0!3m2!1sru!2sua!4v1577717225331!5m2!1sru!2sua');

$(document).ready(function(){
    $('.slick').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        responsive: [
            {
              breakpoint: 580,
              settings: {
                slidesToShow: 2,
              }
            },
            {
                breakpoint: 470,
                settings: {
                  slidesToShow: 1,
                }
              },
        ]
    });
});