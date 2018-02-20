function Mostrar()
{
	var dia;
	
	 dia=prompt("Ingrese su dia");	 
	
	 switch(dia)
	 {
	 	case"Sabado":
	 	case"Domingo":
	 		alert("es fin de semana");
	 		break;
		
		case"Lunes":
		case"Martes":
		case"Miercoles":
		case"Jueves":
		case"Viernes":
			alert("a trabajar!!!.");
			break;
	/*
	 	default:
	 
	 		alert("a trabajar !!!.");
	 		break;
	 */
 	}

}
