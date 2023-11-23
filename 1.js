// Задание 1.

// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.


const car = {
    title: 'Audi',
    engine: '2.0',
    color: 'white'
  };
  
  hasOwnProperty(car)
  
  function hasOwnProperty(){
    for (let key in car) {
  if (car.hasOwnProperty(key)) {
          console.log(key);
      }   
  }
  }