//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var importeFinal;
	var importeIva=0.21;

	importe=prompt("Ingrese el importe");

	importeFinal=importe*(importeIva+1);

	document.getElementById('importe').value=importeFinal

	alert("El importe final es : "+ importeFinal);
	
}

