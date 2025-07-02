/// <reference types="cypress" />

import type { Pagina } from './commands/navegacao';

declare namespace Cypress {
    // 📌 Modelos de dados para testes

    interface DataNascimento {
        dia: string;
        mes: string;
        ano: string;
    }

    interface Usuario {
        nome: string;
        sobrenome: string;
        email: string;
        telefone: string;
        data: string;
        dataNascimento: DataNascimento;
        disciplinas: string[];
        hobbies: string[];
        estado: string;
        cidade: string;
        endereco: string;
        foto: string;
    }

    interface UsuarioTabela {
        nome: string;
        sobrenome: string;
        email: string;
        idade: string;
        salario: string;
        departamento: string;
    }

    // ✅ Comandos customizados do Cypress
    interface Chainable<Subject = unknown> {
        // Navegação
        acessarPagina(pagina: Pagina): Chainable<void>;

        // Formulário completo
        preencherFormularioBasico(usuario: Pick<Usuario, 'nome' | 'sobrenome' | 'email' | 'telefone'>): Chainable<Subject>;
        preencherDataNascimento(data: DataNascimento): Chainable<Subject>;
        selecionarDisciplinas(disciplinas: string[]): Chainable<Subject>;
        selecionarHobbies(hobbies: string[]): Chainable<Subject>;
        preencherEndereco(endereco: string): Chainable<Subject>;
        selecionarLocalidade(estado: string, cidade: string): Chainable<Subject>;
        uploadImagemDoUsuario(foto: string): Chainable<Subject>;
        submeterFormulario(): Chainable<Subject>;
        validarModal(usuario: Usuario): Chainable<Subject>;
        fecharModal(): Chainable<Subject>;
        validarEnvioComSucesso(): Chainable<Subject>;

        // Validações de formulário
        validarCampoObrigatorio(seletor: string): Chainable<Subject>;
        validarFormatoInvalido(seletor: string, valorInvalido: string): Chainable<Subject>;
        validarLarguraCampo(seletor: string, minimo: number): Chainable<Subject>;

        // Alertas e modais
        confirmarAlerta(botaoSeletor: string, resultadoEsperado: string): Chainable<Subject>;
        validarAlertaSimples(mensagemEsperada: string): Chainable<Subject>;
        validarModalPequeno(): Chainable<Subject>;

        // Tabela dinâmica
        adicionarRegistroTabela(usuario: UsuarioTabela): Chainable<Subject>;
        validarRegistroNaTabela(usuario: UsuarioTabela): Chainable<Subject>;

        // Comportamentos dinâmicos
        validarBotaoHabilitadoAposDelay(): Chainable<Subject>;
        validarProgressoCompleto(): Chainable<Subject>;

        // Estrutura e elementos
        validarConteudoDoFrame(seletorFrame: string, textoEsperado: string): Chainable<Subject>;
        validarTooltip(seletor: string, textoEsperado: string): Chainable<Subject>;

        // Interações (mouse, checkbox, radio)
        validarCliques(): Chainable<Subject>;
        selecionarCheckbox(labelTexto: string): Chainable<Subject>;
        selecionarRadio(idInput: string, textoEsperado: string): Chainable<Subject>;

        // Acessibilidade
        verificarAcessibilidadeComLogs(): Chainable<Subject>;
    }
}
