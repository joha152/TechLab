import React from "react";
import style from "./Price.module.css"

const Price = () => {

    return (

        <>
        <div className={style.contenedorSupremo}>

            <div className={style.conteiner}>
                <div className={style.card}>

                    <div className={style.bloque}>
                        <h1>50R$</h1>
                        <h2>Plano básico</h2>
                        <h2>"Início Eficiente"</h2>
                    </div>

                </div>

                <div className={style.card}>
                    <div className={style.bloque}>

                        <h1>100R$</h1>
                        <h2>Plano Padrão</h2>
                        <h2>"Otimização Contínua"</h2>
                    </div>
                </div>

                <div className={style.card}>
                    <div className={style.bloque}>
                        <h1>150R$</h1>
                        <h2>Plano Premium</h2>
                        <h2>"Solução Abrangente”</h2>
                    </div>
                </div>
            </div>

            <hr />

            <div className={style.contenedor}>

                <div className={style.bloque2}>
                    <h2>Plano básico</h2>
                    <h2>"Início Eficiente"</h2>
                    <h3>Criação</h3>
                    <p>Desenvolvimento e implementação
                        de software básico adaptado às necessidades
                        padrão do negócio.Treinamento inicial para usuários-chave
                        sobre o uso básico do software.
                    </p>
                    <h3>Manutenção</h3>
                    <p>Suporte técnico básico em horário
                        comercial.Atualizações regulares de segurança e
                        correções de bugs.Suporte online para questões técnica
                        s essenciais.</p>
                </div>


                <div className={style.bloque2}>

                    <h2>Plano Padrão</h2>
                    <h2>"Otimização Contínua"</h2>
                    <h3>Criação</h3>
                    <p>Desenvolvimento de software mais
                        avançado com recursos e
                        customizações adicionais.Implementação completa no local com
                        treinamento extensivo do usuário.
                    </p>
                    <h3>Manutenção</h3>
                    <p>Suporte técnico completo com acesso
                        telefônico e online.Atualizações regulares de software
                        para adicionar novas funcionalidades
                        e melhorar o desempenho.Monitoramento proativo para prevenir
                        problemas e resolvê-los rapidamente.
                    </p>
                </div>

                <div className={style.bloque2} >
                    <h2>Plano Premium </h2>
                    <h2>"Solução Abrangente”</h2>
                    <h3>Criação</h3>
                    <p>Desenvolvimento de uma solução
                        abrangente e altamente
                        personalizada para o comércio.Implementação chave na mão com
                        aconselhamento estratégico sobre melhores práticas de utilização.
                    </p>
                    <h3>Manutenção</h3>
                    <p>Suporte técnico 24 horas por dia,
                        7 dias por semana para problemas
                        críticos.Atualizações automáticas com
                        novos recursos e melhorias contínuas.Auditorias regulares para garantir
                        segurança e eficiência.</p>
                </div>
            </div>

        </div>

        </>

    )
}


export default Price