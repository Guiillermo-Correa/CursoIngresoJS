//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var numeroFinal;

	numeroUno=prompt("Ingrese el primer numero");
	numeroDos=prompt("Ingrese el segundo numero");

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	
	if(numeroUno==numeroDos)
		{
			numeroFinal= numeroUno*numeroDos;
			document.write("El  numero final es :" + numeroFinal);
		}

	if(numeroUno>numeroDos)
		{
			numeroFinal=numeroUno-numeroDos;
			document.write("El  numero final es :" + numeroFinal);
		}

	if(numeroUno<numeroDos)
		{
			numeroFinal=numeroUno+numeroDos;
			document.write("El  numero final es :" + numeroFinal);
		}
		 

		
}

