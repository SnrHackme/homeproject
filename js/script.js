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
    $("#phone1").mask("+38(999) 999-9999");
    $("#phone2").mask("+38(999) 999-9999");
    $("#phone3").mask("+38(999) 999-9999");
});

let filter = document.querySelectorAll('.popular-filter-list__item');
filter.forEach(element => {
    element.addEventListener('click' , (e) => {
        let mass = document.querySelectorAll('.popular-grid-item__name');
        mass.forEach( elem => {
            elem.parentElement.style.display = 'block';
            if(!elem.classList.contains(e.target.dataset.filter)) {
                elem.parentElement.style.display = 'none';
            }
        });
    });
});
function overlay(opacity,classToAppend = 'body') {
    let classAdd =  document.querySelector(classToAppend);
    if (opacity == 0) {
        classAdd.removeChild(document.querySelector('.overlay'));
        return;
    }
    let overlay = document.createElement('div');
    overlay.className='overlay';
    classAdd.appendChild(overlay);
    overlay.style.opacity = opacity;
}
document.querySelectorAll('.popular-grid-item__btn').forEach( elem => {
    elem.addEventListener('click', () => {
        overlay(0.7,'body');
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.overlay').addEventListener('click', () => {
            overlay(0,'body')
            document.querySelector('.modal').style.display = 'none';
        });
        document.querySelector('.close').addEventListener('click', () => {
            overlay(0,'body')
            document.querySelector('.modal').style.display = 'none';
        });
    })
});
document.querySelector('.form__btn').addEventListener('click', () => {
        overlay(0,'body')
        document.querySelector('.modal').style.display = 'none';
});