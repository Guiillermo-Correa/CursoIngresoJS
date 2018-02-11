function Mostrar()
{
//tomo la edad  
	var edad;
	edad=document.getElementById('edad').value;
/* el && signiificaria "y"
 osea seria, edad entre 13 Y 17 años (inclusive)
 (para el inclusive se usa el "=")
 */
	if(edad>13 && edad<=17)
	{
		alert("adolescente");
	}


}//FIN DE LA FUNCIÓN