document.addEventListener("DOMContentLoaded", () => {
  const email = document.getElementById("dados");
  const senha = document.getElementById("senha");
  const confirmarSenha = document.getElementById("confirmar-senha");
  const btn = document.getElementById("btnforgot");

  btn.addEventListener("click", () => {
    if (
      email.value.trim() === "" ||
      senha.value.trim() === "" ||
      confirmarSenha.value.trim() === ""
    ) {
      alert("Preencha todos os campos!");
      return;
    }

    if (senha.value.length < 6) {
      alert("A senha deve ter no mínimo 6 caracteres.");
      return;
    }

    if (senha.value !== confirmarSenha.value) {
      alert("As senhas não coincidem!");
      return;
    }

    alert("Senha redefinida com sucesso!");
    window.location.href = "index.html";
  });
});
