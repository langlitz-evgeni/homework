let val = Number(prompt("Введите число"));
let pov = parseInt(prompt("Введите степень"));

function pow(val, pov) {
    if (pov > 1) {
        return val * pow(val, --pov);
    }
    else if (pov == 1) {
        return val;
    }
    else if (pov == 0) {
        return 1;
    }
    else if (pov < 0) {
        pov = -pov;
        return 1 / (val * pow(val, --pov));
    }
}
alert(pow(val, pov)); //не могу понять как написать скрипт для дробной или отрицательной степени, по этому задал переменную Pov - целочисленной