function Mostrar()
{
//tomo la edad  
var mesDelAño;
mesDelAño=document.getElementById('mes').value;
switch(mesDelAño)
	{
		case"Enero":
		case"Febrero":
		case"marzo":
		case"Abril":
		case"Mayo":
		case"Junio":
			alert("Falta para el invierno.");
			break;

		case"Julio":
		case"Agosto":
			alert("Abrigate que hace frio");
			break;

		case"Septiembre":
		case"Octubre":
		case"Noviembre":
		case"Diciembre":
			alert("Ya pasamos el invierno");
			break;
		
	
	}






}//FIN DE LA FUNCIÓN