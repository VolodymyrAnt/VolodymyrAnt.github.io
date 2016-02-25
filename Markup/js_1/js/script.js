(function(){
    var a = prompt('Введите число');
    var b = prompt('Введите степень');
    var pow = function( x, y) {
    var res = x;
        if (y === 0){
            return 1;
        }
        for (var i = 2; i <= y; i++) {
             res *= x;
        }
               return res;
      };
        console.log(pow(a, b));
}) ();