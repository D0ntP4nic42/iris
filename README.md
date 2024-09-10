# Sistema Íris
Sistema **Íris** de gerenciamento acadêmico.

## Objetivo do sistema
O sistema tem como objetivo auxiliar e substituir parte do trabalho manual realizado pelos servidores do **CEDLAN**, facilitando o gerenciamento de notas e de turmas das disciplinas eletivas (antes feito por uma tabela no Excel). O sistema será desenvolvido por 3 grupos divididos entre Front-end, Back-end e o banco de dados/servidor. Nosso grupo irá desenvolver o Front-end.

## Tecnologias
- **Svelte**
- **Bootstrap**
- **Git**

## Equipe
**Luiz Gustavo**: Design geral do sistema, UI/UX e gerenciamento de requisitos (Github: https://github.com/1917dc) \
**Karoline Rodrigues**: Desenvolvimento de todo Front-end relacionado ao acesso de administradores ao sistema (Github: ) \
**Vinícius Rodrigues**: Desenvolvimento de todo Front-end relacionado ao acesso de professores ao sistema (Github: ) \
**Raquel Pereira**: Desenvolvimento de todo Front-end relacionado ao acesso de alunos ao sistema (Github: ) \
**Leôncio Brito**: Gerenciamento do repositório e assistência de forma geral (Github: https://github.com/D0ntP4nic42)

## Como rodar nosso projeto
Para rodar nosso projeto basta clonar o respositório com:
```bash
git clone "https://github.com/nomeDoPerfil/nomeDoRepositório.git"
```
O próximo passo é usar o comando **cd** para navegar até pasta **iris-app**:
```bash
cd ../iris/iris-app
```
Com seu console dentro da pasta **iris-app** use:
```bash
npm install
```
Seguido de:
```bash
npm run dev
```
O projeto agora está rodando, basta abrir o navegador no localhost com a porta que aparece no terminal.

# Demandas:

- Melhor organizar a aplicação em componentes;
- Implementar a autenticação de usuário via server side;
- Implementar confirmação de senha no registro, além de levantar o que precisamos efetivamente para o registro de usuários novos.
