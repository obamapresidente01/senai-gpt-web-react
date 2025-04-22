#SenaiGPT React

1. Verificar se esta com a versao do node v20 instalado.
2. node --version (no cmd, em qualquer pasta.
   ![image](https://github.com/user-attachments/assets/c3244bf6-8e82-46f7-87d1-9bf8c0e0f719)
3.Execute o comando no cmd do repositorio: npm create vite@latest senai-gpt-web-react -- --template react:

ele cria uma pasta dentro do repositorio e mostra 3 comandos: cd senai-gpt-web-react (pasta criada).
npm install (baixa o node modules).
npm run dev (entrar no link do site).

4. No mesmo repositorio, execute o cd senai-gpt-web-react.
5. Execute o code . (abre o vs code).
6. Coloque o seu projeto e no vs code substitua o powershell pro git bash.
7. Abra o terminal e coloque npm install e npm run dev.
8. http cats e http status codes (para erros)
9. trouxemos o html para o projeto react.


#LOGIN 
1. Criar pastas dentro do src:
   - Pages/login: dentro dele colocamos a pasta chat e login, dentro da pasta login colocamos o index.jsx e login.css
   - Index.jsx: vinha padrao do node.js apagamos e modificamos para adaptar pro nosso projeto
   - Login.css: criamos o login.css e copiamos o codigo e colamos do login.css do senai-gpt-web, apenas mudando o caminho da linkagem das imagens
  
2. No src criamos outra pasta chamada imgs onde passamos as imagens do projeto original aqui para o senai-gpt-web-react

3. Entramos no main.jsx e App.jsx e apagamos dentro de ambos os arquivos.
   - App.jsx usamos a function app pra chamar a tela de login.
   - main.jsx linkamos o css chamado global.css
     
4. Dentro do index.jsx:
   - Renomeamos todas as class para className.
   - importamos o login.css, linkando a logo do senaigpt.
   - usamos a função login e const para senha e email
   - const onLoginclick = async para declarar uma variavel constante e atribui uma seta de assíncrona q pode ser fundida com o await para pausar uma execução e aguardar a resolução das 
     promessas.
   - O fetch para um endpoint do lado do server responsável pela autenticação.
   - Método POST que envia os dados para o server.
   - JSON Stringify que pega o email e senha e converte em uma string json antes de ser enviado.
   - LocalStorage para armazenar o valor no armazenamento local do navegador
   - OnChange serve para o usuário digitar algo e chamar a função para atualizar o valor da variável email com o que foi digitado.
