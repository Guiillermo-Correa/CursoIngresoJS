function Mostrar()
{
	var precioUno;
	var precioDos;
	var precioTres;
	var suma;
	var promedio;

	

	precioUno=document.getElementById('precioUno').value;
	precioDos=document.getElementById('precioDos').value;
	precioTres=document.getElementById('precioTres').value;

	precioUno=parseInt(precioUno);
	precioDos=parseInt(precioDos);
	precioTres=parseInt(precioTres);

	suma=precioUno+precioDos+precioTres;

	promedio=suma/3;

	alert(" La suma es es: " + suma);
	alert(" El promedio es: " + promedio );

}
