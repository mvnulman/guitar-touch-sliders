const slider = document.querySelector('.slider-container'), 
slides = Array.from(document.querySelectorAll('.slide'))

let isDragging = false,
    startPos = 0,
    currentTranslate = 0,
    prevTranslate = 0,
    animationID = 0,
    currentIndex = 0

  slides.forEach((slide, inde) => {
      const slideImage = slide.querySelector('img')
      slideImage.addEventListener('dragstart', (e) => e.preventDefault())

    //Touch events

    // Mouse events


  })

