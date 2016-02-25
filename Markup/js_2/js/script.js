(function(){
    var i;
    var arr = [];
        for (var i = 1; i <= 5; i++) {
        arr.push(prompt('Введите имя №' +i));
        }
    var name = prompt('Введите имя для сравнения');
    (arr.indexOf(name) != -1) ? (alert(name+', вход успешен')) : (alert('Имя'+name+' не найдено!!!'));
       /*for (i = 0; i < arr.length; i++){
         if (arr[i] == name){
           alert(name+', вы успешно вошли');
           return;
         }
         }
         alert('Имя '+name+' не найдено!!!');*/
}) ();