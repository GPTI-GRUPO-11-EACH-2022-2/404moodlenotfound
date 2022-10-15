# 404moodlenotfound

## Como rodar na máquina local

Primeiro roda-se o server backend
`cd server && npm install && npm run dev`

Após, o server front-end
`cd client && npm install && npm start`

Ambos comandos devem ser executados na pasta raiz do repositório

## Como rodar com docker

Primeiro, garanta que o seu computador pode executar o script `exec_shell_docker.sh`. Então, execute-o:
- `./exec_shell_docker.sh`

Isso vai criar um container docker, rodá-lo e então entrar no container com uma shell. As portas 5000 (server) e 3000 (client) estarão expostas para comunicação com a aplicação

## Como deployar

É preciso estar logado no heroku CLI e ter acesso às aplicações `miglia` e `miglia-server`

### Server Front-end
Para definir a branch remota para o server:
`heroku git:remote --remote heroku-client -a miglia`

Para deployar a aplicação (Apenas se tiver commit novo):
`git push heroku-client main`

### Server Back-end
Para definir a branch remota para o server:
`heroku git:remote --remote heroku-server -a miglia-server`

Para deployar o server (Apenas se tiver commit novo):
`git push heroku-server main`
