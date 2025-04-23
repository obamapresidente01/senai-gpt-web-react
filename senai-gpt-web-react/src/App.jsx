import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/login"
import Chat from "./pages/chat"



function App() {
 

  //JavaScript

  return (
    <>

      <BrowserRouter>
      
      <Routes> 

          <Route path="/" element={<Login/>}> </Route>
          <Route path="/login" element={<Login/>}> </Route>
          <Route path="/chat" element={<Chat/>}></Route>
          <Route path="*" element={<h1>Not Found</h1>}> </Route>
          


      </Routes>
      
      </BrowserRouter>
      


    </>
  )
}

//html

export default App
