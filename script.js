 document.addEventListener("DOMContentLoaded", () => {
    const email = document.getElementById("dados");
    const senha = document.getElementById("senha");
    const btn = document.getElementById("btnLogin");

    btn.addEventListener("click", () => {
        if (email.value.trim() === "" || senha.value.trim() === "") {
            alert("Preencha todos os campos!");
            return;
        }

        if (senha.value.length < 6) {
            alert("A senha deve ter no mínimo 6 caracteres.");
            return;
        }

        alert("Login realizado com sucesso!");
    });
});

