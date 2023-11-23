// Задание 4.
// Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.

// Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте суммарную потребляемую мощность всех включенных приборов (передайте аргумент). 

// Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.



function ElectricAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.pluggedIn = false;
}

ElectricAppliance.prototype.plugIn = function() {
    console.log(this.name + "plugged in");
    this.pluggedIn = true;
}

ElectricAppliance.prototype.getPowerUsed = function() {
    return this.pluggedIn ? this.power : 0;
}

const lampa = new ElectricAppliance('lampa', 15);
const comp = new ElectricAppliance('comp', 500);

lampa.plugIn();
console.log(lampa.getPowerUsed() + comp.getPowerUsed());

comp.plugIn();
console.log(lampa.getPowerUsed() + comp.getPowerUsed());
