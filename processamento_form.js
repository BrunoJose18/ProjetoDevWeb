const credenciais = {
    "contatobrunojosebarboza@gmail.com": "bruno123"
};

document.getElementById("loginForm").addEventListener("submit", function(event) { 
    //Aqui ele pega as info do form quando o evento de envio é acionado, no caso o do botao
    event.preventDefault(); //Isso é pro form nao recarregar

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const lembrar = document.getElementById("lembrar").checked;

    if (credenciais[email] && credenciais[email] === senha) {
        errorMessage.classList.add("d-none");
        if (lembrar) {
            localStorage.setItem("email", email); // Simula o lembrar de mim
        }
        window.location.href = ".html"; //ADICIONEM A HOME AQUI
    } else {
        errorMessage.textContent = "Email ou senha inválidos. Tente novamente.";
        errorMessage.classList.remove("d-none");
    }
});

// Funcionalidade do Lembrar de Mim
const emailSalvo = localStorage.getItem("email");
if (emailSalvo) {
    document.getElementById("email").value = emailSalvo;
}