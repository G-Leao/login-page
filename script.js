
    const email = document.getElementById("dados");
    const senha = document.getElementById("senha");

    function login() {
        if (email.value === "" || senha.value === "") {
            alert("Preencha todos os campos!");
            return;
        }

        if (senha.value.length < 6) {
            alert("A senha deve ter no mínimo 6 caracteres.");
            return;
        }

        alert("Login realizado com sucesso!");
        // Aqui você pode redirecionar:
        // window.location.href = "home.html";
    }
