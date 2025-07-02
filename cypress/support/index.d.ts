/// <reference types="cypress" />

declare namespace Cypress {
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

    interface Chainable<Subject = unknown> {
        preencherFormularioBasico(usuario: Pick<Usuario, 'nome' | 'sobrenome' | 'email' | 'telefone'>): Chainable<Subject>;

        validarModal(usuario: Usuario): void;

        selecionarLocalidade(estado: string, cidade: string): void;

        preencherEndereco(endereco: string): void;

        selecionarHobbies(hobbies: string[]): void;

        selecionarDisciplinas(disciplinas: string[]): void;

        preencherDataNascimento(data: DataNascimento): void;

        submeterFormulario(): void;

        validarEnvioComSucesso(): void;

        fecharModal(): void;

        uploadImagemDoUsuario(foto: string): void;

        validarCampoObrigatorio(seletor: string): void;

        validarFormatoInvalido(seletor: string, valorInvalido: string): void;

        validarLarguraCampo(seletor: string, minimo: number): void;

        confirmarAlerta(botaoSeletor: string, resultadoEsperado: string): void;

        adicionarRegistroTabela(usuario: UsuarioTabela): void;

        validarModalPequeno(): void;

        validarRegistroNaTabela(usuario: UsuarioTabela): void;

        validarBotaoHabilitadoAposDelay(): void;

        validarProgressoCompleto(): void;

        validarConteudoDoFrame(seletorFrame: string, textoEsperado: string): void;

        validarAlertaSimples(mensagemEsperada: string): void;

        validarTooltip(seletor: string, textoEsperado: string): void;

        selecionarCheckbox(labelTexto: string): void;

        selecionarRadio(idInput: string, textoEsperado: string): void;

        validarCliques(): void;

        acessarPagina(pagina: string): void;

        verificarAcessibilidadeComLogs(): void
    }
}