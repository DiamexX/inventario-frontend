import React from "react";
import {BrowserRouter,Route, Routes } from "react-router-dom";
import Cadastrousuario from "./pages/cadastroUsuario";
import Editarusuario from "./pages/editarUsuario";
import Dashboard from "./pages/dashboard";
import Logon from "./pages/logon";
import ListaUsuarios from "./pages/listaUsuarios";

export default function Rotas(){
    return(
<BrowserRouter>
        <Routes>
             <Route path="/"  element={<Logon/>} />
             <Route path="/cadastrousuario" element={<Cadastrousuario/>} />
             <Route path="/editarusuario/:id" element={<Editarusuario/>} />
             <Route path="/dashboard" element={<Dashboard />} />
             <Route path="/listausuarios" element={<ListaUsuarios/>} />
       </Routes>
</BrowserRouter>
    )
}