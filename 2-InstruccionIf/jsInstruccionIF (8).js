function Mostrar()
{
//tomo la edad  
	// revisar problemas linea 17
	var edad;
	var estadoCivil;

	edad=document.getElementById('edad').value;
	
	estadoCivil=document.getElementById('estadoCivil').value;

	if(edad<18 && estadoCivil!="Soltero")
	{
		console.info(" NO HACER NADA ");

	}

	if(edad>17 && estadoCivil="Soltero")
	{
		alert("Es soltero y no es menor");
	}

}//FIN DE LA FUNCIÓN