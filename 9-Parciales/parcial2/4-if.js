/*Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
no se valida y no se usa whilesolo IF.
si ingreso dos numeros, si son iguales se concatenan 
si el mayor es el primero se multiplica de lo contrario se restan
si es el resultado de la multiplicacion es par, poner que es par

*/

function Mostrar()
{
	var	numeroUno;
	var numeroDos;
	var resultado;
	var par;


	numeroUno=prompt("Ingrese su numemero");
	numeroDos=prompt("Ingrese su numemero");

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	if(numeroUno==numeroDos)

	{
			resultado=numeroUno+""+numeroDos;

	}
	if(numeroUno>numeroDos)
	
	{
			resultado=numeroUno*numeroDos;

	}
	
	if(numeroUno<numeroDos)

	{
			resultado=numeroUno-numeroDos;

	}

	if(resultado%2==0 && resultado!=0)
		{
			resultado=resultado+" es par";
		}
	
	document.write("<br> El numero es:" + resultado);





	//alert("Funciona 4-if");
	
}

