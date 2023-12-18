import React from "react"
import style from "./Signup.module.css";

const Singup = () => {

    return (
        <>
        <div className={style.contenedorPadre}>

            <div className={style.formConteiner}>
                
                <p className={style.title}>Login</p>
                
                <form  className={style.form}>
                    <div className={style.inputGroup}>
                        <label for="username">Username</label>
                        <input type="text" name="username" id="username" placeholder="..." />
                    </div>
                    <div className={style.inputGroup} >
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="..." />
                        <div  className={style.forgot}>
                            <a rel="noopener noreferrer" href="#">Forgot Password ?</a>
                        </div>
                    </div>
                    <button  className={style.sign}>Sign in</button>
                </form>
               
              
                <p class="signup" className={style.signup}>Don't have an account?
                    <a rel="noopener noreferrer" href="#" class="">Sign up</a>
                </p>
            </div>
        </div>


        </>
    )
}


export default Singup;