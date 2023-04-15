const subscribe = confirm("Gostaria de se inscrever para receber nossas notícias por e-mail?");
if (subscribe) {
   const email = prompt("Digite seu e-mail:");
   alert("Obrigado por se inscrever! Você receberá nossas notícias em breve no endereço " + email);
} else {
   alert("Tudo bem, continue nos acompanhando em nossas próximas atualizações!");
}
