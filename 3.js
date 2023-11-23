// Задание 3.

// Написать функцию, которая создает пустой объект, но без прототипа.

const obj = emptyObj();

function emptyObj() {
    return new Object();
}