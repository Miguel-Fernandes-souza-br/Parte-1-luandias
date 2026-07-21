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


