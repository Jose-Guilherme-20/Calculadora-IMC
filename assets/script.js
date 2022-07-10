var n1 = document.getElementById('n1').value;
var n2 = document.getElementById('n2').value;
var resultado = n2 /(n1 * n1)

function calculo(){
 var n1 = document.getElementById('n1').value;
var n2 = document.getElementById('n2').value;
var resultado = n2 /(n1 * n1)
 var calc = document.getElementById('resultado')


 if(resultado <18.5){
    var classificacao = 'magreza'
 } else if(resultado >18.5 && resultado <24.9){
    var classificacao = 'Normal'
 }else if(resultado >25 && resultado <29.9){
    var classificacao = 'Sobrepeso'
 }
 else if(resultado >30 && resultado <34.9){
    var classificacao = 'Obesidade 1 grau'
 }
 else if(resultado >35 && resultado <39.9){
    var classificacao = 'Obesidade 2 grau'
 }
 else if(resultado >40){
    var classificacao = 'Obesidade 3 grau'
 }else(
    classificacao = 'erro'
 )
 calc.innerHTML = resultado + '  ' + classificacao
}
