function Mostrar()
{
//tomo la edad  
	var edad;

	edad=document.getElementById('edad').value;

	if(edad<13 || edad>17)
	{

		alert("no es adolescentes");
	}


	/* no funciona usando el !

	if(!(edad>13 && edad <17))
	{

	alert("NO es adolescente");

	}
*/

}//FIN DE LA FUNCIÓN