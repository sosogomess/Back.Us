import  Aluno  from './aluno.js'

class Dev extends Aluno {
    constructor(nome, grupo, funcao) {
        this.nome = nome;
        this.grupo = grupo;
        this.funcao = funcao;
    }
}
export default Dev;