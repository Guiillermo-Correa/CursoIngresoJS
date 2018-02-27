function Mostrar()
{
  var importeFinal;
  var importe;
  var descuento=0.25;

  importe=prompt("ingrese el importe");

  importeFinal=importe*(1-descuento);
 
  document.getElementById('importeFinal').value=importeFinal;




}
