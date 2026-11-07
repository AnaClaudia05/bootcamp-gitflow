function calcularDiferenca(qtdConta, qtdProntuario) {
  return qtdProntuario - qtdConta;
}

function definirAcao(qtdConta, qtdProntuario) {
  const diferenca = calcularDiferenca(qtdConta, qtdProntuario);

  if (diferenca > 0) {
    return "Lançar " + diferenca + " na conta";
  }

  if (diferenca < 0) {
    return "Abrir pendência: conta tem " + (-diferenca) + " a mais que o prontuário";
  }

  return "Conta confere com o prontuário";
}