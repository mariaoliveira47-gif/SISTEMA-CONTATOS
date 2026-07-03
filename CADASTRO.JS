const API_BASE = "http://localhost:3000";

async function CarregarContatos() {
  try {
const res = await fetch(`${API_BASE}/contatos´);
if(!res.ok) throw new error("erro ao buscar contatos");
const contatos = await res.json();
const lista = document.getElementById("ListaContatos");
lista.innerHTML="";
Contatos.forEach(c => {
Const li = document.createElement("li");
li.innerHTML = ` 
  <strong>Nome:</strong> ${c.nome}<br>
  <strong>Telefone:</strong> ${c.telefone || "-"}<br>
  <strong>Email:</strong> ${c.Email || "-"}
`;
lista.appendCh(li);
});

} catch (err) {
console.error(err);

alert("Nao foi possivel carregar contatos.")
  }
}

document.getElementById("btnCadastrar").addEventListener("click",async () => {
 const nome = document.getElementById("nome").value.trim();
 const email = document.getElementById("email").value.trim();
const telefone = document.getElementById("email").value.trim();

 if(!nome) {
 alert("preencha o nome.")
 return;
}

try {
  const res = await fetch( `${API_BASE}/Contatos´, {
  method: "POST",
  headers: {"content-type": "application/json"},
  body: JSON.stringly({ nome,telefone,email })
  });

if(!res.ok) {
 const errBody = await res.json().catch(() => ({}));
 throw new Error (errBody.mensagem || "Error ao Cadastrar");
}

const data = await res.json();
alert(data.mensagem);
//limpar campos
document.getElementById("nome").value = "";
document.getElementById("telefone").value = "";
document.getElementBy("email").value = "";
//recarregar lista 
carregarContatos();
} catch.error("erro no front-end:",err);
console.error("erro ao comunicar com o servidor.");
}
}); 

window.addEventListener("load",carregarContatos);
