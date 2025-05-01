import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/login"
import Chat from "./pages/chat"
import NewUser from "./pages/newuser";



function App() {

  const isAuthenticated = () => {

    let token = localStorage.getItem("meuToken");

    if (token == null) {

      return false;
      
    } else { 

      return true;

    }
  }
 

  //JavaScript

  return (
    <>

      <BrowserRouter>
      
      <Routes> 

          <Route path="/" element={<Login/>}> </Route>
          <Route path="/login" element={<Login/>}> </Route>
          <Route path="/chat" element={isAuthenticated() == true? <Chat/> : <h1>Not Found</h1>}></Route>
          <Route path="*" element={<h1>Not Found</h1>}> </Route>
          <Route path="/new-user" element={<NewUser/>}> </Route>


      </Routes>
      
      </BrowserRouter>
      


    </>
  )
}

//html

export default App
