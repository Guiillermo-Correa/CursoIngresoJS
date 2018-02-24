function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero=0;
	var promedio;
	
	
	while (respuesta=="si")
	{
		
		numero=prompt("ingrese un numero");
		numero=parseInt(numero);
		acumulador=acumulador+ numero;
		contador++;
		respuesta=prompt("ponga si para poner otro numero");
	}

	promedio=acumulador/contador;

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN