import React from "react"
import style from "./Signup.module.css";
import { Link } from "react-router-dom";

const Singup = () => {

    return (
        <>
        <div className={style.contenedorPadre}>

            <div className={style.formConteiner}>
                
                <p className={style.title}>Entrar</p>
                
                <form  className={style.form}>
                    <div className={style.inputGroup}>
                        <label for="username">Usuario</label>
                        <input type="text" name="username" id="username" placeholder="..." />
                    </div>
                    <div className={style.inputGroup} >
                        <label for="password">Senha</label>
                        <input type="password" name="password" id="password" placeholder="..." />
                        <div  className={style.forgot}>
                            <a rel="noopener noreferrer" href="#">
Você esqueceu a senha?</a>
                        </div>
                    </div>
                    <button  className={style.sign}>Entrar</button>
                </form>
               
              
                <p class="signup" className={style.signup}>Você não tem uma conta?
                <Link to="/login">
                    <a rel="noopener noreferrer" href="#" class="">Cadastre-se</a>
                </Link>
                </p>
            </div>
        </div>


        </>
    )
}


export default Singup;