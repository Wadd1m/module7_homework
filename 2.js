// Задание 2.

// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.


const objCar = {
    title: 'Audi',
    engine: '2.0',
    color: 'white'
  };

console.log(isProperty(objCar, 'color'));

function isProperty(object, property){
   if (object.hasOwnProperty(property)) {
        return true;
    } else {
        return false;
    }
}