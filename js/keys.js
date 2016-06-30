//Массив клавишь для управления с кодами
var keys = {
    'W' : 87,
    'S' : 83,
    'A' : 65,
    'D' : 68
};
//Массив, в котором будут содеражться нажатые клавишу
var keyDown = {};
//Функция дает true на код
var setKey = function (keyCode) {
  keyDown[keyCode] = true;
};
//Функция дает false на код
var clearKey = function (keyCode) {
    keyDown[keyCode] = false;
};
//Функция если клавиша нажата
var isKeyDown = function (keyName) {
    return keyDown[keys[keyName]] == true;
};

//Стартуем движок

window.onkeydown = function (e) {
    setKey(e.keyCode);
};

window.onkeyup = function (e) {
    clearKey(e.keyCode);
};

