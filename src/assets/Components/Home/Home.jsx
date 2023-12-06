import React from "react";
import foto1 from "../../../images/graficos.jpg"
import foto2 from "../../../images/hombrenegocio.jpg"
import mockup from "../../../images/mockup.jpg"



const Home = () => {

    return(

        <>
        <div>

            <img src={foto1} alt="graficos" />
            <img src={foto2} alt="hombre de negocio" />
            <h1>CONCENTRE O SUCESSO DO SEU
                NEGÓCIO COM NOSSA SOLUÇAO ABRAGENTE</h1>

            <h2>DESCUBRA UM NOVO NÍVEL DE EFICIÊNCIA E CRESCIMIENTO COM NOSSO SOFTWARE DE PONTA DESENVOLVIDO PARA EMPRESAS COMO A SUA.
                SIMPLIFICAMOS SUAS OPERAÇÕES DIÁRIAS, DESDE A GESTÃO DE ESTOQUE ATÉ A EXPERIÊNCIA DO CLIENTE, FORNECENDO-LHE UMA SOLUÇÃO
                ABRANGENTE. AUMENTE SUAS VENDAS, OTIMIZE SEUS PROCESSOS E LEVE SEU NEGÓCIO AO PRÓXIMO NÍVEL COM NOSSO SOFTWARE CONFIÁVEL
                E FÁCIL DE USAR. COMECE A IMPULSIONAR O SUCESSO DO SEU NEGÓCIO.</h2>

            <button>TESTE GRATUITO 7 DIAS</button>

            <img src={mockup} alt="software de comercio" style={{ width: "50rem" }} />

                <h1>Benefícios</h1>
                <p>Gerenciamento eficiente de estoque:* Otimize o controle de estoque e reduza erros
 com um sistema intuitivo de gerenciamento de estoque.* Evite perdas por esgotamento de produtos ou excesso
 de estoque.</p>

 <p>Melhor experiência do cliente:* Oferece uma experiência de compra perfeita e personalizada.* Facilita a gestão de programas de fidelidade e recompensas 
para clientes regulares.</p>

<p>Automação do processo:* Economize tempo automatizando tarefas repetitivas
 como faturamento e relatórios.* Reduza erros humanos e permita que sua equipe se 
concentre em tarefas mais estratégicas.</p>

<p>Integração com outras ferramentas:* Facilita a integração com outras ferramentas e plataformas
 populares, como sistemas de contabilidade ou soluções de pagamento.* Melhore a eficiência conectando seu software às ferramentas
 que sua empresa já utiliza.</p>

 <p>Vendas impulsionadas:* Aumente as vendas com ferramentas que facilitam a
 criação de promoções e descontos.* Oferece a possibilidade de vender online, ampliando
 assim o seu alcance a novos clientes.</p>
           
           
        </div>
        </>
    )

}

export default Home