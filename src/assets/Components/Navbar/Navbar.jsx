import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../images/techlab.jpg"
import style from "./Navbar.module.css"



const Navbar = () => {

    return (
        <>
            <nav className={style.nav}>
                <NavLink to="/">
                <img src={logo} alt="logo" className={style.logo} />
                </NavLink>
                <NavLink to="/service">
                    <button className={style.button}>SERVIÇOS</button>
                </NavLink>

                <NavLink to="/price">
                <button className={style.button}>PREÇOS</button>
                </NavLink>

                <NavLink to="/information">
                <button className={style.button}>SOBRE A EMPRESA</button>
                </NavLink>

                <NavLink to="/login">
                <button className={style.button}>INICIAR SESSÃO</button>
                </NavLink>

                    <NavLink to="/testfree">
                <button className={style.button1}>TESTE GRATUITO 7 DIAS</button>
                    </NavLink>
            </nav>
        </>
    )
}


export default Navbar