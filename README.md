# 🚀 Projeto de Testes Automatizados com Cypress + TypeScript
### Testes E2E para a plataforma DemoQA, com estrutura modular e comandos customizados

Este projeto automatiza testes end-to-end da aplicação [DemoQA](https://demoqa.com), utilizando **Cypress** com **TypeScript**.

A automação cobre interações complexas de UI com foco em clareza, reutilização e boas práticas, incluindo:
- Comandos Cypress personalizados
- Fixtures organizadas
- Estrutura de testes por contexto

---

## Sumário
- [Descrição](#-descrição)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Comandos Personalizados](#-comandos-personalizados)
- [Como Executar](#-como-executar-o-projeto)
- [Boas Práticas](#-boas-práticas)
- [Contribuição](#-contribuição)
- [Licença](#-licença)
- [Contato](#-contato)

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
│   │   ├── componentes-ui.cy.ts
│   │   ├── comportamentos-dinamicos.cy.ts
│   │   ├── frames-alerts.cy.ts
│   │   ├── interacoes.cy.ts
│   │   └── forms/
│   │       ├── form-completo.cy.ts
│   │       └── form-validacoes.cy.ts
│   ├── fixtures/               # Dados de teste em JSON
│   │   ├── usuario.json
│   │   ├── usuario-tabela.json
│   │   └── foto.jpg
│   └── support/
│       ├── commands/           # Comandos customizados do Cypress
│       │   ├── demoqa.ts       # Cadastro, alertas e modais
│       │   ├── dynamic.ts      # Progresso e botão dinâmico
│       │   ├── estrutura.ts    # Alertas simples e iframes
│       │   ├── form.ts         # Ações do formulário principal
│       │   ├── interacoes.ts   # Cliques, tooltips, radios e checkbox
│       │   ├── modal.ts        # Validação do modal de envio
│       │   ├── navegacao.ts    # Navegação padronizada com rotas
│       │   └── validacoes.ts   # Campos obrigatórios e formatos inválidos
│       ├── e2e.ts              # Importa todos os comandos
│       └── index.d.ts          # Tipagens dos comandos customizados
├── package.json                # Configurações do projeto e scripts
├── package-lock.json
├── cypress/tsconfig.json       # Configurações do TypeScript
├── eslint.config.js            # Regras do ESLint
├── .prettierrc                 # Regras do Prettier
└── .gitignore
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
cy.validarCliques(); // Valida cliques duplo e com botão direito
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
cy.adicionarRegistroTabela(usuario); // Insere novo registro
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

# 4. Abra a interface do Cypress
npm run cy:open

# 5. Execute os testes em modo headless
npm run cy:run

# 6. Verifique o estilo de código e formate arquivos
npm run lint
npm run format
```

---

## 📜 Scripts disponíveis

- `npm run cy:open` – Abre a interface visual do Cypress
- `npm run cy:run` – Executa os testes no modo headless
- `npm run lint` – Verifica padrões de código com ESLint
- `npm run format` – Formata o código com Prettier

---

## ✅ Boas Práticas

- ✅ **Use comandos customizados**: Evita duplicação e torna os testes mais legíveis.
- 🧱 **Centralize rotas**: Facilita manutenção e evita erros de digitação.
- ⏱️ **Evite `cy.wait()` fixo**: Prefira `cy.should` para esperar elementos dinamicamente.
- 🧪 **Separe por contexto**: Organize testes em arquivos como `form`, `alert`, `dynamic`, etc.

---

## 🤝 Contribuição

Contribuições são bem-vindas!  
Sinta-se à vontade para abrir *Issues* com sugestões ou *Pull Requests* com melhorias.

---

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---
## 📫 Contato

**Eduarda Ferreira**  
📧 eduarda.cferreira10@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/eduarda-ferreira/)  
🐙 [GitHub](https://github.com/eduardacf)

---
🧪 Feito com foco em qualidade, clareza e boas práticas.  
💬 Sugestões e feedbacks são sempre bem-vindos!