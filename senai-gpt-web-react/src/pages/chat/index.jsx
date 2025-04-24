import "./chat.css"
import "../../assets/styles/global.css"
import Balloon from "../../assets/imgs/ChatText.png";
import Trash from "../../assets/imgs/Trash.png";
import LightMode from "../../assets/imgs/IconSet.png";
import User from "../../assets/imgs/User.png";
import UpdateFAQ from "../../assets/imgs/ArrowSquareOut.png";
import Logout from "../../assets/imgs/SignOut.png";
import LogoDoSenaiGPT from "../../assets/imgs/Chat.png"
import ChatBalloon from "../../assets/imgs/Chats.png"
import Star from "../../assets/imgs/Star.png"
import Limitation from "../../assets/imgs/ShieldWarning.png"
import PaperPlane from "../../assets/imgs/PaperPlaneRight.png"
import Microphone from "../../assets/imgs/microphone-solid.svg"
import Image from "../../assets/imgs/image-solid.svg"
import { useEffect, useState } from "react";



function Chat() {

      const [chats, setChats] = useState ([]);

    useEffect(() => {
        //Exeecuta toda vez que a tela abre.
      

        getChats();




    }, []);

    const getChats = async () => {
        //Arrow Function
        let response = await fetch("https://senai-gpt-api.azurewebsites.net/chats", {
            headers: {
                "Authorization" : "Bearer " + localStorage.getItem("meuToken")
            }

        });

        console.log(response);

        if (response.ok == true){ 

            let json = await response.json(); // Pegue as informacoes dos chats.
            
            setChats(json);


            //
        } else {

            if (response.status == 401) {

                alert("Token Invalido. Faca login novamente.");
                window.location.href = "/login";
            }
        }



    }


    return (
        <>

            <div className="container">

                <header className="left-painel">

                    <div className="top">

                        <button className="btn-new-chat"> + New Chat </button>
                     
                     {chats.map(chat => (

                         <button className="btn">
                        <img src={Balloon} alt=" balao de chat" />


                       {chat.chatTitle} </button>

                     ))}

                         </div>
                    <div className="bottom">

                        <button className="btn">

                            <img src={Trash} alt="lixeira" />

                            Clear Conversations </button>
                        <button className="btn">

                            <img src={LightMode} alt="Mudar Modo" />

                            Light mode </button>
                        <button className="btn">

                            <img src={User} alt="user" />

                            My Account </button>
                        <button className="btn">

                            <img src={UpdateFAQ} alt="atualizacoes" />

                            Updates & FAQ </button>
                        <button className="btn">

                            <img src={Logout} alt="Sair da Conta" />

                            Log out </button>

                    </div>

                </header>

                <main className="central-painel">

                    <img className="logo-chat" src={LogoDoSenaiGPT} alt="Logo do SenaiGPT" />

                    <div className="pai-dos-textos">

                        <div className="exemples">
                            <img src={ChatBalloon} alt="balao" />
                            <h3> Examples </h3> <br />
                            <p> "Explain quantum computing insimple <br /> terms" </p> <br />
                            <p> "Got any creative ideas for a 10year <br /> old's birthday?" </p> <br />
                            <p> "How do I make an HTTP requestin <br /> Javascript?" </p> <br />
                        </div>

                        <div className="capacibilities">
                            <img src={Star} alt="estrelas" />
                            <h3> Capacibilities </h3> <br />
                            <p> Remembers what user saidearlier in <br /> the conversation. </p> <br />
                            <p> Allows user to provide follow-up <br /> corrections. </p> <br />
                            <p> Trained to decline inappropriate <br /> requests. </p> <br />
                        </div>

                        <div className="limitations">
                            <img src={Limitation} alt="escudo de aviso" />
                            <h3>Limitations</h3> <br />
                            <p>May occasionally generate incorrect <br /> information.</p> <br />
                            <p>May occasionally produce harmful <br /> instructions or biased content.</p> <br />
                            <p>Limited knowledge of world andevents <br /> after 2021.</p> <br />
                        </div>
                    </div>

                    <div className="input-container">
                    <input className="input" type="text"
                        placeholder="Type message" />

                    <img className="aviaopapel" src={PaperPlane} alt="Enviar" />
                    <img className="microfone" src={Microphone} alt="Microfone" />
                    <img className="iconimage" src={Image} alt="Enviar Imagem" />

                    </div>

                </main>

            </div>

        </>
    )
};

export default Chat;