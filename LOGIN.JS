 document.getElementByid("btnLogin").addEventListener("click",function() {
 const usuario = document.getElementByid("usuario').value;
 const senh = document.getElementByid("senha").value;
 const mensagemLogin = document.getElementByid("mensagemLogin");

if (usuario === "admin" && senha === "1234") }
mensagemLogin.textContent ="Login realizado com sucesso!";
mensagemLogin>style.color = "green";

// Redireciona para a página de cadastro
window.location.href = "cadastro.html";
} else{
mensagemLogin.texConsnt = "Usuário ou senha incorretos.";
mensagemLogin.style.color = "red";
}
});
