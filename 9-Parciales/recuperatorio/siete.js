function Mostrar()
{
	var edad;
	var sexo;
	var promedio;
	var edadMenor;
	var contador = 0;
	var sumaEdades = 0;
	var contadorVaronesEdadMayor = 0;
	var respuesta="si";
	
	while (respuesta=="si" && contador < 100)
	{
		edad = prompt("Ingrese la edad: ","0");
		edad = parseInt(edad);

		while (edad < 0 || edad > 100 || isNaN(edad))
		{
			edad = prompt("ErrorVuelva a ingresar la edad, entre 0 y 100: ");
			edad = parseInt(edad);
		}
		contador++;
		sumaEdades = sumaEdades + edad;
		
		sexo = prompt("Ingrese el sexo: ","f/m");

		while (sexo !== "f" && sexo !== "m" || !isNaN(sexo))
		{
			sexo = prompt("Eror,Vuelva a ingresar el sexo, 'f' o 'm': ");
		}

		if (contador == 1) 
		{
			edadMenor = edad;
		}
		else 
		{
			if (edad < edadMenor) 
			{
				edadMenor = edad;
			}
		}

		if (sexo == "m" && edad >= 20) 
		{
			contadorVaronesEdadMayor++;
		}
		respuesta=prompt("ponga si para poner otro numero");

	}
	
	promedio = sumaEdades / contador;
 
	alert("El promedio de edades es: " + promedio);
	alert("La edad más baja es: " + edadMenor);
	alert("La cantidad de varones con edad mayor o igual a 20 es: " + contadorVaronesEdadMayor);
}
