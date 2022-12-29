form = document.getElementById('form');
const tabela = document.getElementById('holder')
const btnAtualizar = document.getElementById('refresh');
const btnEnviar = document.getElementById('Enviar');
let refresh = document.getElementById('refresh');
let atualiza = false;







async function loadData() {
    const { data, error } = await _supabase
        .from('motores2')
        .select()

  //  console.table(data);
  if (!error) {

     //   console.table(data);

        data.map((item) => {
            console.log(item);
            var numeroLinhas = tabela.rows.length;
            var linha = tabela.insertRow(numeroLinhas);
            var cel1 = linha.insertCell(0);
            var cel2 = linha.insertCell(1);
            var cel3 = linha.insertCell(2);
            var cel4 = linha.insertCell(3);
            var cel5 = linha.insertCell(4);
            var cel6 = linha.insertCell(5);
            var cel7 = linha.insertCell(6);
            var cel8 = linha.insertCell(7);
            var cel9 = linha.insertCell(8);
            var cel10 = linha.insertCell(9);
            var cel11 = linha.insertCell(10);
	    var cel12 = linha.insertCell(11);
            var cel13 = linha.insertCell(12);
            var cel14 = linha.insertCell(13);
        
		
            cel1.innerHTML = item.codigo;
            cel2.innerHTML = item.marca;
            cel3.innerHTML = item.potencia;
            cel4.innerHTML = item.polos;
            cel5.innerHTML = item.carcaca;
            cel6.innerHTML = item.Flange;
            cel7.innerHTML = item.modFlange;
            cel8.innerHTML = item.localizacao;
            cel9.innerHTML = item.rolDianteiro;
            cel10.innerHTML = item.rolTraseiro;
            cel11.innerHTML = item.Tensao;
            cel12.innerHTML = item.Corrente;
            cel13.innerHTML = item.Tipo;
            cel14.innerHTML = `<button  class='update'><i class="fa-solid fa-pen-to-square" onclick='updateData(${item.codigo})'></i></button><button class='delete' onclick=' deleteData(${item.codigo})'><i class="fa-solid fa-trash"></i></button>`;
           
});
 }

}


async function updateData(item) {



console.log(item);
/*
    const { data, error } = await _supabase
        .from('Usuarios')
        .select().eq('id', item)

    //console.table(data);
    if (!error) {
        let dados = {


        }
        data.map(function (data) {


            console.log(data.id);
            form.userId.value = data.id;
            form.nome.value = data.Nome;
            form.estCivil.value = data.EstadoCivil;
            form.email.value = data.Email;
            form.telefone.value = data.Telefone;
            form.idade.value = data.Nascimento;
            form.perfil.value = data.Perfil;
            dados = {
                Nome: data.Nome,
                Email: data.Email,
                Telefone: data.Telefone,
                EstCivil: data.EstadoCivil,
                Iade: data.Nascimento,
                Perfil: data.Perfil

            }
        })
        atualiza = true;
        btnEnviar.innerHTML = "Atualizar";
        console.log(dados);
    }
*/

}


btnAtualizar.addEventListener('click', (e) => {

    window.location.reload();
});

async function Atualizar(dados) {


 console.log(parseInt(dados.id));
    id = parseInt(dados.id)

    const { data, error } = await _supabase
        .from('Usuarios')
        .update(dados)
        .eq('id', id)

    console.log(data)
    console.log(error)
    btnEnviar.innerHTML = "Enviar";
    atualiza = false;
    window.location.reload();

}


async function deleteData(id) {

    let confirmacao = confirm("Deseja apagar o usuario com id: " + id);

    if (confirmacao) {
        const { error } = await _supabase
            .from('motores2')
            .delete()
            .eq('codigo', id)

        console.log(error)
        window.location.reload();
    }

}


loadData();