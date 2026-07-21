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