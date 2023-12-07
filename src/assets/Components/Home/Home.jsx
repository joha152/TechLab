import React from "react";
import foto1 from "../../../images/graficos.jpg"
import foto2 from "../../../images/hombrenegocio.jpg"
import mockup from "../../../images/mockup.jpg"
import perfil1 from "../../../images/foto.webp"
import perfil2 from "../../../images/foto1.png"
import style from "./Home.module.css";

const Home = () => {

    return (

        <>
            <div>

                <div className={style.conteiner}>
                    <div className={style.img}>
                        <img src={foto1} alt="graficos" className={style.img1} />
                        <h1 className={style.text}>CONCENTRE O SUCESSO DO SEU
                            NEGÓCIO COM NOSSA SOLUÇAO ABRAGENTE</h1>
                    </div>
                    <div>
                        <img src={foto2} alt="hombre de negocio" className={style.img2} />
                    </div>
                </div>

                <div className={style.caja1}>
                    <h2>DESCUBRA UM NOVO NÍVEL DE EFICIÊNCIA E CRESCIMIENTO COM NOSSO SOFTWARE DE PONTA DESENVOLVIDO PARA EMPRESAS COMO A SUA.
                        SIMPLIFICAMOS SUAS OPERAÇÕES DIÁRIAS, DESDE A GESTÃO DE ESTOQUE ATÉ A EXPERIÊNCIA DO CLIENTE, FORNECENDO-LHE UMA SOLUÇÃO
                        ABRANGENTE. AUMENTE SUAS VENDAS, OTIMIZE SEUS PROCESSOS E LEVE SEU NEGÓCIO AO PRÓXIMO NÍVEL COM NOSSO SOFTWARE CONFIÁVEL
                        E FÁCIL DE USAR. COMECE A IMPULSIONAR O SUCESSO DO SEU NEGÓCIO.
                    </h2>
                </div>

                <img src={mockup} alt="software de comercio" style={{ width: "55rem" }} />

                <div className={style.boton}>
                    <button className={style.btntest}>TESTE GRATUITO 7 DIAS</button>
                </div>


                <h1 className={style.ben}>Benefícios</h1>
<hr />
                <div className={style.conteinerPrincipal}>

                    <div className={style.card}>
                        <div className={style.inner}>
                            <div className={style.front}>
                                <h3>
                                    Gerenciamento eficiente de estoque
                                </h3>
                            </div>
                            <div className={style.back}>

                                <p > Otimize o controle de estoque e reduza erros com um sistema intuitivo de gerenciamento de estoque.
                                    Evite perdas por esgotamento de produtos ou excesso de estoque.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={style.card}>
                        <div className={style.inner}>
                            <div className={style.front}>
                                <h3>Melhor experiência do cliente</h3>
                            </div>
                            <div className={style.back}>
                                <p>Oferece uma experiência de compra perfeita e personalizada.
                                    Facilita a gestão de programas de fidelidade e recompensas para clientes regulares.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={style.card}>
                        <div className={style.inner}>
                            <div className={style.front}>
                                <h3>Automação do processo</h3>
                            </div>
                            <div className={style.back}>
                                <p> Economize tempo automatizando tarefas repetitivas
                                    como faturamento e relatórios. Reduza erros humanos e permita que sua equipe se
                                    concentre em tarefas mais estratégicas.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={style.card}>
                        <div className={style.inner}>
                            <div className={style.front}>
                                <h3>Integração com outras ferramentas</h3>
                            </div>
                            <div className={style.back}>
                                <p>Facilita a integração com outras ferramentas e plataformas populares, como sistemas de contabilidade ou soluções de pagamento.
                                    Melhore a eficiência conectando seu software às ferramentas
                                    que sua empresa já utiliza.</p>
                            </div>
                        </div>
                    </div>

                    <div className={style.card}>
                        <div className={style.inner}>
                            <div className={style.front}>
                                <h3>Vendas impulsionadas</h3>
                            </div>
                            <div className={style.back}>
                                <p>Aumente as vendas com ferramentas que facilitam a
                                    criação de promoções e descontos.* Oferece a possibilidade de vender online, ampliando
                                    assim o seu alcance a novos clientes.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={style.card}>
                        <div className={style.inner}>
                            <div className={style.front}>
                                <h3>Análise Avançada de Dados</h3>
                            </div>
                            <div className={style.back}>
                                <p>Obtenha insights profundos sobre o desempenho do seu
                                    negócio com análises detalhadas. Tome decisões informadas e baseadas em dados e melhore
                                    a eficiência operacional.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>   {/* //este es el div del conteiner principal */}
                <div className={style.contenedor2}>
                <div className={style.card}>
                    <div className={style.inner}>
                        <div className={style.front}>
                            <h3>Acesso remoto e móvel</h3>
                        </div>
                        <div className={style.back}>
                            <p>Gerencie seu negócio de qualquer lugar com acesso
                                remoto através de dispositivos móveis. Mantenha o controle mesmo quando não estiver fisicamente
                                no local da empresa.</p>
                        </div>
                    </div>
                </div>

                <div className={style.card}>
                    <div className={style.inner}>
                        <div className={style.front}>
                            <h3>Personalização personalizada</h3>
                        </div>
                        <div div className={style.back}>

                            <p>Adapte o software às necessidades específicas do seu negócio.
                                Oferece flexibilidade para adicionar recursos personalizados com
                                base nos requisitos exclusivos do seu negócio.
                            </p>
                        </div>
                    </div>
                </div>
                </div>

                <h1 className={style.testimonio}>Depoimentos de clientes</h1>
                <hr />

<div className={style.contenedor3}>

<div className={style.person1}>
                <img src={perfil1} alt="" className={style.imagendeperfil} />
                <h2 className={style.info}>“ A utilização deste sistema
                    facilitou meu trabalho e não
                    perco mais tempo com tarefas
                    repetitivas. “</h2>
                <h3 className={style.info}>Marta Tierra</h3>
</div>

<div className={style.person1}>

                <img src={perfil2} alt="" className={style.imagendeperfil} />
                <h2 className={style.info}>“O software de comércio me ajudou
                    a centralizar meu trabalho e a
                    multiplicar as vendas.”</h2>
                <h3 className={style.info}>Sabrina Rojas</h3>
</div>
</div>



            </div>
        </>
    )

}

export default Home