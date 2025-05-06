import "./newuser.css"
import logo from "../../assets/imgs/Chat.png";
import { useState } from "react";


//function sempre deixa letra maiuscula
function NewUser() {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const  OnNewUserClick = async () => {

    if(name == "") {
        alert ("Preencha o nome do usuário.")
        return;
    }

    if(email == "") {
        alert ("Preencha o e-mail.")
        return;
    }

    if(password == "") {
        alert ("Preencha a senha.")
        return;
    }
    if (confirmpassword == "") {
        alert ("Preencha a confirmção de senha")
    }

    if (password != confirmpassword) {
        alert ("As senhas não conferem")
        return;
    }

    let response = await fetch("https://senai-gpt-api.up.railway.app/users", {


      headers: {
        "Content-Type": "application/json"

      },
      method: "POST", //Metedo que envia dados
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        confirmpassword: password
      })


    })

    if (response.ok == true) {

      alert("Cadastro Realizado com sucesso");

      console.log(response);

      let json = await response.json();

      let token = json.accessToken;
      let userId = json.user.id;

      console.log("Token" + token);

      //LOCALSTORAGE

      localStorage.setItem("meuToken", token);
      localStorage.setItem("meuId", userId)

      window.location.href = "/login";

    } else {

      if (response.status == 401) {

        alert("Credenciais Incorretas. Tente Novamente.");

      } else {

        alert("Erro inesperado aconteceu, caso persista contate os administradores");

      }
    }
  }

  //JavaScript

  return (
      <>
  
        <header></header>
  
        <main className="page-container">
  
          <div className="tech-image">
  
          </div>
  
          <div className="cadastro-container">
  
  
            <img className="logo" src={logo} alt="Logo do SenaiGPT" />
  
            <h1
              id="meutitulo"
              className="titulo"> Novo Usuário </h1>
  
            <input className="inpt" value={name} onChange={event => setName(event.target.value)} type="name"
              placeholder="Insira o nome do usuário" />
            <input className="inpt" value={email} onChange={event => setEmail(event.target.value)} type="email"
              placeholder="Insira o e-mail" />
            <input className="inpt" value={password} onChange={event => setPassword(event.target.value)} type="password"
              placeholder="Insira a senha" />
            <input className="inpt" value={confirmpassword} onChange={event => setConfirmPassword(event.target.value)} type="password"
              placeholder="Insira a senha" />
  
            <button className="botao-entrar" onClick={() => OnNewUserClick()}>Entrar</button>

            <br />

            <a className="form-hint" href="/login"> Clique aqui para fazer o login </a>
  
          </div>
  
        </main>
  
        <footer></footer>
  
      </>
    )
  }
  //html
  export default NewUser;
  