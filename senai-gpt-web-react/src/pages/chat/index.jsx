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
import BalloonWhite from "../../assets/imgs/ChatText-white.png"
import { useEffect, useState } from "react";

// import { send } from "vite";





function Chat() {

    const [chats, setChats] = useState([]);
    const [chatSelecionado, setChatSelecionado] = useState(null);
    const [userMessage, setUserMessage] = useState("")
    
    const [isLeftPainelOpen, setIsLeftPainelOpen] = useState(false);

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        //Exeecuta toda vez que a tela abre.

       

        getChats();

        let modoEscuro = localStorage.getItem("darkMode");
        if (modoEscuro === "true") {
            setDarkMode(true);
            document.body.classList.add("dark-mode");
        }




    }, []);

    const getChats = async () => {
        //Arrow Function
        let response = await fetch( "https://senai-gpt-api.up.railway.app/chats", {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("meuToken")
            }

        });

   

        if (response.ok == true) {

            let json = await response.json(); // Pegue as informacoes dos chats.

            let userId = localStorage.getItem("meuId")

            json = json.filter(chat => chat.userId == userId)

            setChats(json);


            
        } else {

            if (response.status == 401) {

                alert("Token Invalido. Faca login novamente.");
                localStorage.clear();
                window.location.href = "/login";
            }
        }



    }

    const onLogOutClick = () => {

        localStorage.clear();
        window.location.href = "/login";

    }
    const clickChat = (chat) => {

        setChatSelecionado(chat);
        setIsLeftPainelOpen(false);

    }

    const chatGPT = async (message) => {

        return "[Fora do Ar]";

        // Configurações do endpoint e chave da API
        const endpoint = "https://ai-testenpl826117277026.openai.azure.com/";
        const apiKey = "DCYQGY3kPmZXr0lh7xeCSEOQ5oiy1aMlN1GeEQd5G5cXjuLWorWOJQQJ99BCACYeBjFXJ3w3AAAAACOGol8N";
        const deploymentId = "gpt-4"; // Nome do deployment no Azure OpenAI
        const apiVersion = "2024-05-01-preview"; // Verifique a versão na documentação

        // URL para a chamada da API
        const url = `${endpoint}/openai/deployments/${deploymentId}/chat/completions?api-version=${apiVersion}`;

        // Configurações do corpo da requisição
        const data = {
            messages: [{ role: "user", content: message }],
            max_tokens: 50
        };

        // Cabeçalhos da requisição
        const headers = {
            "Content-Type": "application/json",
            "api-key": apiKey
        };

        // Faz a requisição com fetch
        const response = await fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(data)
        });

        if (response.ok) {
            const result = await response.json();
            const botMessage = result.choices[0].message.content;
            return botMessage;
        }

    }


    const enviarMensagem = async (message) => {

        let userId = localStorage.getItem("meuId");

        let novaMensagemUsuario = {

            text: message,
            id: crypto.randomUUID(),
            userId: userId

        };

        let novoChatSelecionado = { ...chatSelecionado }; //pega as 4 propriedades, faz uma cópia do chatSelecionado
        novoChatSelecionado.messages.push(novaMensagemUsuario);
        setChatSelecionado(novoChatSelecionado);

        let respostaGPT = await chatGPT(message);

        let novaMensagemGPT = {

            text: respostaGPT,
            id:crypto.randomUUID(),
            userId: "chatbot"

        };

        
        novoChatSelecionado.messages.push(novaMensagemGPT);
        setChatSelecionado(novoChatSelecionado);

           // Salva o chat atualizado no back-end
           let response = await fetch(
            `https://senai-gpt-api.up.railway.app/users/${chatSelecionado.id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("meuToken")
                },
                body: JSON.stringify(novoChatSelecionado)
            }
        );

        if (response.ok) {
            console.log("Chat atualizado com sucesso.");
        } else {
            console.log("Erro ao atualizar o chat.");
        }

        setUserMessage("");
        await getChats();

    }

    const criarNovoChat = async () => {

        let novoTitulo = prompt ("Insira o titulo do chat:");

        if (novoTitulo == null || novoTitulo == "") {

            alert ("Insira um Titulo.");
            return;
     }

            let userId = localStorage.getItem("meuId")
            
         let criarNovoChat = {
            chatTitle: novoTitulo,
            id: crypto.randomUUID(),
            userId: userId,
            messages: []
        };
    
        let response = await fetch("https://senai-gpt-api.up.railway.app/users", {
            method: "POST",
            headers: {
                "Authorization" : "Bearer " + localStorage.getItem("meuToken"),
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(criarNovoChat)
        });
    
        if (response.ok) {
            
        await getChats();

        }

    }

    

    //     let resposta = await chatGPT(message);

    //     console.log("Resposta: ", resposta)

    //     const novaMensagemUsuario= {

    //         userId: "",
    //         text: message,
    //         id: 10

    //     };

    // let novaRespostaChatGPT = {
    //     userId: "chatbot",
    //     text: resposta,
    //     id: 10


    // }


    // }

    const ToggleDarkMode = () => {

        setDarkMode(!darkMode); //inverter valor do dark mode.

        if (darkMode == true) {

            document.body.classList.remove("dark-mode");

        } else {

            document.body.classList.add("dark-mode");

        }

        localStorage.setItem("darkMode", !darkMode); 

    }



    return (
        <>

            <div className="container">
                {/* toggle button */}

            <button 
            className="btn-toggle-painel"
            onClick={() => setIsLeftPainelOpen(!isLeftPainelOpen)}

            
            >

                ☰

            </button>
                <header className={`left-painel ${isLeftPainelOpen == true ? "open" : ""}`}>

                    <div className="top">

                    <button className="btn-new-chat" onClick={() => criarNovoChat()}> + New Chat </button>

                        {chats.map(chat => (
                            <button className="btn" onClick={() => clickChat(chat)}>
                                <img src={darkMode == true? BalloonWhite : Balloon} alt="ícone de chat." />
                                {chat.chatTitle}
                            </button>
                        ))}

                    </div>
                    <div className="bottom">

                        <button className="btn">

                            <img src={Trash} alt="lixeira" />

                            Clear Conversations </button>
                        <button className="btn" onClick={() => ToggleDarkMode()}>

                            <img src={LightMode} alt="Mudar Modo" />

                            Light mode </button>
                        <button className="btn">

                            <img src={User} alt="user" />

                            My Account </button>
                        <button className="btn">

                            <img src={UpdateFAQ} alt="atualizacoes" />

                            Updates & FAQ </button>
                        <button className="btn" onClick={() => onLogOutClick()}>

                            <img src={Logout} alt="Sair da Conta" />

                            Log out </button>

                    </div>

                </header>

                <main className="central-painel">

                    {chatSelecionado == null && (

                        <>

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


                        </>


                    )}

                    {chatSelecionado != null && (

                            <>

                            <div className="chat-container"> 

                                <div className="chat-header">

                                    <h2> {chatSelecionado.chatTitle} </h2>

                                </div>

                                <div className="chat-messages">

                                {chatSelecionado.messages.map(message => (
                                        <p className={"message-item " + (message.userId == "chatbot" ? "chatbot" : "")}>{message.text}</p>
                                    ))}

                                </div>
                            </div>


                            </>

                    )}

                   



                    <div className="input-container">

                        <input className="input"
                        value={userMessage}
                        onChange={event => setUserMessage(event.target.value)}
                        type="text"
                        placeholder="Type message" />

                        <img onClick={() => enviarMensagem(userMessage)} src={PaperPlane}
                        alt="Send." />
                        

                        {/* <img className="aviaopapel" src={PaperPlane} alt="Enviar" /> */}
                        <img className="microfone" src={Microphone} alt="Microfone" />
                        <img className="iconimage" src={Image} alt="Enviar Imagem" />

                       

                    </div>

                </main>

            </div>

        </>
    )
};

export default Chat;