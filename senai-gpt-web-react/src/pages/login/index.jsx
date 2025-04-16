import "./login.css";

function Login() {


  //JavaScript

  return (
    <>

      <header></header>

      <main className="page-container">

        <div className="robo-image">

        </div>

        <div className="login-container">


          <img className="logo" src="../.vscode/assets/imgs/Chat.png" alt="Logo do SenaiGPT" />

          <h1
            id="meutitulo"
            class="titulo"> Login </h1>

          <input className="inpt" type="email"
            placeholder="Insira o e-mail" />
          <input className="inpt" type="password"
            placeholder="Insira a senha" />

          <button className ="botao-entrar">Entrar</button>

        </div>

      </main>

      <footer></footer>

    </>
  )
  //html
}

export default Login
