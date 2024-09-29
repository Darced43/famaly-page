// import './photo-swipe-linght-box.js';

document.querySelectorAll('[data-cargo-plus]').forEach(function (block) {
    const accordions = block.querySelectorAll('.cargo-plus__accordion-block');
    const images = block.querySelectorAll('[data-cargo-plus-img]');

    accordions.forEach(function (accordion, index) {
        const input = accordion.querySelector('.cargo-plus__accordion-input');
        const accordionTitle = accordion.querySelector('.cargo-plus__accordion-title');

        // Функция для обновления состояния аккордеонов и отображения картинок
        function updateAccordionState() {
            accordions.forEach(function (acc, accIndex) {
                const accInput = acc.querySelector('.cargo-plus__accordion-input');
                if (accIndex !== index) {
                    accInput.checked = false; // Закрыть все аккордеоны, кроме текущего
                }
            });

            // Обновляем состояние изображений
            if (window.innerWidth > 767){
                images.forEach(function (img, imgIndex) {
                    if (index === imgIndex && input.checked) {
                        img.style.display = 'block'; // Показать картинку
                    } else {
                        img.style.display = 'none'; // Скрыть картинку
                    }
                });
            }

        }

        // Добавляем обработчик на клик по заголовку аккордеона
        accordionTitle.addEventListener('click', function (e) {
            e.preventDefault();

            // Переключаем состояние checked вручную
            input.checked = !input.checked;

            // Обновляем состояние аккордеонов и изображений
            updateAccordionState();
        });

        // Инициализация состояния при загрузке страницы
        if (index === 0) {
            input.checked = true;  // Оставляем первый аккордеон открытым
        } else {
            input.checked = false; // Все остальные закрыты
        }
    });
});

const openModal = document.getElementById('open-modal');
const closeModal = document.querySelector('[data-close-modal]');
const videoModal = document.getElementById('video-modal');
const iframe = document.querySelector('.cargo-video__fancybox-iframe');

// Открытие модального окна при клике
openModal.addEventListener('click', function() {
    videoModal.style.display = 'flex'; // Меняем на 'flex' для показа модалки
    document.body.style.overflow = 'hidden';
    // Включаем воспроизведение видео
    iframe.src += "?autoplay=1"; // Добавляем параметр autoplay
});

// Закрытие модального окна
closeModal.addEventListener('click', function() {
    videoModal.style.display = 'none';
    document.body.style.overflow = 'auto';

    // Останавливаем видео
    iframe.src = iframe.src.replace("?autoplay=1", ""); // Убираем параметр autoplay
});

// Закрытие модалки при клике на задний фон
videoModal.addEventListener('click', function(event) {
    if (event.target === videoModal) {
        console.log("Клик по фону модалки"); // Добавлено для отладки
        videoModal.style.display = 'none';

        // Останавливаем видео
        iframe.src = iframe.src.replace("?autoplay=1", ""); // Убираем параметр autoplay
    }
});


const showButton = document.querySelector('[data-comercial-block-btn]');
const showButtonAdvantages = document.querySelector('[data-advantages-block-btn]');

const infoItems = document.querySelectorAll('.cargo-comercial__info-item');
const infoItemsAdvantages = document.querySelectorAll('.cargo-advantages__info-item');
let isExpanded = false;

showButton.addEventListener('click', function() {
    if (window.innerWidth < 768) {
        isExpanded = !isExpanded;

        infoItems.forEach((item, index) => {
            if (index > 1) {
                if (isExpanded) {
                    item.classList.add('show');  // Добавляем класс для показа
                } else {
                    item.classList.remove('show'); // Убираем класс для скрытия
                }
            }
        });

        showButton.textContent = isExpanded ? 'Скрыть' : 'Показать все';
    }
});

showButtonAdvantages.addEventListener('click', function() {
    if (window.innerWidth < 768) {
        isExpanded = !isExpanded;

        infoItemsAdvantages.forEach((item, index) => {
            if (index > 1) {
                if (isExpanded) {
                    item.classList.add('show');  // Добавляем класс для показа
                } else {
                    item.classList.remove('show'); // Убираем класс для скрытия
                }
            }
        });

        showButton.textContent = isExpanded ? 'Скрыть' : 'Показать все';
    }
});


