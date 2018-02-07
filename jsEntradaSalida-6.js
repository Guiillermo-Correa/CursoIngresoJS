/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{

	//defino variables y agrego mas,si es necesario 
	var numneroUno;
	var numeroDos;	
	var resultado;


	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;
//cada vez que usemos el parseint va sin comillas,
//y guarda lo de adentro del parentesis adento de 
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	resultado=numeroUno+numeroDos;

	alert(resultado);
	

 


	/*numneroUno=2;
	numeroDos=3;
	resultado=numneroUno+numeroDos;
	alert(resultado);

}

