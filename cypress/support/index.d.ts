/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject = any> {
        preencherFormularioBasico(usuario: {
            nome: string;
            sobrenome: string;
            email: string;
            telefone: string;
        }): Chainable<Subject>;

        validarModal(usuario: any): void

        selecionarLocalidade(estado: string, cidade: string): void

        preencherEndereco(endereco: string): void

        selecionarHobbies(hobbies: string[]): void

        selecionarDisciplinas(disciplinas: string[]): void

        preencherDataNascimento(data: any): void

        submeterFormulario(): void

        validarEnvioComSucesso(): void

        fecharModal(): void

        uploadImagemDoUsuario(foto: string): void

        validarCampoObrigatorio(seletor: string): void

        validarFormatoInvalido(seletor: string, valorInvalido: string): void

        validarLarguraCampo(seletor: string, minimo: number): void

        confirmarAlerta(botaoSeletor: any, resultadoEsperado: any): void

        adicionarRegistroTabela(usuario: any): void

        validarModalPequeno(): void

        validarRegistroNaTabela(usuario: any): void

        validarBotaoHabilitadoAposDelay(): void

        validarProgressoCompleto(): void

        validarConteudoDoFrame(seletorFrame: any, textoEsperado: any): void

        validarAlertaSimples(mensagemEsperada: any): void

        validarTooltip(seletor: any, textoEsperado: any): void

        selecionarCheckbox(labelTexto: any): void

        selecionarRadio(idInput: any, textoEsperado: any): void

        validarCliques(): void

        acessarPagina(pagina: any): void
    }
}
