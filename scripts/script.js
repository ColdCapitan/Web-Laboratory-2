// //ФІЛЬТРИ
// document.addEventListener('DOMContentLoaded', function() {
//     const menuItems = document.querySelectorAll('.menu-item');

//     // Функція для відображення елементів певної категорії
//     function showItems(category) {
//         menuItems.forEach(function(item) {
//             if (item.dataset.category === category || category === 'all') {
//                 item.style.display = 'block';
//             } else {
//                 item.style.display = 'none';
//             }
//         });
//     }

//     // Функція для додавання обробника подій до кнопок фільтра
//     function addFilterEventListeners() {
//         const filterButtons = document.querySelectorAll('.filter-button');
//         filterButtons.forEach(function(button) {
//             button.addEventListener('click', function() {
//                 const category = this.dataset.category;
//                 showItems(category);
//             });
//         });
//     }

//     // Початкове відображення всіх елементів
//     showItems('all');

//     // Додавання обробника подій до кнопок фільтра
//     addFilterEventListeners();
// });


// ДЛЯ ОПИСУ ДАНИХ

// Масив з даними
const products = [
    {
        name: 'Хамагурі',
        description: 'Хамагурі - це справжній смак Японії. Ця страва поєднує в собі ніжність та свіжість морських продуктів. Компонентами Хамагурі є великі крабові лапки, ніжний рис та відмінний соус. Кожен ковзанець Хамагурі - це справжнє задоволення для вашого піднебіння. Погрузіться в смак сходу і насолоджуйтесь цією майстерно приготованою стравою',
        category: "roll",
        image: '../images/01.png',
        orderButton: `<button class="order-button" data-id="1"><img src="../images/bin.png" alt="Замовити">Замовити</button>`
    },
    {
        name: 'Зелений чай',
        description: 'Збалансований смак зеленого чаю ідеально підкреслить ніжний аромат свіжої суші, створюючи гармонійний дует на вашому столі', 
        category: "drinks", 
        image: '../images/Зелений чай.jfif',
        orderButton: `<button class="order-button" data-id="1"><img src="../images/bin.png" alt="Замовити">Замовити</button>`
    },
    {
        name: 'Японський лікер',
        description: 'Відкрийте для себе таємниці смаку Японії з нашим вибором японських лікерів, які надаютm вашому досвіду суші неповторну нотку екзотики та смакового розмаїття', 
        category: "drinks", 
        image: '../images/Японський лікер.png',
        orderButton: `<button class="order-button" data-id="1"><img src="../images/bin.png" alt="Замовити">Замовити</button>`
    },
    {
        name: 'Саке',
        description: 'Розкрийте таємниці традиційного японського саке, вибравши з нашого різноманітного асортименту, який гармонійно поєднується зі смаком наших найсмачніших суші', 
        category: "drinks", 
        image: '../images/Саке.jfif',
        orderButton: `<button class="order-button" data-id="1"><img src="../images/bin.png" alt="Замовити">Замовити</button>`
    },
    {
        name: 'Рінган',
        description: 'Зануртеся у світ розкоші та ніжності з нашими рінган — десертом, що поєднує в собі теплу текстуру спеціального рисового пудингу з ароматом медового соусу або карамелі, створюючи справжню симфонію смаку на вашому небіжчику', 
        category: "deserts", 
        image: '../images/Рінган.jpg',
        orderButton: `<button class="order-button" data-id="1"><img src="../images/bin.png" alt="Замовити">Замовити</button>`
    },
    {
        name: 'Темпура морозиво',
        description: 'Представляємо вам вишукану гармонію смаку та текстури з нашим темпурою морозивом — крихким обгортанням, що розтане у роті, обєднане з мяким, освіжаючим морозивом, яке робить кожен ковток справжнім задоволенням', 
        category: "deserts", 
        image: '../images/Темпура морозиво.jpg',
        orderButton: `<button class="order-button" data-id="1"><img src="../images/bin.png" alt="Замовити">Замовити</button>`
    },
    {
        name: 'Фруктовий сорбет',
        description: 'Почувайте себе освіженими та оживленими з нашим фруктовим сорбетом — ніжним, легким і повним натурального смаку вибраних фруктів, які розкривають вам всю силу природи у кожній ложці', 
        category: "deserts", 
        image: '../images/Фруктовий сорбет.jpg',
        orderButton: `<button class="order-button" data-id="1"><img src="../images/bin.png" alt="Замовити">Замовити</button>`
    },
    {
        name: 'Хосомакі',
        description: 'Хосомакі - це класична страва японської кухні, яка відзначається своєю легкістю та вишуканістю', 
        category: "roll", 
        image: '../images/08.png',
        orderButton: `<button class="order-button" data-id="1"><img src="../images/bin.png" alt="Замовити">Замовити</button>`
    },
    {
        name: 'Макі',
        description: 'Ця страва представляє собою сушений рис, норі (морська водорість) та різноманітні начинки, від яких залежить смак і вид макі. Зазвичай, макі суміш рису та оцту, яка покриває норі і використовується як основа для інших інгредієнтів', 
        category: "roll", 
        image: '../images/02.png',
        orderButton: `<button class="order-button" data-id="1"><img src="../images/bin.png" alt="Замовити">Замовити</button>`
    },
    {
        name: 'Темакі',
        description: 'Ця страва складається зі спеціально приготовленого сушеного рису, свіжих морських продуктів, овочів і соусів, які завертають у норі-водорості в конусоподібну форму. Темакі відзначається своєю легкістю і неймовірним смаком', 
        category: "roll", 
        image: '../images/03.png',
        orderButton: `<button class="order-button" data-id="1"><img src="../images/bin.png" alt="Замовити">Замовити</button>`
    },
    {
        name: 'Урамакі',
        description: ' Ця страва представляє собою роли, в яких рис і інші начинки розташовані всередині норі-водоростей, обернутих смачними інгредієнтами', 
        category: "roll", 
        image: '../images/04.png',
        orderButton: `<button class="order-button" data-id="1"><img src="../images/bin.png" alt="Замовити">Замовити</button>`
    },
    {
        name: 'Футомакі',
        description: 'Ця страва відрізняється великими рулонами суші, де рис і начинка розташовані на зворотному боці норі-водоростей, а самі рулони подаються з начинкою наверху, яка часто прикрашається таємничою та смачною підливою', 
        category: "roll", 
        image: '../images/05.png',
        orderButton: `<button class="order-button" data-id="1"><img src="../images/bin.png" alt="Замовити">Замовити</button>`
    },
    {
        name: 'Інарізуші',
        description: 'Інарізуші виготовляється з солодкого сиропу та жареного тофу, які містяться внутрішньо і вкладені в кислу рисову основу, зазвичай у формі маленьких кишеньок або мішечків.', 
        category: "roll", 
        image: '../images/06.png',
        orderButton: `<button class="order-button" data-id="1"><img src="../images/bin.png" alt="Замовити">Замовити</button>`
    },
    {
        name: 'Чірашізуші',
        description: 'Ця страва представляє собою сушений рис, утворений в певну форму, зазвичай кульковидну або конусоподібну, на якому розташовані різні види морепродуктів та інших інгредієнтів', 
        category: "roll", 
        image: '../images/07.png',
        orderButton: `<button class="order-button" data-id="1"><img src="../images/bin.png" alt="Замовити">Замовити</button>`
    },
    {
        name: 'Спрінг роли',
        description: 'Основою "Спрінг ролів" є тонкі рисові папери, які використовуються для обгортання начинки. Ця начинка може бути дуже різноманітною, включаючи свіжі овочі, листя салату, морепродукти  та різні соуси', 
        category: "roll", 
        image: '../images/010.png',
        orderButton: `<button class="order-button" data-id="1"><img src="../images/bin.png" alt="Замовити">Замовити</button>`
    },
    {
        name: 'Сашимі',
        description: 'Основною складовою "Сашимі" є свіжі скумбрі, тунець, лосось або інші види морських продуктів. ', 
        category: "roll", 
        image: '../images/011.png',
        orderButton: `<button class="order-button" data-id="1"><img src="../images/bin.png" alt="Замовити">Замовити</button>`
    },
    {
        name: 'Чіраші',
        description: 'Типові інгредієнти для "Чіраші" включають тонку смужку омара, тигрові креветки, ікру, краб, мідії та інші морські делікатеси', 
        category: "roll", 
        image: '../images/012.png',
        orderButton: `<button class="order-button" data-id="1"><img src="../images/bin.png" alt="Замовити">Замовити</button>`
    },
    {
        name: 'Кольорові суші сет',
        description: 'Кольорові суші сет - це страва, яка вражає своєю красою та різноманіттям смаків. Цей сет суші відзначається багатством кольорів, а також вишуканістю у виборі інгредієнтів.', 
        category: "roll", 
        image: '../images/09.png',
        orderButton: `<button class="order-button" data-id="1"><img src="../images/bin.png" alt="Замовити">Замовити</button>`
    },
    {
        name: 'Японське пиво',
        description: 'Цей бурштиновий ель зварений з використанням насиченого солоду та гіркого хмелю. Смаковий профіль характеризується солодкою карамельною фруктовістю', 
        category: "drinks", 
        image: '../images/Японсььке пиво.jpg',
        orderButton: `<button class="order-button" data-id="1"><img src="../images/bin.png" alt="Замовити">Замовити</button>`
    },
    {
        name: 'Устричний сік',
        description: 'Пориньте у безмежність смакових відчуттів з нашим унікальним устричним соком, який допоможе вам очистити палату перед новим смаковим випробуванням', 
        category: "drinks", 
        image: '../images/Устричний сік.jpg',
        orderButton: `<button class="order-button" data-id="1"><img src="../images/bin.png" alt="Замовити">Замовити</button>`
    },
    {
        name: 'Моті',
        description: 'Зануртесь у ніжний світ японських смаків з нашими моті — рисовими пиріжками, що тануть у роті, розкриваючи аромат соєвої пастили або зеленого чаю, які поглиблюють вашу смакову подорож', 
        category: "deserts", 
        image: '"../images/Моті.jpg',
        orderButton: `<button class="order-button" data-id="1"><img src="../images/bin.png" alt="Замовити">Замовити</button>`
    },
    {
        name: 'Матча тірамісу',
        description: 'Дозвольте собі на мить розкішного задоволення з нашим матча тірамісу — ніжним шаром зеленого чаю, що розкривається в кожному шматочку цього класичного десерту, що наповнений смаком та ароматом вишуканості', 
        category: "deserts", 
        image: '../images/Матча тірамісу.jpg',
        orderButton: `<button class="order-button" data-id="1"><img src="../images/bin.png" alt="Замовити">Замовити</button>`
    }
];

function loadProducts(category) {
    let list = document.getElementById('filter-button');
    let productElements = '';
    let productsFiltered;

    if (category !== null) {
        productsFiltered = products.filter(elem => elem.category === category);
    } else {
        productsFiltered = products;
    }

    productsFiltered.forEach(elem => {
        let li = `<li><div><h2>${elem.name}</h2>${elem.description}<image src="${elem.image}"/>${elem.orderButton}</div></li>`;
        productElements += li;
    });

    list.innerHTML = productElements;
}

const filterButtons = document.querySelectorAll('.filter-button');
filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        loadProducts(category !== 'all' ? category : null);
    });
});

loadProducts(null);

// НЕМОДАЛЬНЕ ВІКНО (КЕШ)
// Перевірка чи була прийнята пропозиція
if (!localStorage.getItem('subscriptionAccepted')) {
    setTimeout(function () {
        document.getElementById('myModal').style.display = "flex";
    }, 5000);
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

//СПАМ!!!
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
    }, 5000); // 5000 мс = 5 секунд
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
}, 5000);


