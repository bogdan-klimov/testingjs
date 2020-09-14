let name = prompt("Как мне тебя називать?");

if (name) {
    alert(`Привет ${name}! Я создал не большой тест, но он не простой, сможеш пройти? Давай проверем!(Все ответи с маленькой букви!)`);
    let password = prompt("Для продолжения нужно ввести пароль.");
    if (password == "пароль") {
        alert("Первое задание по зади, поздраляю!")
        alert("Следуищее задание будет сложнее")
        let legs = prompt("В комнате было 12 цыплят, 3 кролика, 5 щенят, 2 кошки, 1 петух и 2 курицы. Сюда зашёл хозяин с собакой. Сколько в комнате стало ног?");
        if (legs == "2") {
            alert ("Моледец, ты уже прошел половину!");
            let wheel = prompt("Какое колесо не крутится при правом развороте?");
            if (wheel == "запасное") {
                alert("Последние задание!");
                let convarsation = prompt("Завязать можно, а развязать нельзя.");
                if (convarsation = "разговор"){
                    document.getElementById("h1");
                    h1.style.opacity = 1;
                } else {
                    alert("Ой ошибочка!")
                    window.location.reload(false);   
                }
            } else {
                alert("Ой ошибочка!")
                window.location.reload(false);   
            }
        } else {
            alert("Ой ошибочка!")
            window.location.reload(false);  
        }
    } else {
        alert("Ой ошибочка!")
        window.location.reload(false); 
    }
} else {
    window.location.reload(false); 
}

