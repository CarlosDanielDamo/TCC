const btnHamburguer = document.querySelector("#Btn-Hamburguer");
const menuNav = document.querySelector("#Menu");
const linksMenu = document.querySelectorAll(".Menu-Botoes a");

/*
// Selecionando o formulário
const formulario = document.getElementById("form-encomenda");

// Selecionando os campos
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const tipo = document.getElementById("tipo");
const quantidade = document.getElementById("quantidade");
const data = document.getElementById("data");
const ideia = document.getElementById("ideia");

// Impede que o cliente escolha uma data passada
const hoje = new Date();
const ano = hoje.getFullYear();
const mes = String(hoje.getMonth() + 1).padStart(2, "0");
const dia = String(hoje.getDate()).padStart(2, "0");

data.min = ${ano}-${mes}-${dia};


// Evento de envio do formulário
formulario.addEventListener("submit", function(event) {

    // Impede o recarregamento da página
    event.preventDefault();

    // Verifica se todos os campos foram preenchidos
    if (
        nome.value.trim() === "" ||
        email.value.trim() === "" ||
        telefone.value.trim() === "" ||
        tipo.value === "" ||
        quantidade.value === "" ||
        data.value === "" ||
        ideia.value.trim() === ""
    ) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    // Verifica a quantidade
    if (Number(quantidade.value) < 1) {
        alert("A quantidade deve ser de pelo menos 1 peça.");
        return;
    }

    // Verifica se a data não está no passado
    if (data.value < ${ano}-${mes}-${dia}) {
        alert("Escolha uma data válida para sua encomenda.");
        return;
    }

    // Organiza as informações da encomenda
    const mensagem = `
Olá! Gostaria de fazer uma encomenda de arte personalizada.

DADOS DO CLIENTE

Nome: ${nome.value}
E-mail: ${email.value}
Telefone: ${telefone.value}

DADOS DA ENCOMENDA

Tipo de arte: ${tipo.value}
Quantidade: ${quantidade.value}
Data desejada: ${data.value}

Descrição da ideia:
${ideia.value}

Gostaria de conversar sobre os detalhes da minha encomenda!
    `;

    // Número de WhatsApp da artista
    // SUBSTITUA PELO NÚMERO REAL
    const numeroWhatsApp = "5551999999999";

    // Cria o link do WhatsApp
    const linkWhatsApp =
        https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)};

    // Confirmação antes de abrir o WhatsApp
    const confirmar = confirm(
        "Sua encomenda está pronta para ser enviada! Deseja continuar pelo WhatsApp?"
    );

    if (confirmar) {

        // Abre o WhatsApp com os dados preenchidos
        window.open(linkWhatsApp, "_blank");

    }

});
*/



// Abre ou fecha o menu ao clicar no botão
btnHamburguer.addEventListener("click", () => {
  const estaAberto = menuNav.classList.toggle("ativo");
  btnHamburguer.classList.toggle("ativo");
  btnHamburguer.setAttribute("aria-expanded", estaAberto);
});

// Fecha o menu automaticamente após clicar em um link no celular
linksMenu.forEach((link) => {
  link.addEventListener("click", () => {
    menuNav.classList.remove("ativo");
    btnHamburguer.classList.remove("ativo");
    btnHamburguer.setAttribute("aria-expanded", "false");
  });
});