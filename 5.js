// Задание 5.

// Переписать консольное приложение из предыдущего юнита на классы.

class ElectricAppliance {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.pluggedIn = false;
    }

    plugIn() {
        console.log(this.name + "plugged in");
        this.pluggedIn = true;
    }

    getPowerUsed() {
        return this.pluggedIn ? this.power : 0;
    }
}

const lampa = new ElectricAppliance('lampa', 15);
const comp = new ElectricAppliance('comp', 500);

lampa.plugIn();
console.log(lampa.getPowerUsed() + comp.getPowerUsed());

comp.plugIn();
console.log(lampa.getPowerUsed() + comp.getPowerUsed());

