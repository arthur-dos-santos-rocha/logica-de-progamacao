function validarSenha(senha) {
  if (senha.length < 8) {
    return "Senha inválida: deve ter pelo menos 8 caracteres.";
  } else if (senha.includes("123")) {
    return "Senha inválida: não pode conter '123'.";
  } else {
    return "Senha válida";
  }
}

// Exemplos:
console.log(validarSenha("abc"));         
console.log(validarSenha("abcdef123"));    
console.log(validarSenha("abcdefghi"));    