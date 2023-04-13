function mostrarInputs() {
    document.getElementById("inputs").style.display = "block";
  }
  
  function fazerLogin() {
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;
  
    // aqui você pode incluir o código para verificar o usuário e senha
  
    alert("Usuário: " + usuario + "\nSenha: " + senha);

    alert("Bem-vindo, " + usuario + "!");
  }