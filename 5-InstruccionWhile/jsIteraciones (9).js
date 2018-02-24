function Mostrar()
{

var contador=0;
	var maximo;
	var minimo;
	var numero;
	
	var respuesta='si';

	while(respuesta!='no')
	{
		contador++;
		numero=prompt("ingrese el numero");
		numero=parseInt(numero);
		if(contador==0)
		{
			maximo=numero;
			minimo=numero;
		}else
		{
			if(numero>maximo)
			{
				maximo=numero;
			}
			if(numero<minimo)
			{
				minimo= numero
			}
		}
		numero=prompt("ponga si para continuar");	
	}



}//FIN DE LA FUNCIÓN