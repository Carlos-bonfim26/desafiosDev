let matriz1 =[
    [2,2],
    [2,2]
];
let matriz2 =[
    [2,2],
    [2,2]
];

function somaMatrizes(matriz1, matriz2){
let matriz3 = []
let linhas = 2;
let colunas = 2;
    for(let i =0; i < linhas; i++){
        matriz3[i]=[];
        for (let j = 0; j < colunas; j++) {
           matriz3[i][j] = matriz1[i][j] + matriz2[i][j];
        }
    }
    return matriz3;
}

console.log(somaMatrizes(matriz1, matriz2));
