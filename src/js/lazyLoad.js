"use strict";
const sections = document.querySelectorAll(".lazy");

// Функция-обработчик
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Добавляем класс для анимации появления
      entry.target.classList.add("visible");
      // Прекращаем наблюдение
      observer.unobserve(entry.target);
    }
  });
}

// Создаем наблюдателя с параметрами
const observer = new IntersectionObserver(handleIntersection, {
  threshold: 0.15,
});

// наблюдатель
sections.forEach((section) => {
  observer.observe(section);
});
