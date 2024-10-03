// TODO:
// Depois verificar como estão nomeados os atributos dentro do banco de dados.

import type {Professor} from "$lib/types/Professor";
import type {Turma} from "$lib/types/Turma";

export interface Disciplina {
    nome: string;
    professor: Professor;
    horario: string;
    diaSemana: string;
    qtdVagas: number;
    turmas: Turma[];
}