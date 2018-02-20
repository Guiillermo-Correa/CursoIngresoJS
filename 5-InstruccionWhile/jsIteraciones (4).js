function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
// siempre poner el error, nunca lo correcto 
	while(numero<0 || numero>10)
	{

	 numero = prompt("Error,ingrese un número entre 0 y 10.");
	 numero=parseInt(numero);
	}
	alert("correcto");


}//FIN DE LA FUNCIÓN