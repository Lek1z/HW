// // Задание №1

var a = 1;
var b = 1;
var c, d;
c = ++a; alert(c);           // 2, т.к. команда ++a сначала выполняет действие a+1, а затем присваивает c a
d = b++; alert(d);           // 1, т.к. команда b++ сначала присваивает d b, а затем выполняет действие b+1
c = (2+ ++a); alert(c);      // 5, т.к. на данный момент a=2 и действия происходят аналогично строке 6
d = (2+ b++); alert(d);      // 4, т.к. на данный момент b=2 и действия происходят аналогично строке 7
alert(a);                    // 3, т.к. за всю программу было 2 инкремента
alert(b);                    // 3, т.к. за всю программу было 2 инкремента

// // Задание №2

a = 2;
var x = 1 + (a *= 2); console.log(x); // 5

// Задание №3

a = +prompt("Число a");
b = +prompt("Число b");
if (a >= 0 || b >= 0) {
    if (a >=0 && b >= 0) {
        console.log(a-b);
    } else {
        console.log(a+b);
    };
} else {
    console.log(a*b);
};

// Задание №4

a = 5;
switch (a) {
    case 0:
        console.log(0);
    case 1:
        console.log(1);
    case 2:
        console.log(2);
    case 3:
        console.log(3);
    case 4:
        console.log(4);
    case 5:
        console.log(5);
    case 6:
        console.log(6);
    case 7:
        console.log(7);
    case 8:
        console.log(8);
    case 9:
        console.log(9);
    case 10:
        console.log(10);
    case 11:
        console.log(11);
    case 12:
        console.log(12);
    case 13:
        console.log(13);
    case 14:
        console.log(14);
    case 15:
        console.log(15);    
};

// Задание №5

function sum(a, b) {
    return a+b;
};
function sub(a, b) {
    return a-b;
};
function mult(a, b) {
    return a*b;
};
function div(a, b) {
    return a/b;
};

console.log(sum(4, 2));
console.log(sub(4, 2));
console.log(mult(4, 2));
console.log(div(4, 2));

// Задание №6

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'sum':
            return arg1+arg2;
            break;
        case 'sub':
            return arg1-arg2;
            break;
        case 'mult':
            return arg1*arg2;
            break;
        case 'div':
            return arg1/arg2;
            break;
    }
}

console.log(mathOperation(4, 2, 'sum'));
console.log(mathOperation(4, 2, 'sub'));
console.log(mathOperation(4, 2, 'mult'));
console.log(mathOperation(4, 2, 'div'));