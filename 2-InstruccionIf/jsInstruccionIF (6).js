function Mostrar()
{
//tomo la edad  
	var edad;
	 edad=document.getElementById('edad').value;


	 if(edad>18)
	 {
	 	alert("Mayor de edad");
	 }
	 
	 if(edad>13 && edad<17)
	 {
	 	alert("Adolescente");

	 }

	 if(edad<13)
	 {
	 	alert("Niño");
	 }



}//FIN DE LA FUNCIÓN