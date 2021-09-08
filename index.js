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
loginForm.children[0].addEventListener("dblclick", function(event) {
    // свойство события - всплывает ли оно
    console.log(event.bubbles);

    alert("input")

    // остановить преедачу события (всплытие)
    // используется редко, в крайних случаях
    // event.stopPropagation();
})

loginForm.addEventListener("dblclick", function() {
    // target - кто вызвал событие
    // console.log(event.target) // input

    // currentTarget - какой элемент слушает событие
    // console.log(event.currentTarget) // form

    alert("form")
})

document.body.addEventListener("dblclick", function () {
    alert("body")
})
