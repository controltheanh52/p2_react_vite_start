import "./components/todo/todo.css";
import TodoDisplay from "./components/todo/TodoDisplay";
import TodoInput from "./components/todo/TodoInput";
import react_logo from "./assets/react.svg";
import { useState } from "react";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { Outlet } from "react-router-dom";



const App = () => {
    
    
    //{key: value}
  return (

    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
    
  )
}

export default App
