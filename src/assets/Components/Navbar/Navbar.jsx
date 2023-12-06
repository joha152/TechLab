import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../images/techlab.jpg"

const Navbar = () => {

    return (
        <>
            <nav>
                <NavLink to="/">
                <img src={logo} alt="logo"  style={{width: "10rem"}}/>
                </NavLink>
                <NavLink to="/service">
                    <button>SERVIÇOS</button>
                </NavLink>

                <NavLink to="/price">
                <button>PREÇOS</button>
                </NavLink>

                <NavLink to="/information">
                <button>SOBRE A EMPRESA</button>
                </NavLink>

                <NavLink to="/login">
                <button>INICIAR SESSÃO</button>
                </NavLink>

                    <NavLink to="/testfree">
                <button>TESTE GRATUITO 7 DIAS</button>
                    </NavLink>
            </nav>
        </>
    )
}


export default Navbar