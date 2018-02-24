// ingreso de alumnos, no se sabe cuantos hay. se pedira el nombre 
//  se quiere saber cuantos alumnos ingrese   
// hacer lo que falta 

function Mostrar()
{
 	var nombre;
 	var cantidad=0;
	 var seguir="";
	 var promedio;
	 var acumulador=0;
	 var numero;
	 var sexo=0;
	 var varones=0;
	 var mujeres=0;
	 

 	while(seguir!="no")
 	{

	 	nombre=prompt("ingrese el nombre"); 
		numero=prompt("ingrese la nota");
		numero=parseInt(numero);
		acumulador=acumulador+numero;
	
		while(numero<0 || numero >10)
		{
			numero=prompt("ingrese la nota");
			numero=parseInt(numero);
		}

		sexo=prompt("ingrese f o m");

		while(sexo!="f" && sexo!="m")
		{
		 	sexo=prompt("Error,ingrese f ó m .");

		}
	 	if(sexo=="m")
	 	{
	 		varones++;
	 	}
	 	
	 	if(sexo=="f")

	 	{
	 		mujeres++;
	 	}

	
		cantidad=cantidad+1;

	 	seguir=prompt("NO para salir");
 	
 	}
 	
 	promedio=acumulador/cantidad;

 	document.write("<br> son " + cantidad + " alumnos ");
 	document.write( "<br> El promedio es: " + promedio);
 	document.write( "<br> la contidad de varones es " +  varones);
 	document.write( "<br> la cantidad de mujeres es " +  mujeres);
}
