import React from "react";
import style from "./Information.module.css";



const Information = () => {


    return (
        <>
        <div className={style.contenedor}>

            <div className={style.titulo}>
                <h1>O que o TechLab quer para você</h1>
            </div>

            <div className={style.subtitulo}>
                <h2>Visão</h2>
            </div>
            <div className={style.parrafo}>
                <p>Com uma visão de planejamento de 3 a 5 anos, nossa empresa se projeta como referência no desenvolvimento de sistemas ERP personalizados.
                    O objetivo ao final deste período é ser reconhecido nacionalmente no mercado. Para atingir esse marco, focamos em métricas específicas, visando ter
                    nosso sistema ERP padrão totalmente pronto e vender no mínimo 20 sistemas por mês.Nosso objetivo claro é nos posicionarmos como líderes nacionais em customização de ERP para micro e pequenas empresas. Esta abordagem
                    estratégica não envolve apenas o sucesso no desenvolvimento e venda do nosso produto, mas também na construção de uma forte reputação
                    no mercado. Buscamos oferecer soluções de qualidade que atendam às necessidades específicas de nossos clientes, estabelecendo assim um
                    padrão no setor e consolidando nossa presença em todo o país.</p>
            </div>

            <div className={style.subtitulo}>
                <h2>Missão</h2>
            </div>
            <div className={style.parrafo}>
                <p>O principal benefício que nossa empresa oferece ao nosso público-alvo é a flexibilidade e adaptabilidade, chegando até mesmo ao cliente mais
                    leigo. Esta capacidade de ajuste é, de fato, nossa principal vantagem competitiva, diferenciando-nos significativamente da concorrência. Nosso
                    interesse primordial é criar acessibilidade às novas tecnologias, e acreditamos que esse interesse é a consequência direta do sucesso que
                    alcançamos ao proporcionar soluções flexíveis. Em resumo, nossa missão é oferecer meios tecnológicos flexíveis e adaptativos que auxiliem empreendedores na gestão de seus negócios,
                    tornando-os mais competitivos no mercado. Estamos comprometidos em proporcionar não apenas soluções tecnológicas, mas também em
                    garantir que essas soluções sejam acessíveis e compreensíveis para todos, independentemente do nível de familiaridade com a tecnologia.</p>
            </div>

            <div className={style.subtitulo}>
                <h2>Valores</h2>
            </div>
            <div className={style.parrafo}>
                <p>Se fôssemos uma pessoa física, as atitudes que buscamos cultivar para sermos conhecidos, lembrados e admirados incluem ser bons ouvintes, éticos, ter caráter, ser solícitos, confiantes, proativos e reativos. Estas não apenas são qualidades pessoais, mas também refletem os valores que
                    queremos incorporar no nosso negócio. Essa lista de atitudes não apenas representa os atributos que buscamos como indivíduos, mas também serve como a base dos valores do nosso
                    negócio. Queremos que nossa empresa seja reconhecida não apenas pela qualidade dos nossos produtos ou serviços, mas também pela
                    integridade, ética e compromisso com a excelência em todas as interações. Essas atitudes formam a essência dos valores fundamentais que
                    orientam o nosso negócio e a maneira como nos relacionamos com nossos clientes, parceiros e colaboradores.</p>
            </div>

        </div>
        </>
    )
}


export default Information