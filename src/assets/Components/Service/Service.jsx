import React from "react";
import style from "./Service.module.css"
import crm from "../../../images/crm.jpg";
import persoa from "../../../images/persoa.jpg";
import soporte from "../../../images/soporte.jpg";



const Service = () => {

    return (
        <>
            <h1 className={style.focus}>SERVIÇOS</h1>
            <div className={style.animacion}>

            <h3 className={style.text}>Desenvolvimento de software personalizado</h3>
                <div className={style.cuadro1}>
                <img src={crm} alt="" />
            <p className={style.parrafo}>Oferecer serviços de desenvolvimento de software customizado para empresas, adaptando soluções às necessidades específicas de cada cliente. Isso pode incluir sistemas de gerenciamento de estoque, pontos de venda personalizados, integrações com plataformas de comércio eletrônico e outras soluções projetadas para melhorar a eficiência e a produtividade dos negócios.</p>
                </div>
<hr />

<div >
            <h3 className={style.text}>Implementação e treinamento</h3>

            <div className={style.cuadro1}>
            <p className={style.parrafo}> Fornecer serviços de implementação de software no ambiente do cliente, garantindo que a transição seja tranquila e contínua.
                Além disso, forneça treinamento detalhado aos usuários para garantir que eles aproveitem ao máximo os recursos do software. Isto incluiria treinamento no uso diário, administração do sistema e solução de problemas básicos.</p>
                <img src={persoa} alt="" />
            </div>
</div>

<hr />
            <h3 className={style.text}>Suporte Técnico e Manutenção Contínua</h3>

            <div className={style.cuadro1}>
            <img src={soporte} alt="" style={ { height : "25rem", marginLeft : "4rem"}}/>
            <p className={style.parrafo}>Fornecer serviços de suporte técnico contínuos para garantir a operação ininterrupta do software. Isso pode incluir suporte
                por telefone, suporte online, atualizações de software e manutenção preventiva. Um atendimento ao cliente eficiente e proativo pode fazer toda a diferença para que os clientes se sintam apoiados e satisfeitos com a solução.</p>
            </div>

<hr />
            </div>
            <div className={style.divBtn}>
                <button className={style.btn}> EXPERIMENTE GRATUITAMENTE 7 DIAS</button>
            </div>
        </>
    )
}

export default Service