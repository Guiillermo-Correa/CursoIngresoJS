function Mostrar()
{
//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;

	switch(mesDelAño)
	{
		case"Febrero":
			alert("Tiene 28 dias");
			break;	

		case"Abril":
		case"Junio":
		case"Septiembre":
		case"Noviembre":
			alert("tiene 30 días");
			break;

		case"Enero":
		case"Marzo":
		case"Mayo":
		case"Julio":
		case"Agosto":
		case"Octubre":
		case"Diciembre":
			alert("tiene 31 días");
			break;
	}





//alert (mesDelAño);
	
	



}//FIN DE LA FUNCIÓN