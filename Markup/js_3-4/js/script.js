﻿    var DOMCreator = {};
DOMCreator.createElement = function (tag, parent, className, innerHTML) {
    var elem = document.createElement(tag);
    parent.appendChild(elem);
    if (className) {
        elem.className = className;
    }
    if (innerHTML) {
        elem.innerHTML = innerHTML;   
    }
    return elem;
};
DOMCreator.createCheckBox = function(parent, text) {
    var div = DOMCreator.createElement('div', parent, 'checkbox');
    var label = DOMCreator.createElement('label', div);
    var input = DOMCreator.createElement('input',label);
    input.type = 'checkbox';
DOMCreator.createElement('p', label, '', text);
}; 
    window.onload = function() {
    var div = DOMCreator.createElement('div', document.body, 'header');
DOMCreator.createElement('h3', div, '', 'Тест по программированию');
    var content = DOMCreator.createElement('ul', document.body, 'content');
    for (var i = 1; i <= 3; i++) {
    var li1 = DOMCreator.createElement('li', content);
DOMCreator.createElement('h4', li1, '', i+'.Вопрос №'+i);
    var ul = DOMCreator.createElement('ul', li1);
    for (var j = 1; j <= 3; j++) {
        var li2 = DOMCreator.createElement('li', ul);
DOMCreator.createCheckBox(li2, 'Вариант ответа №'+j );
    }
    }
    var button = DOMCreator.createElement('div', document.body, 'button');
    var btn = DOMCreator.createElement('div', button, 'btn btn-primary', 'Проверить мои результаты');
    btn.type = 'button';
};