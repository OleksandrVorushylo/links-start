// Hints
// Take index of element in HTMLList
// let index = [].indexOf.call(
//   peopleArr,
//   document.querySelector(`.people.active`)
// );

$(document).ready(function ($) {
  // AOS animation init
  AOS.init({
    startEvent: "load",
    disableMutationObserver: false,
  });
  AOS.refresh(true);

  // Default Functions
  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function hasSomeParentTheClass(element, classname) {
    try {
      if (element.className.split(" ").indexOf(classname) >= 0) return true;
    } catch {
      return false;
    }
    return (
      element.parentNode && hasSomeParentTheClass(element.parentNode, classname)
    );
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const granimInstance = new Granim({
    element: '#canvas-complex',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states: {
      "default-state": {
        gradients: [
          [
            {color: '#833ab4', pos: .2},
            {color: '#fd1d1d', pos: .8},
            {color: '#38ef7d', pos: 1}
          ], [
            {color: '#40e0d0', pos: 0},
            {color: '#ff8c00', pos: .2},
            {color: '#ff0080', pos: .75}
          ],
        ]
      }
    }
  });

  // lottie.loadAnimation({
  //   container: document.querySelector(`.lottie-logo`),
  //   renderer: "svg",
  //   loop: true,
  //   autoplay: true,
  //   path: "./js/lottie/logoloop.json",
  // });

  // ---- ПРИМЕРЫ ФУНКЦИЙ ----

  // Аккордеон

  const accordion = () => {
    const btn = document.querySelectorAll('.accordion-btn'),
        item = document.querySelectorAll('.accordion-item');
    const removeContent = () => {
      const btnActive = document.querySelectorAll('.accordion-btn--active'),
          itemActive = document.querySelectorAll('.accordion-item--active');
      btnActive.forEach((elem)=>{
        elem.classList.remove('accordion-btn--active');
      })
      itemActive.forEach((elem)=>{
        elem.classList.remove('accordion-item--active');
      })
    };
    if (document.querySelector('.accordion')) {
      btn.forEach((elem, index) => {
        elem.addEventListener('click', (event) => {
          let target = event.target;
          target = target.closest('.accordion-btn');
          if (target.closest('.accordion-btn--active')) {
            elem.classList.remove('accordion-btn--active')
            item[index].classList.remove('accordion-item--active')
          } else {
            removeContent(); // -- Не запускать, если не нужно, что бы предыдущий элемент закрывался автоматически
            elem.classList.toggle('accordion-btn--active')
            item[index].classList.toggle('accordion-item--active')
          }
        })
      })
    }
  };
  accordion();

  // Табы

  const tabs = () => {
    const tabsParent = document.querySelector('.tab-links'),
        tab = document.querySelectorAll('.tab-link'),
        tabContent = document.querySelectorAll('.tab-item');

    const toggleTabContent = (index) => {
      for(let i = 0; i < tabContent.length; i++) {
        if (index === i) {
          tab[i].classList.add('tab-link--active')
          tabContent[i].classList.add('tab-item--active')
        } else {
          tab[i].classList.remove('tab-link--active')
          tabContent[i].classList.remove('tab-item--active')
        }
      }
    }
    if (document.querySelector('.tab-links')) {
      tabsParent.addEventListener('click', event => {
        let target = event.target;
        target = target.closest('.tab-link');
        if (target) {
          tab.forEach((elem, i) => {
            if (elem === target) {
              toggleTabContent(i)
            }
          })
        }
      })
    }
  }
  tabs();
});
