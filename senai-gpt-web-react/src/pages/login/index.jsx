import "./login.css";
import logo from "../../assets/imgs/Chat.png";
import { useState } from "react";



function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // function onLoginClick {

  //   Gera um novo escopo.

  // }

  const onLoginClick = async () => {

      let response = await fetch ("https://senai-gpt-api.azurewebsites.net/login", { 


        headers: {
          "Content-Type": "application/json"

        },
        method: "POST", //Metedo que envia dados
        body: JSON.stringify({
          email: email, 
          password: password
        })


      });

        console.log(response)
  
    //Mantem o escopo existente.
  }


  //JavaScript

  return (
    <>

      <header></header>

      <main className="page-container">

        <div className="robo-image">

        </div>

        <div className="login-container">


          <img className="logo" src={logo} alt="Logo do SenaiGPT" />

          <h1
            id="meutitulo"
            class="titulo"> Login </h1>

          <input className="inpt" value={email} onChange={event => setEmail(event.target.value)} type="email"
            placeholder="Insira o e-mail" />
          <input className="inpt" value={password} onChange={event => setPassword(event.target.value)} type="password"
            placeholder="Insira a senha" />

          <button className ="botao-entrar" onClick={() => onLoginClick()}>Entrar</button> 

        </div>

      </main>

      <footer></footer>

    </>
  )
  //html
}

export default Login
