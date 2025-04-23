import "./chat.css"
import Balloon from "../../assets/imgs/ChatText.png";
import Trash from "../../assets/imgs/Trash.png" ;
import LightMode from "../../assets/imgs/IconSet.png";
import User from "../../assets/imgs/User.png";
import UpdateFAQ from "../../assets/imgs/ArrowSquareOut.png";
import Logout from "../../assets/imgs/SignOut.png";
import Logo from "../../assets/imgs/Chat.png"
import ChatBalloon from "../../assets/imgs/Chats.png" 
import Star from "../../assets/imgs/Star.png"
import Limitation from "../../assets/imgs/ShieldWarning.png"
import PaperPlane from "../../assets/imgs/PaperPlaneRight.svg"
import Microphone from "../../assets/imgs/microphone-solid.svg"
import Image from "../../assets/imgs/image-solid.svg"
 


function Chat() {

    return (
        <>
            <h1>CHAT</h1>

            <div className="container">

        <header className="left-painel">

            <div className="top">

                <button className="btn-new-chat"> + New Chat </button>
                <button className="btn"> 
                    <img src="Balloon" alt=" balao de chat"/>


                    AI Chat Tool Ethics </button>
                <button className="btn"> 

                    <img src="../../assets/imgs/ChatText.png" alt=" balao de chat"/>

                    Al Chat Tool Impact Writing </button>
                <button className="btn">
                    
                    <img src="../../assets/imgs/ChatText.png" alt=" balao de chat"/>
                    
                    New chat </button>

            </div>

            <div className="bottom">

                <button className="btn"> 
                    
                    <img src="../../assets/imgs/Trash.png" alt="lixeira"/>
                    
                    Clear Conversations </button>
                <button className="btn">

                    <img src="../../assets/imgs/IconSet.png" alt="Mudar Modo"/>

                    Light mode </button>
                <button className="btn"> 

                    <img src="../../assets/imgs/User.png" alt="user"/>

                    My Account </button>
                <button className="btn"> 
                    
                    <img src="../../assets/imgs/ArrowSquareOut.png" alt="atualizacoes"/>
                    
                    Updates & FAQ </button>
                <button className="btn"> 
                    
                    <img src="../../assets/imgs/SignOut.png" alt="Sair da Conta">
                    /</img>
                    Log out </button>

            </div>

        </header>

        <main className="central-painel">

            <img className="logo" src="../../assets/imgs/Chat.png" alt="Logo do SenaiGPT"/>

            <div className="pai-dos-textos">

                <div className="exemples"> 
                    <img src="../../assets/imgs/Chats.png" alt="balao"/>
                    <h3> Examples </h3> <br />
                    <p> "Explain quantum computing insimple <br /> terms" </p> <br />
                    <p> "Got any creative ideas for a 10year <br /> old's birthday?" </p> <br />
                    <p> "How do I make an HTTP requestin <br /> Javascript?" </p> <br />
                </div>

                <div className="capacibilities">
                    <img src="../../assets/imgs/Star.png" alt="estrelas"/>
                    <h3> Capacibilities </h3> <br />
                    <p> Remembers what user saidearlier in <br /> the conversation. </p> <br />
                    <p> Allows user to provide follow-up <br /> corrections. </p> <br />
                    <p> Trained to decline inappropriate <br /> requests. </p> <br />
                </div>

                <div className="limitations">
                    <img src="../../assets/imgs/ShieldWarning.png" alt="escudo de aviso"/>
                    <h3>Limitations</h3> <br />
                    <p>May occasionally generate incorrect <br /> information.</p> <br />
                    <p>May occasionally produce harmful <br /> instructions or biased content.</p> <br />
                    <p>Limited knowledge of world andevents <br /> after 2021.</p> <br />
                </div>
            </div>

            <div className="input-container"/>
            <input className="input" type="text"
            placeholder="Type message" />

            <img className="aviaopapel" src="../../assets/imgs/PaperPlaneRight.svg" alt="Enviar"/>
            <img className="microfone" src="../../assets/imgs/microphone-solid.svg" alt="Microfone"/>
            <img className="iconimage" src="../../assets/imgs/image-solid.svg" alt="Enviar Imagem"/>

        </main>
        
    </div>

        </>
    )
};

export default Chat;