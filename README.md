# bootcamp-gitflow

## Conferência conta × prontuário

Projeto de estudo do bootcamp para praticar Git e Git Flow no curso de Engenharia de ia .

A ideia é simular uma automação de auditoria: - Peguei um tema simples do dia a dia de OPS no meu trabalho na Revena. comparar a quantidade de um item lançada na conta do paciente com a quantidade registrada no prontuário e mostrar a diferença que ficou sem cobrar.

## Branches

- **main**: branch criada junto com o repositório
- **develop**: onde as features prontas são juntadas
- **stage**: onde o código é validado antes de ir para produção
- **prod**: versão final, que o usuário usa
- **feature/...**: uma branch para cada funcionalidade nova. Ela sai da develop e volta para a develop por pull request

## Padrão de commits

- `feat:` funcionalidade nova
- `fix:` correção de erro
- `docs:` mudança em documentação