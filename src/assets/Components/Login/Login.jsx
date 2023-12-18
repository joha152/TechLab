import React from "react";
import style from "./Login.module.css";

const Login = () => {


    return (

        <>
            <form action="submit">
                <div className={style.form}>
                    <label htmlFor="">Usuário:</label>
                    <input type="text" />

                    <label htmlFor="">Senha:</label>
                    <input type="email" />

                    <button type="">ENTRAR</button>
                </div>

                <div className={style.cuadro}>
                    <h2>Você esqueceu a senha?</h2>
                    <h3>Clique aqui</h3>                        
                </div>

                <div>
                    <h2>Você não é um usuário?</h2>
                    <h3>Cadastre-se</h3>   
                </div>
            </form>
        </>
    )
}


export default Login 