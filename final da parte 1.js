const alunos = [
  { nome: "Arthur", notas: [8, 9, 7] },
  { nome: "João", notas: [3, 4, 5] },
  { nome: "Roberto", notas: [6, 7] }
];


function buscarAluno(nome) {
  for (let i = 0; i < alunos.length; i++) {
    if (alunos[i].nome.toLowerCase() === nome.toLowerCase()) {
      return alunos[i];
    }
  }
  return undefined;
}

console.log(buscarAluno("Luan"))


function calcularMedia(aluno) {
  if (!aluno.notas || aluno.notas.length === 0) {
    return 0;
  }
  
  let soma = 0;
  for (let i = 0; i < aluno.notas.length; i++) {
    soma += aluno.notas[i];
  }
  
  return soma / aluno.notas.length;
}


function situacao(media) {
  if (media >= 6) {
    return "APROVADO";
  } else if (media >= 4) {
    return "RECUPERACAO";
  } else {
    return "REPROVADO";
  }
}


function cadastrarAluno() {
  let nome = prompt("Digite o nome do aluno que deseja cadastrar:");
  
  let alunoExistente = buscarAluno(nome); 
  
  if (alunoExistente) {
    alert("Erro: Este aluno já está cadastrado!");
    return;
  }
  
  alunos.push({ nome: nome, notas: [] });
  alert("Aluno " + nome + " cadastrado com sucesso!");
}


function listarAlunos() {
  if (alunos.length === 0) {
    alert("Nenhum aluno cadastrado");
    return;
  }
  
  let texto = "Alunos cadastrados:\n\n";
  for (let i = 0; i < alunos.length; i++) {
    texto += "- " + alunos[i].nome + "\n";
  }
  
  alert(texto);
}


function removerAluno() {
  let nome = prompt("Digite o nome do aluno que deseja remover:");
  
  let aluno = buscarAluno(nome);
  
  if (!aluno) {
    alert("Aluno não encontrado!");
    return;
  }
  
  let posicao = alunos.indexOf(aluno);
  alunos.splice(posicao, 1);
  
  alert("Aluno " + nome + " removido com sucesso!");
}

function lancarNota() {
  let nome = prompt("Digite o nome do aluno:");
  let aluno = alunos.find(a => a.nome === nome);
  
  if (!aluno) {
    alert("Aluno não encontrado!");
    return;
  }
  
  let nota = Number(prompt("Digite a nota (0 a 10):"));
  
  if (nota < 0 || nota > 10 || isNaN(nota)) {
    alert("Nota inválida!");
    return;
  }
  
  aluno.notas.push(nota);
  alert("Nota lançada com sucesso!");
}

function verBoletim() {
  let nome = prompt("Digite o nome do aluno:");
  let aluno = alunos.find(a => a.nome === nome);
  
  if (!aluno) {
    alert("Aluno não encontrado!");
    return;
  }
  
  let media = calcularMedia(aluno.notas);
  let sit = situacao(media);
  let notasStr = aluno.notas.join(", ");
  
  alert(
    "Aluno: " + aluno.nome + "\n" +
    "Notas: " + notasStr + "\n" +
    "Média: " + media.toFixed(2) + "\n" +
    "Situação: " + sit
  );
}


function totalDeAlunos() {
    alert("Total de alunos cadastrados: " + alunos.length);
}


function mediaGeralDaTurma() {
  
    if (alunos.length === 0) {
        alert("Não há alunos cadastrados para calcular a média.");
        return;
    }

    let somaDasMedias = 0;

    
    for (let i = 0; i < alunos.length; i++) {
        
        somaDasMedias += calcularMedia(alunos[i]); 
    }

    
    let mediaGeral = somaDasMedias / alunos.length;

    
    alert("Média geral da turma: " + mediaGeral.toFixed(2));
}


function listarAprovados() {
  
    if (alunos.length === 0) {
        alert("Não há alunos cadastrados.");
        return;
    }

    let textoAprovados = "--- ALUNOS APROVADOS ---\n";
    let encontrou = false; 

    
    for (let i = 0; i < alunos.length; i++) {
        let aluno = alunos[i];
        
      
        let media = calcularMedia(aluno);
        let status = situacao(media); 

     
        if (status === "APROVADO") {
            textoAprovados += `Nome: ${aluno.nome} - Média: ${media.toFixed(2)}\n`;
            encontrou = true; 
        }
    }

   
    if (!encontrou) {
        alert("Ainda não há alunos aprovados.");
    } else {
        alert(textoAprovados);
    }
}


function submenuCadastro() {
    let opcao;
    do {
        opcao = Number(prompt("=== CADASTRO DE ALUNOS ===\n1 - Cadastrar aluno\n2 - Listar alunos\n3 - Remover aluno\n0 - Voltar\n\nEscolha uma opção:"));
        
        switch (opcao) {
            case 1:
                cadastrarAluno();
                break;
            case 2:
                listarAlunos();
                break;
            case 3:
                removerAluno();
                break;
            case 0:
                break; 
            default:
                alert("Opcao invalida!");
        }
    } while (opcao !== 0);
}


function submenuNotas() {
    let opcao;
    do {
        opcao = Number(prompt("=== NOTAS E BOLETIM ===\n1 - Lancar nota\n2 - Ver boletim do aluno\n0 - Voltar\n\nEscolha uma opção:"));
        
        switch (opcao) {
            case 1:
                lancarNota();
                break;
            case 2:
                verBoletim();
                break;
            case 0:
                break; 
            default:
                alert("Opcao invalida!");
        }
    } while (opcao !== 0);
}


function submenuRelatorios() {
    let opcao;
    do {
        opcao = Number(prompt("=== RELATÓRIOS ===\n1 - Total de alunos\n2 - Media geral da turma\n3 - Listar aprovados\n0 - Voltar\n\nEscolha uma opção:"));
        
        switch (opcao) {
            case 1:
                totalAlunos();
                break;
            case 2:
                mediaGeral();
                break;
            case 3:
                listarAprovados();
                break;
            case 0:
                break; 
            default:
                alert("Opcao invalida!");
        }
    } while (opcao !== 0);
}


function menuPrincipal() {
    let opcao;
    do {
        opcao = Number(prompt("=== SISTEMA ESCOLAR ===\n1 - Cadastro\n2 - Notas\n3 - Relatorios\n0 - Sair\n\nEscolha uma opção:"));
        
        switch (opcao) {
            case 1:
                submenuCadastro();
                break;
            case 2:
                submenuNotas();
                break;
            case 3:
                submenuRelatorios();
                break;
            case 0:
                alert("Obrigado por usar o sistema. Até logo!");
                break;
            default:
                alert("Opcao invalida!");
        }
    } while (opcao !== 0);
}


menuPrincipal();

