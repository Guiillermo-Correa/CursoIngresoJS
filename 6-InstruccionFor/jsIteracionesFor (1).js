function Mostrar()
{
	//var contador=0; SIN TERMINAR, AGREGARLE POSITIVOS Y NEGATIVOS 
	var iteraciones=10;
	var contadorDePar=0;
	var contadorDeImpar=0;
	var contadorDeCeros=0;	

	for(contador=0;contador<iteraciones;contador++)
	{
		document.write("<br>"+contador);
		
		if(contador==0)
		{
			contadorDeCeros++;
		}
		 else // par
		
		{

		if(contador%2==0)
		{
			contadorDePar++;
		}
		else// impar
		{
			contadorDeImpar++;
		}
		
		}


		//contador++; Forro te encontre 
		if(contador==10)
		{
			break;
		}
	}
		
		document.write("<br> par:"+contadorDePar);
		document.write("<br> impar:"+contadorDeImpar);
		document.write("<br> ceros:"+contadorDeCeros);
}	
