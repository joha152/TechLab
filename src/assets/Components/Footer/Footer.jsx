import React from "react";
import style from "./Footer.module.css"
import { Link } from "react-router-dom";

const Footer = ()=>{


return(
    <>
    
    <div className={style.footer}>
        <div className={style.contenedor}>

        <p className={style.texto}>Telefono: 1122334454</p>
        <p className={style.texto}>Email: techLab@gmail.com</p>
        <p className={style.texto}>Copyright ©2019-2023. All rights reserved</p>

        </div>
<div className={style.links}>

<p><Link to="/service">SERVIÇOS</Link></p>
<p><Link to="/price">PREÇOS</Link></p>
<p><Link to="/information">SOBRE A EMPRESA</Link></p>
        
</div>


    </div>
    </>
)

}

export default Footer;