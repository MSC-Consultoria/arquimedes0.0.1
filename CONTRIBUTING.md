# Contribuindo para o Artemis

Primeiramente, obrigado por considerar contribuir para o Artemis! É graças a pessoas como você que o Artemis pode se tornar uma ferramenta ainda melhor para candidatos à OAB.

## Código de Conduta

Este projeto e todos os participantes estão sob o [Código de Conduta](CODE_OF_CONDUCT.md). Ao participar, espera-se que você mantenha este código. Por favor, reporte comportamentos inaceitáveis para suporte@mscconsultoria.com.br.

## Como Posso Contribuir?

### Reportando Bugs

Esta seção orienta você no processo de envio de um relatório de bug para o Artemis. Seguir essas diretrizes ajuda os mantenedores e a comunidade a entender seu relatório, reproduzir o comportamento e encontrar relatórios relacionados.

**Antes de criar um relatório de bug**, verifique se o problema já não foi reportado. Se encontrar um relatório existente e ainda aberto, adicione um comentário ao invés de abrir um novo.

**Como Enviar um Bom Relatório de Bug:**

- **Use um título claro e descritivo** para identificar o problema
- **Descreva os passos exatos para reproduzir o problema** com o máximo de detalhes possível
- **Forneça exemplos específicos** para demonstrar os passos
- **Descreva o comportamento observado** e explique qual era o comportamento esperado
- **Inclua screenshots e GIFs animados** se possível
- **Inclua detalhes sobre sua configuração e ambiente**

### Sugerindo Melhorias

Esta seção orienta você no processo de envio de uma sugestão de melhoria para o Artemis, incluindo recursos completamente novos e melhorias menores em funcionalidades existentes.

**Antes de criar uma sugestão de melhoria**, verifique se a sugestão já não foi feita. Se encontrar uma sugestão existente, adicione um comentário com suas ideias adicionais.

**Como Enviar uma Boa Sugestão de Melhoria:**

- **Use um título claro e descritivo** para identificar a sugestão
- **Forneça uma descrição passo a passo da melhoria sugerida** com o máximo de detalhes possível
- **Forneça exemplos específicos** para demonstrar os passos ou aponte exemplos de outros projetos
- **Descreva o comportamento atual** e explique qual comportamento você esperava ver e por quê
- **Explique por que essa melhoria seria útil** para a maioria dos usuários do Artemis

### Seu Primeiro Código de Contribuição

Não sabe por onde começar? Você pode começar procurando por issues marcadas como `good first issue` e `help wanted`:

- **Good first issue** - issues que devem exigir apenas algumas linhas de código e um ou dois testes
- **Help wanted** - issues que devem ser um pouco mais envolvidas que issues `good first issue`

### Pull Requests

O processo descrito aqui tem vários objetivos:

- Manter a qualidade do Artemis
- Corrigir problemas que são importantes para os usuários
- Engajar a comunidade na elaboração do melhor Artemis possível
- Habilitar um sistema sustentável para os mantenedores revisarem contribuições

**Siga estas etapas para ter sua contribuição considerada pelos mantenedores:**

1. Siga todas as instruções no [template de pull request](PULL_REQUEST_TEMPLATE.md)
2. Siga os [guias de estilo](#guias-de-estilo)
3. Depois de enviar seu pull request, verifique se todos os [status checks](https://help.github.com/articles/about-status-checks/) estão passando

Enquanto os pré-requisitos acima devem ser satisfeitos antes de ter seu pull request revisado, o(s) revisor(es) pode(m) solicitar que você complete trabalho adicional de design, testes ou outras mudanças antes que seu pull request possa ser finalmente aceito.

## Guias de Estilo

### Mensagens de Commit do Git

- Use o tempo presente ("Adiciona feature" não "Adicionou feature")
- Use o modo imperativo ("Move cursor para..." não "Move cursor para...")
- Limite a primeira linha a 72 caracteres ou menos
- Referencie issues e pull requests liberalmente após a primeira linha
- Considere começar a mensagem de commit com um emoji aplicável:
    - 🎨 `:art:` ao melhorar o formato/estrutura do código
    - 🐎 `:racehorse:` ao melhorar performance
    - 🚱 `:non-potable_water:` ao consertar vazamentos de memória
    - 📝 `:memo:` ao escrever documentação
    - 🐧 `:penguin:` ao corrigir algo no Linux
    - 🍎 `:apple:` ao corrigir algo no macOS
    - 🏁 `:checkered_flag:` ao corrigir algo no Windows
    - 🐛 `:bug:` ao corrigir um bug
    - 🔥 `:fire:` ao remover código ou arquivos
    - 💚 `:green_heart:` ao corrigir o build do CI
    - ✅ `:white_check_mark:` ao adicionar testes
    - 🔒 `:lock:` ao lidar com segurança
    - ⬆️ `:arrow_up:` ao atualizar dependências
    - ⬇️ `:arrow_down:` ao fazer downgrade de dependências
    - 👕 `:shirt:` ao remover avisos do linter

### Guia de Estilo TypeScript

- Use 2 espaços para indentação
- Prefira `const` sobre `let`. Nunca use `var`
- Use arrow functions quando possível
- Use template strings ao invés de concatenação de strings
- Use tipos explícitos quando a inferência não for clara
- Evite `any` - use tipos específicos ou `unknown`
- Use interfaces para objetos públicos, types para uniões/intersecções
- Nomeie interfaces com PascalCase (ex: `UserProfile`)
- Nomeie funções e variáveis com camelCase (ex: `getUserData`)
- Nomeie constantes com UPPER_SNAKE_CASE (ex: `MAX_RETRIES`)
- Use comentários JSDoc para funções públicas

**Exemplo:**

```typescript
/**
 * Busca dados do usuário por ID
 * @param userId - ID único do usuário
 * @returns Promise com dados do usuário
 */
async function getUserData(userId: string): Promise<UserProfile> {
  const response = await fetch(`/api/users/${userId}`);
  return response.json();
}
```

### Guia de Estilo React

- Use componentes funcionais com hooks
- Prefira composição sobre herança
- Mantenha componentes pequenos e focados
- Use TypeScript para props
- Extraia lógica complexa para custom hooks
- Use Context API para estado global
- Evite prop drilling - use Context quando necessário
- Nomeie arquivos de componentes com PascalCase (ex: `UserProfile.tsx`)
- Um componente por arquivo (exceto componentes muito pequenos e relacionados)

**Exemplo:**

```typescript
interface UserProfileProps {
  userId: string;
  onUpdate?: (user: User) => void;
}

export function UserProfile({ userId, onUpdate }: UserProfileProps) {
  const { user, loading } = useUser(userId);

  if (loading) return <LoadingSpinner />;
  if (!user) return <ErrorMessage />;

  return (
    <div className="user-profile">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}
```

### Guia de Estilo CSS/Tailwind

- Use Tailwind CSS classes quando possível
- Evite CSS customizado a menos que absolutamente necessário
- Use variáveis CSS para cores e espaçamentos
- Prefira classes utilitárias sobre componentes customizados
- Use `@apply` com moderação - prefira composição
- Mantenha consistência com o design system

**Exemplo:**

```tsx
<div className="flex items-center justify-between p-4 bg-background text-foreground rounded-lg shadow-md">
  <h3 className="text-lg font-semibold">{title}</h3>
  <Button variant="outline" size="sm">Ação</Button>
</div>
```

### Guia de Estilo de Testes

- Escreva testes para toda nova funcionalidade
- Use `describe` para agrupar testes relacionados
- Use `it` ou `test` para casos de teste individuais
- Nomeie testes de forma descritiva
- Siga o padrão AAA (Arrange, Act, Assert)
- Mock dependências externas
- Teste casos de sucesso e erro

**Exemplo:**

```typescript
describe("getUserData", () => {
  it("deve retornar dados do usuário quando ID é válido", async () => {
    // Arrange
    const userId = "123";
    const mockUser = { id: "123", name: "João" };
    
    // Act
    const result = await getUserData(userId);
    
    // Assert
    expect(result).toEqual(mockUser);
  });

  it("deve lançar erro quando ID é inválido", async () => {
    // Arrange
    const userId = "invalid";
    
    // Act & Assert
    await expect(getUserData(userId)).rejects.toThrow();
  });
});
```

## Estrutura de Branches

- `main` - Branch principal, sempre estável
- `develop` - Branch de desenvolvimento
- `feature/*` - Branches para novas funcionalidades
- `bugfix/*` - Branches para correções de bugs
- `hotfix/*` - Branches para correções urgentes em produção
- `release/*` - Branches para preparação de releases

## Processo de Revisão

1. **Automated checks** - CI/CD executa testes e linting
2. **Code review** - Pelo menos um mantenedor revisa o código
3. **Testing** - Funcionalidade é testada manualmente se necessário
4. **Approval** - Mantenedor aprova o PR
5. **Merge** - PR é mesclado na branch apropriada

## Reconhecimento

Contribuidores serão reconhecidos no README.md e no CHANGELOG.md.

## Dúvidas?

Sinta-se à vontade para abrir uma issue com a tag `question` ou enviar um email para suporte@mscconsultoria.com.br.

---

Obrigado por contribuir para o Artemis! 🏛️⚖️
