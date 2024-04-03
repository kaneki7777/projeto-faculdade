document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var form = event.target;
    var formData = new FormData(form);

    // Validar campos
    var nome = formData.get("nome");
    var email = formData.get("email");
    var senha = formData.get("senha");
    var sexo = formData.get("sexo");
    var dataNascimento = formData.get("dataNascimento");

    var nomeError = document.getElementById("nomeError");
    var emailError = document.getElementById("emailError");
    var senhaError = document.getElementById("senhaError");
    var sexoError = document.getElementById("sexoError");
    var dataNascimentoError = document.getElementById("dataNascimentoError");

    nomeError.textContent = "";
    emailError.textContent = "";
    senhaError.textContent = "";
    sexoError.textContent = "";
    dataNascimentoError.textContent = "";

    var isValid = true;

    if (!nome) {
        nomeError.textContent = "Por favor, digite seu nome.";
        isValid = false;
    }

    if (!email) {
        emailError.textContent = "Por favor, digite seu email.";
        isValid = false;
    } else if (!isValidEmail(email)) {
        emailError.textContent = "Por favor, digite um email válido.";
        isValid = false;
    }

    if (!senha) {
        senhaError.textContent = "Por favor, digite sua senha.";
        isValid = false;
    } else if (senha.length < 8) {
        senhaError.textContent = "A senha deve ter no mínimo 8 caracteres.";
        isValid = false;
    }

    if (!sexo) {
        sexoError.textContent = "Por favor, selecione seu sexo.";
        isValid = false;
    }

    if (!dataNascimento) {
        dataNascimentoError.textContent = "Por favor, selecione sua data de nascimento.";
        isValid = false;
    } else {
        var hoje = new Date();
        var dataNascimentoDate = new Date(dataNascimento);
        var idade = hoje.getFullYear() - dataNascimentoDate.getFullYear();
        var mes = hoje.getMonth() - dataNascimentoDate.getMonth();
        if (mes < 0 || (mes === 0 && hoje.getDate() < dataNascimentoDate.getDate())) {
            idade--;
        }

        if (idade < 18) {
            dataNascimentoError.textContent = "Você deve ter pelo menos 18 anos para se cadastrar.";
            isValid = false;
        }
    }

    if (isValid) {
        // Envie os dados do formulário para onde desejar, como um servidor backend
        // Neste exemplo, apenas exibiremos os dados no console
        console.log("Dados do formulário:", formData);

        // Redirecione para outra página após o envio bem-sucedido
        window.location.href = "perfil.html";
    }
});

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
