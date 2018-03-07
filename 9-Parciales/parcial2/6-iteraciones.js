/*
	
6-Realizar el algoritmo que al presionar el botón "Mostrar"
 pida el importe de las ventas de los 7 días de la semana por prompt (una por día),
  e informar cual fue el maximo importe y 
  cuál fue el minimo importe de venta
*/
function Mostrar()
{
	var importe;
	var dias=7;
	var contador=0;
	var minimo=0;
	var maximo=0;

	while(contador<dias) //(validar que sea maximo a 0,”cero”)
	{
		contador++;
		importe=prompt("Ingrese el importe")
		importe=parseInt(importe);


	while(importe<0 ||isNaN(importe) )
		{
			importe=prompt("Error,ingrese nuevamente el importe");
			importe=parseInt(importe);
		}
	if (importe==1) 
		{
			maximo=importe;
			minimo=importe;
		}
		else
		{
			if (importe>maximo) 
				{
					maximo=importe;
				}

			else
				{
					minimo=importe;
				}
		}

		


	}

	document.write("El maximo importe es "+maximo);
	document.write("<br> El minimo importe es "+minimo);

	 
}

