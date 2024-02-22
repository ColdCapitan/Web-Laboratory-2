// НЕМОДАЛЬНЕ ВІКНО (КЕШ)
// Перевірка чи була прийнята пропозиція
if (!localStorage.getItem('subscriptionAccepted')) {
    setTimeout(function () {
        document.getElementById('myModal').style.display = "flex";
    }, 3000); // Затримка для немодального вікна: 3 секунди
}

// Функція прийняття пропозиції
function accept() {
    localStorage.setItem('subscriptionAccepted', true);
    document.getElementById('myModal').style.display = "none";
    // Показуємо коротке повідомлення про подяку за підписку
    alert('Дякуємо за приєднання до наших повідомлень!');
}

// Функція відхилення пропозиції
function reject() {
    document.getElementById('myModal').style.display = "none";
}

// МОДАЛЬНЕ ВІКНО
// Отримання модального вікна та кнопки закриття
let modal = document.getElementById('modal');
let closeButton = document.getElementById('closeButton');

// Змінна для зберігання часового інтервалу
let countdown;

// Відображення модального вікна з рекламою через 5 секунд після завантаження сторінки
window.onload = function () {
    setTimeout(function () {
        modal.style.display = 'block';
        startCountdown();
    }, 7000); // Затримка для модального вікна: 7 секунд
};

// Функція для розпочатку обратного відліку
function startCountdown() {
    let seconds = 5;
    countdown = setInterval(function () {
        document.getElementById('countdownTimer').innerHTML = 'Зачекайте, щоб закрити... ' + seconds;
        if (seconds <= 0) {
            clearInterval(countdown);
            closeButton.classList.add('active');
            document.getElementById('countdownTimer').innerHTML = 'Можете закрити рекламу';
        }
        seconds--;
    }, 1000); // 1000 мс = 1 секунда
}

// Обробник події для кнопки закриття
closeButton.onclick = function () {
    modal.style.display = 'none';
};

// Активуємо кнопку закриття через 5 секунд
setTimeout(function () {
    closeButton.classList.add('active');
}, 7000); // Затримка для активації кнопки закриття модального вікна: 7 секунд
