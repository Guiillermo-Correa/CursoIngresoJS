/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	var suledo;
	var importe;

	importe=document.getElementById('suledo').value;
	
	importe=parseInt(importe);

	resultado=importe*1.1;


	document.getElementById('resultado').value=resultado;


	

}
