/*-----FUNCIONES PARA LA CALCULADORA-----*/

//1) Digitar números y signos operacionales de la calculadora
function num(x){
    document.getElementById('pantalla').value += x;
}

//2) Realizar operaciones matemáticas
function resultado(){
    var result = eval(document.getElementById('pantalla').value);
    document.getElementById('pantalla').value = result;
}

//3) Limpiar lo almacenado en la calculadora
function Inicializar(y){
    document.getElementById('pantalla').value = y;
}