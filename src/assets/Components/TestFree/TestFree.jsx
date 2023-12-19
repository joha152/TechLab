import React from "react";
import image from "../../../images/construccion.png";
import style from "./TestFree.module.css";

const TestFree = ()=>{

    const linkDropboxFood = 'https://www.dropbox.com/scl/fi/5hw1avtvewp7h54ijwo8d/setup-Sistema-Etos-Food.exe?rlkey=b3n2d0z9r5rpf8ts96z95h0r8&dl=0';

    const linkDropboxComercial = 'https://www.dropbox.com/scl/fi/1wvy8h3lhh8t5p5danp40/setup-Sistema-Comercial.exe?rlkey=wt9awpfhgvp0297rfi3ilkmqt&dl=0';

    const descargarSoftware = () => {
        window.open(linkDropboxFood , '_blank')
      };

      const descargarComercial = () => {
        window.open(linkDropboxComercial, '_blank')
      };

    return(
        <>
        {/* <img src={image} alt=""  style={{ width: "50rem" , marginLeft: "7rem"}}/> */}
        <div className={style.conteiner}>

        <button onClick={descargarSoftware} className={style.boton}>Descargar Etos Food</button>

        <button onClick={descargarComercial} className={style.boton}>Descargar Etos Comercial</button>
        </div>
        </>
    )
}

export default TestFree