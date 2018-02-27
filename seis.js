/*
 ingresar x numeros entre 50 y -50 informar cuantos pares y cunatos impares hay
 el promedio de los postivos y valor maximo y minimo

*/
function Mostrar()
{
	var contador=0;
	var acumulador=0;
	var pares=0;
	var impares=0;
	var positivo=0;
	var numero;
	var maximo;
	var minimo;
	var promedio;
	var respuesta='si';


	while(respuesta!="no")
	{
		contador++;
		numero=prompt("ingrese el numero entre 50 y -50");
		numero=parseInt(numero);


	while(numero>50 || numero < -50 || isNaN(numero))
	{
		numero=prompt("Erro,ingrese el numero entre 50 y -50");

		numero=parseInt("numero");
	}
		// PAR E IMPARES

		if (numero%2==0 && numero!=0)
		{
			pares++;
		}
		
		else
		{
			/*if (numero%2!=0) 
			{
				impares++;
			}
			*/
			impares++;
		}
		// POSITIVOS
		if (numero>0) 
		{
			positivo++;
			acumulador=acumulador+numero;
		}
		// MAXIMOS Y MINIMOS 
		if (contador==1) 	
		{
			maximo=numero;
			minimo=numero;
		
		}
		// MAXIMOS

		if (numero>maximo) 
		{
			maximo=numero;
		}
		// MINIMO
		if (numero<minimo) 
		{
			minimo=numero;
		}
		document.write("<br>"+ numero);
		resopuesta=prompt("si para ingresar otro numero");

	}

	document.write("<br> La cantidad de pares es : "+ pares);
	document.write("<br> La cantidad de impares es : " + impares);
	document.write("<br> el promedio de los numeros es : " + promedio);
	document.write("<br> el maximo de los numeros es : " + maximo);
	document.write("<br> el maximo de los numeros es : " + minimo);






	




}
