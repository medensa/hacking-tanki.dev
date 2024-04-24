// document.getElementById('main-form').addEventListener("submit", checkForm); // додаємо обробчик подій до елементу main-form.            Запис - ("Подія яку потрібно відслідкувати", Назва форми) ################## Перший і довший варіант

document.getElementById('main-form').addEventListener("submit", function (e) { // скорочений варіант з занесенням під функцію одразу всього
    e.preventDefault(); // метод, який відключає стандартну поведінку події (перезагрузку сторінки)
    let el = document.getElementById('main-form'); // змінна яка містить у собі всю форму
    // let name = document.getElementById('name').value; // один з варіантів звернення до об'єкту в формі
    let name = el.name.value; // звернення до поля через атрибут name // value - витягує значення з поля
    let email = el.email.value;
    let pass = el.pass.value;
    let repass = el.repass.value;
    let state = el.state.value;
    let diamond = el.diamond.value;

    let fail = ""; // створення змінної для помилок

    if (name == "" || pass == "" || state == "" || email == "" || diamond == "") // якщо (імя |або| пароль |або| стать має пусте значення)
        fail = "Заповніть всі поля";
    else if(name.length <= 1 || name.length > 50) // інакше якщо - (довжина змінної name менше або дорівнює 1 |АБО| більша за 50)
        fail = "Введіть корректне ім'я";
    else if(pass != repass) // інакше якщо - (пароль не дорівнює != перевірці паролю)
        fail = "Паролі повинні співпадати";
    else if(pass.split("&").length > 1) // інакше якщо - (Розділення поля pass знаком("&').Довжина поля > 1) // умова, яка розділяє поле на до і після елементу Амперсант &, Тому кількість елементів у полі буде як мінімум 2, що задовільнить умову для помилки
        fail = "Некорректний пароль";
    else if(!email.includes(".")) // інакше якщо - (!пошта.має в собі("крапку")) / ! - означає що параметр змінюється на прямо протилежний, тобто: якщо - (пошта не має в собі крапку) 
        fail = "Невірно вказаний Email";
    else if(diamond > 1000000)
        fail = "Забагато кристалів";

    if(fail != "") { // якщо(змінна для помилок не дорівнює != пустій строці) // тобто в змінну щось попало
        let er = document.getElementById('error');
        er.innerHTML = fail // виводить раніше присвоєне значення змінної fail всередину елементу по тегу
        er.style.marginBottom = "10px";
        er.style.marginLeft = "auto";
        er.style.marginRight = "auto";
        er.style.textAlign = "center";
        er.style.height = "20px"
        er.style.width = "200px";
        er.style.borderRadius = "5px";
        er.style.backgroundColor = "#000000"; 
    } else {
        alert("Вітання! Всі дані заповнені правильно, накрутка здійснюється, щоб відслідкувати тисніть ОК");
        window.location = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'; // звернення до глобального об'єкту window, а також його властивості location, що контролює вікно в якому буде знаходитись користувач, саме тут його перенаправили на ютуб 
    }
});