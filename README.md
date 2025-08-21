
## O Desafio

O objetivo do exercício foi:

1. Criar uma função **de multiplicação**, que:
   - Recebe **dois números**;
   - Retorna o resultado da multiplicação.
2. Criar uma função **de saudação**, que:
   - Recebe **um nome**;
   - Retorna uma mensagem personalizada de boas-vindas.
3. Aplicar corretamente a **tipagem estática do TypeScript**.

---

## Código Implementado

```typescript
function multiplicar(num1: number, num2: number): number {
  return num1 * num2;
}

function saudacao(nome: string): string {
  return `Olá ${nome}`;
}

const resultadoMultiplicacao = multiplicar(5, 10);
const mensagemSaudacao = saudacao("rafael");

console.log(`Resultado da multiplicação: ${resultadoMultiplicacao}`);
console.log(`Mensagem de saudação: ${mensagemSaudacao}`);
