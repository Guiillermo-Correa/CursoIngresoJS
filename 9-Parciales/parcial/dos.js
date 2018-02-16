function Mostrar()
{
	 var importeInicial;
	 var importeFinal;
	 var importeIva=0.21;
	importeInicial=parseInt(importeInicial);
	
	importeInicial=prompt("ingre su importe");
	
	importeFinal=importeInicial*(1+importeIva);

	document.getElementById('importeFinal').value=importeFinal;


	console.log(importeFinal);
	

}
