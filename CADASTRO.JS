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
 const email = document
