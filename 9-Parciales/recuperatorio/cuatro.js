function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var suma;

	numeroUno=prompt("ingrese el primero numero");
	numeroDos=prompt("ingrese el segundo numero");

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	suma=numeroUno+numeroDos;

	if (suma > 0)
	{
		document.write("El resultado de la suma es: " + suma + " y es positivo");
	} 
	else
	{
		if (suma < 0)
		{
		document.write("El resultado de la suma es: " + suma + " y es negativo");
		}
		else
		{
			document.write("El resultado de la suma es : cero ");
		}
	}	






}	


