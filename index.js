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

const itens = [
  { nome: "Equipo macrogotas", qtdConta: 2, qtdProntuario: 5 },
  { nome: "Dieta enteral", qtdConta: 3, qtdProntuario: 3 },
  { nome: "Jelco 22", qtdConta: 4, qtdProntuario: 1 },
];

for (const item of itens) {
  console.log(item.nome + ": " + definirAcao(item.qtdConta, item.qtdProntuario));
}