function Mostrar()
{
	var numeroRandom;
	var contador0=0;
	var contador1=0;
	var contador2=0;
	var contador3=0;
	var contador4=0;
	var contador5=0;
	var contador6=0;
	var contador7=0;
	var contador8=0;
	var contador9=0;
	var contador10=0;
	
	for(contador=0;contador<100;contador++)
	{
		numeroRandom=Math.floor(Math.random() * 10);
	
		switch(numeroRandom)
		{
			case 0:
				contador0++;
				break;
			case 1:
				contador1++;
				break;
			case 2:
				contador2++;
				break;
			case 3:
				contador3++;
				break;
			case 4:
				contador4++;
				break;
			case 5:
				contador5++;
				break;
			case 6:
				contador6++;
				break;
			case 7:
				contador7++;
				break;
			case 8:
				contador8++;
				break;
			case 9:
				contador9++;
				break;
			case 10:
				contador10++;
				break;									
												
		}

		document.write("<br> contador0:" + contador0);







	}












	/*var repetciones; 
	
	repeticiones=prompt("ingrese el número de repeticiones");


	for(contador=100;contador>0;contador++)
	{

		document.write("<br>" + contador);
		
	}

*/
}//FIN DE LA FUNCIÓN