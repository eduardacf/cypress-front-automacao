# 🚀 Projeto de Testes Automatizados com Cypress + TypeScript

Este projeto tem como objetivo a criação de uma suíte de testes **end-to-end** automatizados para a aplicação demo [DemoQA](https://demoqa.com), utilizando **Cypress** e **TypeScript**.

Além da automação tradicional, o projeto inclui o uso de **comandos customizados** para tornar os testes mais reutilizáveis, legíveis e de fácil manutenção.

---

## 📚 Sumário

- [📖 Descrição](#-descrição)
- [🛠️ Tecnologias Utilizadas](#️-tecnologias-utilizadas)
- [📂 Estrutura do Projeto](#-estrutura-do-projeto)
- [🧩 Comandos Personalizados](#-comandos-personalizados)
- [🎯 Como Executar](#-como-executar)
- [✅ Boas Práticas](#-boas-práticas)
- [🤝 Contribuição](#-contribuição)
- [📄 Licença](#-licença)
- [📫 Contato](#-contato)

---

## 📖 Descrição

A suíte cobre interações em componentes como:

- Formulários com validações
- Alertas e modais
- Tooltips
- Frames
- Progresso dinâmico
- Tabelas dinâmicas
- Botões e eventos de mouse

Todos os testes estão organizados em arquivos separados por contexto, com comandos customizados para manter o código DRY e intuitivo.

---

## 🛠️ Tecnologias Utilizadas

- [Cypress 14.5.0](https://www.cypress.io/)
- [TypeScript 5.8.3](https://www.typescriptlang.org/)
- Node.js (v18+ recomendado)
- Editor sugerido: VS Code ou IntelliJ IDEA Ultimate

---

## 📂 Estrutura do Projeto

```plaintext
├── cypress.config.ts           # Configuração principal do Cypress
├── cypress/
│   ├── e2e/                    # Testes automatizados
│   │   └── *.cy.ts             # Testes por contexto
│   ├── fixtures/               # Dados de teste em JSON
│   └── support/
│       ├── commands/
│       │   ├── dynamic.ts      # Progresso e botão dinâmico
│       │   ├── estrutura.ts    # Alertas, iframe
│       │   ├── interacoes.ts   # Cliques, tooltips, radios, checkbox
│       │   ├── validacoes.ts   # Campos obrigatórios e formatos inválidos
│       │   └── navegacao.ts    # Navegação padronizada com rotas
│       └── e2e.ts              # Importa todos os comandos
├── package.json                # Configurações do projeto + dependências
└── tsconfig.json               # Configurações do TypeScript
```

---

## 🧩 Comandos Personalizados

### 🔄 Formulários e validações

```ts
cy.validarCampoObrigatorio('#inputEmail');
cy.validarFormatoInvalido('#inputEmail', 'email-invalido');
```

### 🖱️ Interações com elementos

```ts
cy.validarCliques(); // Clique duplo e direito
cy.validarTooltip('#toolTipButton', 'You hovered over the Button');
cy.selecionarCheckbox('Downloads');
cy.selecionarRadio('yesRadio', 'Yes');
```

### 📦 Componentes dinâmicos

```ts
cy.validarProgressoCompleto(); // Espera 100% na progress bar
cy.validarBotaoHabilitadoAposDelay(); // Aguarda botão ativar dinamicamente
```

### 🧪 Estrutura da página

```ts
cy.validarAlertaSimples('You clicked a button');
cy.validarConteudoDoFrame('#frame1', 'This is a sample page');
```

### 📊 Tabelas dinâmicas

```ts
cy.adicionarRegistroNaTabela(usuario); // Insere novo registro
cy.validarRegistroNaTabela(usuario);   // Valida conteúdo inserido
```

---

## 🎯 Como Executar o Projeto

### Pré-requisitos

- Node.js (v18 ou superior)
- npm instalado

### Passos

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git

# 2. Acesse o projeto
cd seu-repositorio

# 3. Instale as dependências
npm install

# 4. Execute os testes no modo headless
npx cypress run

# 5. Ou abra o Cypress em modo interativo
npx cypress open
```

---

## ✅ Boas Práticas

- Utilize comandos customizados para evitar duplicação
- Agrupe testes por contexto em `describe/context`
- Mantenha rotas centralizadas em um único arquivo (`navegacao.ts`)
- Use `cy.should` com polling para esperar elementos dinâmicos
- Evite `cy.wait()` fixo quando possível
- Prefira fixtures para dados de entrada

---

## 🤝 Contribuição

Contribuições são bem-vindas!  
Sinta-se à vontade para abrir *Issues* com sugestões ou *Pull Requests* com melhorias.

---

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE.md).

---

## 📫 Contato

**Eduarda Ferreira**  
📧 eduarda.cferreira10@gmail.com
🔗 [LinkedIn](https://www.linkedin.com/in/eduarda-ferreira/)  
🐙 [GitHub](https://github.com/eduardacf)

---

✨ Obrigado por contribuir com qualidade de software! 🚀