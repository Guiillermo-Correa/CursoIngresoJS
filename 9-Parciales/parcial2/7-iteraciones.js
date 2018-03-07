//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var nota;
	var sexo;
	var promedio;
	var notaMasBaja;
	var contador=0;
	var sumaDeNotas=0;
	var contadorNotaVarones=0
	var alumnos=6;

	while(contador<alumnos)
	{
		nota=prompt("Ingrese su nota");
		nota=parseInt(nota);
		sumaDeNotas=sumaDeNotas+nota;
		contador++;
	

	while(nota>10|| nota<0 || isNaN(nota))//achu
	{
		nota=prompt("Error ingrese devuelta su nota");
		nota=parseInt(nota);
	}

	sexo=prompt("Ingrese el sexo f o m");

	while (sexo!="f" && sexo!="m")
	{
		sexo=prompt("Indique su sexo con f o m");
	}

	if (contador==1) 
		{
			notaMasBaja=nota;
		}
	else
		{
			if (nota<notaMasBaja)
			{
				notaMasBaja=nota;
			}
		}
	if (nota>=6 && sexo=="m") 
		{
			contadorNotaVarones++;

		}
	}	

	promedio=sumaDeNotas/alumnos;

	document.write("El promedio de las notas totales es: " + promedio);
	document.write("<br>" + "La nota más baja es: " + notaMasBaja);
	document.write("<br>" + "La cantidad de varones con nota mayor o igual a 6 es: " + contadorNotaVarones);

}


