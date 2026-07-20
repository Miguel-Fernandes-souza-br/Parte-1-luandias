
let alunos = [
  { nome: "Ana", notas: [8, 7, 9] },
{ nome: "matias", notas: [9, 7, 9] },
{ nome: "rodolfo ", notas: [3, 7, 9] }

];


function buscarAluno(nome) {
  for (let i = 0; i < alunos.length; i++) {
    
    if (alunos[i].nome.toLowerCase() === nome.toLowerCase()) {
      return alunos[i];
    }
  }
  return undefined;
}
 console.log(buscarAluno("matias"))