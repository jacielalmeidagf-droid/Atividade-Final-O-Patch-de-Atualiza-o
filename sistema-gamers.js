const prompt = require("prompt-sync")();

let time = [];
let continuar = true;

function mostrarMenu() {
    console.log("\n=============================");
    console.log("------ SISTEMA DE GAMERS ------");
    console.log("1 - Cadastrar");
    console.log("2 - Deletar");
    console.log("3 - Mostrar Equipe");
    console.log("4 - Cálculo da Media da Equipe");
    console.log("5 - Atualizar Pontos");
    console.log("6 - Sair");
}

function mostraEquipe() {
    if (time.length === 0) {
        console.log("Nenhum jogador cadastrado!");
        return;
    }

    for (let i = 0; i < time.length; i++) {
        let jogador = time[i];
        console.log((i + 1) + ". " + jogador.nome + " | Função: " + jogador.funcao + " | Pontuação: " + jogador.pontuacao);
    }
}

function cadastrarJogador() {
    let nomeJogador = prompt("Digite o nome do Jogador: ");
    let funcaoJogador = prompt("Digite a função no time: ");
    let pontuacaoJogador = Number(prompt("Digite a pontuação: "));

    if (isNaN(pontuacaoJogador)) {
        console.log("Pontuação inválida!");
        return;
    }

    let recruta = {
        nome: nomeJogador,
        funcao: funcaoJogador,
        pontuacao: pontuacaoJogador,
    };

    time.push(recruta);
    console.log("Usuario " + nomeJogador + " foi cadastrado com sucesso!");
}

function deletarJogador() {
    if (time.length === 0) {
        console.log("Nenhum jogador cadastrado!");
        return;
    }

    let nomeDeletado = prompt("Digite o nome a ser deletado: ");
    let indexDeletado = -1;

    for (let i = 0; i < time.length; i++) {
        if (time[i].nome === nomeDeletado) {
            indexDeletado = i;
            break;
        }
    }

    if (indexDeletado === -1) {
        console.log("Jogador não encontrado.");
        return;
    }

    time.splice(indexDeletado, 1);
    console.log("Jogador deletado com sucesso!");
}

function calculoMedia() {
    if (time.length === 0) {
        console.log("Nenhum jogador cadastrado!");
        return;
    }

    let totalPontos = 0;

    for (let i = 0; i < time.length; i++) {
        totalPontos = totalPontos + time[i].pontuacao;
    }

    let mediaPontos = totalPontos / time.length;

    console.log("O time possui uma pontuação média de: ", mediaPontos);
}

function atualizarPontuacao() {
    let nomeJogador = prompt("Qual o nome do jogador que você quer atualizar? ");
    let encontrado = false;

    for (let i = 0; i < time.length; i++) {

        if (nomeJogador === time[i].nome) {
            let pontosNovos = Number(prompt("Quantos pontos ele ganhou? "));

            time[i].pontuacao += pontosNovos;

            console.log("SUCESSO! A pontuação de " + time[i].nome + " subiu para " + time[i].pontuacao + " pontos!");

            encontrado = true;
            break;
        }
    }

    if (encontrado === false) {
        console.log("Jogador não encontrado!");
    }
}

while (continuar === true) {
    mostrarMenu();

    let opcao = prompt("Digite sua opção: ");

    if (opcao === "1") {
        cadastrarJogador();
    } else if (opcao === "2") {
        deletarJogador();
    } else if (opcao === "3") {
        mostraEquipe();
    } else if (opcao === "4") {
        calculoMedia();
    } else if (opcao === "5") {
        atualizarPontuacao();
    } else if (opcao === "6") {
        continuar = false;
    } else {
        console.log("Opção invalida, digite outra opção...");
    }
}