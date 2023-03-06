
// capturar o nome do aluno
let student1 = prompt('Qual o nome do(a) primeiro aluno(a)?')
let n1 = prompt('Qual a nota da primeira prova?')
let n2 = prompt('Qual a nota da segunda prova?')

let student2 = prompt('Qual o nome do(a) segundo aluno(a)?')
let n3 = prompt('Qual a nota da primeira prova?')
let n4 = prompt('Qual a nota da segunda prova?')

let student3 = prompt('Qual o nome do(a) terceiro aluno(a)?')
let n5 = prompt('Qual a nota da primeira prova?')
let n6 = prompt('Qual a nota da segunda prova?')

// criar uma função que ira calcular a nota de cada aluno (average = média) (n1 + n2 + n3) / 3
let average1 = (Number(n1) + Number(n2)) / 2
let average2 = (Number(n3) + Number(n4)) / 2
let average3 = (Number(n5) + Number(n6)) / 2

average1 = average1.toFixed(2)
average2 = average2.toFixed(2)
average3 = average3.toFixed(2)

// Estudent1
if (average1 > 6) {
  alert(
    'A média do(a) aluno(a) ' +
      student1 +
      ' é: ' +
      average1 +
      '\n' +
      'Parabêns ' +
      student1 +
      '! voçê foi aprovado(a) no concurso! '
  )
} else {
  alert(
    'A média do(a) aluno(a) ' +
      student1 +
      ' é: ' +
      average1 +
      '\n' +
      'Não foi dessa vez, ' +
      student1 +
      '! Tente novamente!'
  )
}

// Estudent2
if (average2 > 6) {
  alert(
    'A média do(a) aluno(a) ' +
      student2 +
      ' é: ' +
      average2 +
      '\n' +
      'Parabêns ' +
      student2 +
      '! voçê foi aprovado(a) no concurso! '
  )
} else {
  alert(
    'A média do(a) aluno(a) ' +
      student2 +
      ' é: ' +
      average2 +
      '\n' +
      'Não foi dessa vez, ' +
      student2 +
      '! Tente novamente!'
  )
}

// Estudent3
if (average3 > 6) {
  alert(
    'A média do(a) aluno(a) ' +
      student3 +
      ' é: ' +
      average3 +
      '\n' +
      'Parabêns ' +
      student3 +
      '! voçê foi aprovado(a) no concurso! '
  )
} else {
  alert(
    'A média do(a) aluno(a) ' +
      student3 +
      ' é: ' +
      average3 +
      '\n' +
      'Não foi dessa vez, ' +
      student3 +
      '! Tente novamente!'
  )
}


