/* найти элемент формы из js 
    и добавить ему событие submit
    в качестве колбэка записать функцию
    запускающую alert(event)
*/

/* 
  Событие формы 
  + 
  поведение по умолчанию 
  */
const loginForm = document.getElementById("login-form")

function submitEvent (event) {
    alert(event)

    // остановить поведение по умолчанию (отправку формы)
    event.preventDefault()

    // target - кто вызвал событие
    // console.log(event.target) // form

    // получить значение первого input внутри (child) формы (target)
    console.log(event.target.children[0].value)
}

// событие отправки формы (нажатие на кнопку type submit)
loginForm.addEventListener("submit", submitEvent)




/* 
  Всплытие событий
  */

// событие источника
loginForm.children[0].addEventListener("dblclick", function(event) {
    // узнать всплывает ли событие
    console.log(event.bubbles);

    alert("input")

    // остановить преедачу события (всплытие)
    // используется редко, в крайних случаях
    // event.stopPropagation();
})

// при всплытии оповещение об этом событии 
// получат также элементы выше по дереву (currentTraget)
// после того как завершится колбэк у источника (target)
loginForm.addEventListener("dblclick", function(event) {
    // target - кто вызвал событие
    console.log(event.target) // input

    // currentTarget - какой элемент слушает событие
    console.log(event.currentTarget) // form

    alert("form")
})

document.body.addEventListener("dblclick", function () {
    alert("body")
})





/* 
  data-* атрибуты
*/
function dataAttributes (event) {
    event.preventDefault()

    /* цикл по всем инпут полям */
    for(let i = 0; i < event.target.children.length; i++) {

        // получение одного input
        const input = event.target.children[i]

        // проверка значение обязательное ли поле
        if (input.getAttribute("data-required") === "true") {
            // если поле обязательно

            // и поле пустое
            if(input.value === "") {
                // то вывести сообщение
                alert(`Required ${input.name} Field`)
            }
        }
    }
}
// второй обработчик на событие submit
// запустится вторым
loginForm.addEventListener("submit", dataAttributes)
