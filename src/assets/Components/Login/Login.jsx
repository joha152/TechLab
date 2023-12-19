import React from "react";
import style from "./Login.module.css";

const Login = () => {


    return (

        <>
            <div className={style.contenedorPadre}>

<div className={style.formConteiner}>
    
    <p className={style.title}>Cadastre sua conta</p>
    
    <form  className={style.form}>
        <div className={style.inputGroup}>
            <label for="text">Nome da empresa</label>
            <input type="text" name="username" id="username" placeholder="..." />
        </div>
        <div className={style.inputGroup} >
            <label for="text">Email</label>
            <input type="text" name="email" id="email" placeholder="..." />
        </div>
        <div className={style.inputGroup} >
            <label for="text">Celular</label>
            <input type="text" name="email" id="email" placeholder="..." />
        </div>

        <button  className={style.sign}>Sign in</button>
    </form>
   
  
    
</div>
</div>
        </>
    )
}


export default Login 