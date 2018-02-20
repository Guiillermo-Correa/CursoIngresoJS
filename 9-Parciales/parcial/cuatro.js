function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var numeroFinal;

	numeroUno=prompt("Ingrese su numemero");
	numeroDos=prompt("Ingrese su numemero");

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	if(numeroUno==numeroDos)
		{
			numeroFinal= numeroUno*numeroDos;
		}

	if(numeroUno>numeroDos)
		{
			numeroFinal=numeroUno-numeroDos;
		}

	else
		{
			numeroFinal=numeroUno+numeroDos;
		}

		console.log(numeroFinal);


}
