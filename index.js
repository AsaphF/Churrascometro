 document.querySelector("button").addEventListener("click", calcule)

 function calcule () {

   const a = document.getElementById("adultos").value;
   const cr = document.getElementById("crianças").value;
   const ca = document.getElementById("carne").value;
   const d = document.getElementById("duração").value

   if (d >= 6 ) {
    const quilosAdultos = (a * 800)
    const quilosCrianças = ( cr * 700)
    const CarnePessoas = (quilosAdultos + quilosCrianças) / 1000;

    const resultadoCP = " ->  " +  CarnePessoas + " quilos de carne."

    const litrosAdultos = ( a * 800);
    const litrosCrianças = ( cr * 700)
    const BebidasPessoas = Math.round((( litrosAdultos + litrosCrianças) / 1000) / 2);

    const resultadoBP = " ->  " + BebidasPessoas + " garrafas de 2l de bebidas."

    const PreçoCarne = " ->  " + (ca * ( quilosAdultos + quilosCrianças)) / 1000 + " Reais de Carne";
    
    document.getElementById("kilos_de_carne").innerText = resultadoCP
    document.getElementById("bebidas").innerText = resultadoBP
    document.getElementById("Custo").innerText = PreçoCarne

  }
  else{
   const quilosAdultos = ( a * 400); 
   const quilosCrianças = ( cr * 350);
   let CarnePessoas = (quilosAdultos + quilosCrianças) / 1000;

   const resultadoCP = " ->  " +  CarnePessoas + " quilos de carne."

   let litrosAdultos = ( a * 600);
   let litrosCrianças = ( cr * 500)
   let BebidasPessoas = Math.round((( litrosAdultos + litrosCrianças) / 1000) / 2);

   const resultadoBP = " ->  " +  BebidasPessoas + " garrafas de dois litros de bebidas."

   const PreçoCarne = " ->  " +  (ca * ( quilosAdultos + quilosCrianças)) / 1000 + " Reais de Carne";

   document.getElementById("kilos_de_carne").innerText = resultadoCP
   document.getElementById("bebidas").innerText = resultadoBP
   document.getElementById("Custo").innerText = PreçoCarne
  }
}