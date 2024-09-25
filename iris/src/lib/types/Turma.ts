// TODO:
// Depois verificar como estão nomeados os atributos dentro do banco de dados.

import type {Aluno} from "$lib/types/Aluno";
import type {Professor} from "$lib/types/Professor";
import type {Disciplina} from "$lib/types/Disciplina";

export interface Turma {
    nome: string;
    alunos: Aluno[];
}