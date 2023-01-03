
tipos = [  {    "tipo": "63"  },  {    "tipo": "71"  },  {    "tipo": "80"  },  {    "tipo": "L80"  },  {    "tipo": "90S"  },  {    "tipo": "L90S"  },  {    "tipo": "90L"  },  {    "tipo": "L90L"  },  {    "tipo": "100L"  },  {    "tipo": "L100L"  },  {    "tipo": "112M"  },  {    "tipo": "L112M"  },  {    "tipo": "132S"  },  {    "tipo": "132M"  },  {    "tipo": "132M/L"  },  {    "tipo": "160M"  },  {    "tipo": "160L"  },  {    "tipo": "180M"  },  {    "tipo": "180L"  },  {    "tipo": "200M"  },  {    "tipo": "200L"  },  {    "tipo": "225S/M"  },  {    "tipo": "250S/M"  },  {    "tipo": "280S/M"  },  {    "tipo": "355M/L"  },  {    "tipo": "355A/B"  }]
formulario = document.getElementById('formMotor');
formOptionCarcaca = formulario.inputCarcaca ;
formoptionFlange =formulario.inputModFlange ;
formoptionPotencia = formulario.inputPotencia;
foormoptionLoc = formulario.inputLocalizacao;
flanges = [{"tipo":"FF-115"},{"tipo": "FF-130"},{"tipo":"FF-165"},{"tipo":"FF-215"},{"tipo":"FF-265"},{"tipo": "FF-300"},{"tipo": "FF350"},{"tipo": "FF-400"},{"tipo":"FF-500"},{"tipo":"FF-600"},{"tipo":"FF-740"},{"tipo":"FC-95"},{"tipo":"FC-149"},{"tipo": "FC-184"},{"tipo":"FC-228"},{"tipo":"FC-279"},{"tipo":"FC-335"},{"tipo":"FC-368"},{"tipo":"C-90"},{"tipo":"C-105"},{"tipo":"C-120"},{"tipo":"C-140"},{"tipo":"C-160"},{"tipo":"C-200"}]

potencias = [{"tipo":"0.12 CV"},{"tipo":"0.16 CV"},{"tipo":"0.25 CV"},{"tipo":"0.33CV"},{"tipo":"0.50 CV"},{"tipo":"0.75 CV"},{"tipo":"1 CV"},{"tipo":"1.5 CV"},{"tipo":"2 CV"},{"tipo":"3 CV"},{"tipo":"4 CV"},{"tipo":"5 CV"},{"tipo":"6 CV"},{"tipo":"7.5 CV"},{"tipo":"10 CV"},{"tipo":"12.5 CV"},{"tipo":"15 CV"},{"tipo":"20 CV"},{"tipo":"25 CV"},{"tipo":"30 CV"},{"tipo":"40 CV"},{"tipo":"50 CV"},{"tipo": "60 CV"},{"tipo":"75 CV"},{"tipo":"100 CV"},{"tipo": "125 CV"},  {    "tipo": "150 CV"  },  {    "tipo": "175 CV"  },  {    "tipo": "200 CV"  },  {    "tipo": "250 CV"  },  {    "tipo": "300 CV"  },  {    "tipo": "350 CV"  },  {    "tipo": "400 CV"  }]

locAlmox = [{"loc": "PP-A-D21"  },  {    "loc": "PP-A-D22"  },  {    "loc": "PP-A-D23"  },  {    "loc": "PP-A-D24"  },  {    "loc": "PP-A-D25"  },  {    "loc": "PP-A-D26"  },  {    "loc": "PP-A-D27"  },  {    "loc": "PP-A-D28"  },  {    "loc": "PP-A-D29"  },  {    "loc": "PP-A-D30"  },  {    "loc": "PP-A-D31"  },  {    "loc": "PP-A-D32"  },  {    "loc": "PP-A-D33"  },  {    "loc": "PP-A-D34"  },  {    "loc": "PP-A-D35"  },  {    "loc": "PP-A-D36"  },  {    "loc": "PP-A-D37"  },  {    "loc": "PP-A-D38"  },  {    "loc": "PP-A-D39"  },  {    "loc": "PP-A-D40"  },  {    "loc": "PP-A-D41"  },  {    "loc": "PP-A-D42"  },  {    "loc": "PP-A-D43"  },  {    "loc": "PP-A-D44"  },  {    "loc": "PP-A-D45"  },  {    "loc": "PP-A-D46"  },  {    "loc": "PP-A-D47"  },  {    "loc": "PP-A-D48"  },  {    "loc": "PP-A-D49"  },  {    "loc": "PP-A-D50"  },  {    "loc": "PP-A-D51"  },  {    "loc": "PP-A-D52"  },  {    "loc": "PP-A-D53"  },  {    "loc": "PP-A-D54"  },  {    "loc": "PP-A-D55"  },  {    "loc": "PP-A-D56"  },  {    "loc": "PP-AD57"  },  {    "loc": "PP-A-D58"  },  {    "loc": "PP-A-D59"  },  {    "loc": "PP-A-D60"  },  {    "loc": "PP-A-D61"  },  {    "loc": "PP-A-D62"  },  {    "loc": "PP-A-D63"  },  {    "loc": "PP-A-D64"  },  {    "loc": "PP-A-D65"  },  {    "loc": "PP-A-D66"  },  {    "loc": "PP-A-D67"  },  {    "loc": "PP-A-D68"  },  {    "loc": "PP-A-D69"  },  {    "loc": "PP-A-D70"  },  {    "loc": "PP-A-D71"  },  {    "loc": "PP-A-D72"  },  {    "loc": "PP-A-D73"  },  {    "loc": "PP-A-D74"  },  {    "loc": "PP-A-D75"  },  {    "loc": "PP-A-D76"  },  {    "loc": "PP-A-D77"  },  {    "loc": "PP-A-D78"  },  {    "loc": "PP-A-D79"  },  {    "loc": "PP-A-D80"  },  {    "loc": "PP-A-D81"  },  {    "loc": "PP-A-D82"  }]



console.log(tipos);

tipos.map((item)=>{
//console.log(item.tipo);
formOptionCarcaca.options[formOptionCarcaca.options.length] = new Option(item.tipo, item.tipo);
});


flanges.map((item)=>{
//console.log(item.tipo);
formoptionFlange .options[formoptionFlange.options.length] = new Option(item.tipo, item.tipo);
});


potencias.map((item)=>{
//console.log(item.tipo);
formoptionPotencia.options[formoptionPotencia.options.length] = new Option(item.tipo, item.tipo);
});

locAlmox.map((item)=>{
//console.log(item.loc);
foormoptionLoc.options[foormoptionLoc.options.length] = new Option(item.loc, item.loc);
});



formulario.addEventListener("submit",(e)=>{

e.preventDefault();

marca = formulario.inputMarca.value ;
potencia = formulario.inputPotencia.value;
polos = formulario.inputPolo.value;
carcaca = formulario.inputCarcaca.value;
flange = formulario.inputFlange.value;
modflange = formulario.inputModFlange.value;
localizacao = formulario.inputLocalizacao.value;
codEMS= formulario.inputCodEMS.value ;
rolPolia = formulario.inputRolPol.value;
rolVent = formulario.inputRolVen.value;
tensao = formulario.inputTensao.value;
corrente = formulario.inputCorrente.value;
tipo = formulario.inputTipo.value;

const dado = 
{
   
    "marca": marca,
    "potencia": potencia,
    "polos": polos,
    "carcaca": carcaca,
    "Flange": flange,
    "modFlange": modflange,
    "localizacao": localizacao,
    "rolDianteiro": rolPolia,
    "rolTraseiro": rolVent,
    "Tensao": tensao,
    "Corrente": corrente,
    "Tipo": tipo
}

const dados = 
{
    
    "marca": "WEG",
    "potencia": "30 CV",
    "polos": "4 POLOS",
    "carcaca": "90L",
    "Flange": "NÃO",
    "modFlange": "N/C",
    "localizacao": "PP-A-D33",
    "Equipamento":"",
    "rolDianteiro": "6234",
    "rolTraseiro": "6262",
    "Tensao": "220/380 V",
    "Corrente": "11/17 A",
    "Tipo": "MOTOR"
}







insertData(dado);
    console.log(dado);
   formulario.reset();




})


async function insertData(dados) {
    const { data, error } = await _supabase
        .from('motoresAl')
        .insert([
            dados
        ])

    console.log(data)
    console.log(error)
if(!error){
if(confirm("cadastrado com sucesso!")){

}

}else{

alert("erro:" + error.message);
}
 
}


