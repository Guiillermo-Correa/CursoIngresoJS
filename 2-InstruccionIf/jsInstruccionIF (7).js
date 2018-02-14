function Mostrar()
{
	var edad;
	var estadoCivil;

	edad=document.getElementById('edad').value;

	estadoCivil=document.getElementById('estadoCivil').value;

	console.info("holo",estadoCivil);
	if( edad<18 && estadoCivil!="Soltero")
	{
		alert("Es muy pequeño para NO ser soltero");
	}



}//FIN DE LA FUNCIÓN