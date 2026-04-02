# API simples de Mensagens utilizando NodeJS e Express

## Rotas
POST /webhook
GET /mensagens

## Testes

Iniciei o servidor localmente utilizando Node.js.  
Usei o Postman para enviar uma requisição POST para /webhook com um JSON contendo id e mensagem.  
Verifiquei se a API retornava sucesso após o envio.  
Em seguida, fiz uma requisição GET para /mensagens.  
Confirmei que as mensagens enviadas estavam sendo armazenadas e listadas corretamente.  

### Servidor rodando
![Servidor](prints/teste%20servidor.png)

### POST /webhook
![POST](prints/teste1.png)

### GET /mensagens
![GET](prints/teste2.png)
