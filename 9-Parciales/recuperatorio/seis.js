function Mostrar()
{
	var peso;
	var menosPesado;
	var masPesado;
	var contador = 0;
	
	peso = prompt("Ingrese el peso en kilos: ");
	peso = parseInt(peso);

	contador++;

	while (contador>50 || contador<0)
	{	
		peso = prompt("Eror Ingrese denuevo el peso ");
	 	peso = parseInt(peso);

		while(contador>0)
		{
		
		if (contador)
			{
				masPesado = peso;
				menosPesado = peso;
			}

			if (contador == 1)
			{
				masPesado = peso;
				menosPesado = peso;
			}
		
		else
			{
					
				if (peso > masPesado) 
				{
						
						masPesado = peso; 
				}
				
				if (peso < menosPesado) 
				{
						
						menosPesado = peso;
				}
			}	
		}

		
		
	}

	alert("El mas pesado del deposito es : " + masPesado);
	alert("El menos pesado del deposito es : " + menosPesado);

}
