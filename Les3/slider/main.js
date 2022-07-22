const prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next'),
      slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlie = n => { // эта функция удаляет класс .active у всех элементов, а потом добавляет его тому слайду, который сейчас активный
    for(slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const activeDot = n => { // эта функция удаляет класс .active у всех элементов, а потом добавляет его той кнопке, который сейчас активна
    for(dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const prepareCurrentSlide = ind => { // вызов двух функций заменили на одну
    activeSlie(ind);
    activeDot(ind);
}

const nextSlide = () => {
    if(index == slides.length - 1) {
        index = 0;
        // activeSlie(index);
        // activeDot(index);
        prepareCurrentSlide(index);
    } else {
        index++;
        // activeSlie(index);
        // activeDot(index);
        prepareCurrentSlide(index);
    }
}

const prevSlide = () => {
    if(index == 0) {
        index = slides.length - 1;
        // activeSlie(index);
        // activeDot(index);
        prepareCurrentSlide(index);
    } else {
        index--;
        // activeSlie(index);
        // activeDot(index);
        prepareCurrentSlide(index);
    }
}

dots.forEach((item, indexDot) => { //этот способ привязки каждой точки к нашему index(который отвечает за активный в данный момент элемент)
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
    })
})

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
      
let timer = setInterval(function() {
    if(index == 0) {
        index = slides.length - 1;
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }
  },2000);
