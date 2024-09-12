import type {RequestEvent} from "@sveltejs/kit";

export const authenticateUser = (event: RequestEvent) => {
    const { cookies } = event

    const token = cookies.get("auth")


    // com finalidade apenas de testes.
    if(token === "tokenProfessor"){
        const user = {
            nome: "Gerival",
            role: "Professor"
        }
        return user;
    }

    if(token === "tokenCoordenador"){
        const user = {
            nome: "Roberto",
            role: "Coordenador"
        }
        return user
    }

    return null
}