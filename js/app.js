// Пример для добавления дополнительных действий или анимаций
// Если требуется, вы можете дополнительно управлять музыкой или анимациями

// Пример запуска анимации через GSAP
document.addEventListener("DOMContentLoaded", () => {
    console.log("Страница загружена, готов к анимациям и действиям!");
    // Добавление анимации или других функций по желанию

    // Пример скрытия текста через анимацию GSAP
    TweenMax.to(".title", 2, { opacity: 0, y: -50 });

    // Дополнительные функции для работы с музыкой или текстом
});

// Функция для изменения текста или его анимации
function updateTextContent(id, newText) {
    let element = document.getElementById(id);
    if (element) {
        element.textContent = newText;
    }
}

// Пример для работы с музыкой
function toggleMusic() {
    const audio = document.getElementById('background-music');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

// Пример отслеживания событий
document.querySelector("body").addEventListener("click", () => {
    console.log("Страница была кликнута!");
});
