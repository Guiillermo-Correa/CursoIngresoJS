/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	var importe;
/*Lo que hago a continuacion es tomar un importe por ID y transformarlo
a entero por parseInt()*/
	importe=document.getElementById('sueldo').value;
	
	importe=parseInt(importe);
/* a continuacion le hago 
el aumento del 10%(el importe+ el * 1.1)
*/
	resultado=importe*1.1;	

/* uso el doccument por que quiero que me aparezca el resultdo en el
cuadro de texto
*/
document.getElementById('resultado').value=resultado;

	
}
