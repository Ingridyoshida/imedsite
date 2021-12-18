import React from 'react';

import { Link } from 'react-router-dom';
import { PageContainer,
         PageTitle,
         ContainerDois,
         Price,
         Userprice,
         PriceMonth,
         PriceYear,
         PriceSemiannual,
         PriceTwo,
         AreaButton,
         Information
         
 } from './styled';

import Calendario from '../images/Calendario.jpg';
import Celular from '../images/Celular.jpg';




const Page = () => {
 
  

        return (
            <>
                <PageContainer>          
                      <PageTitle>Agendamentos e consulta dos exames do paciente online... Tudo isso em um click</PageTitle>
                      <img width="700" src={Calendario} alt="calendario"/>
                      </PageContainer>          
                      <ContainerDois>
                          <PageTitle>Agendamentos de consultas, em um Click.</PageTitle>
                          <img width="250" src={Celular} alt="celular"/>
                      </ContainerDois>                 
                    <Price>
                        <h1>Planos</h1>
                        <h2>Escolha abaixo o plano que mais combina com você.</h2>
                            <Userprice>
                                <PriceMonth>
                                          <p>Assinatura Mensal</p>
                                    <PriceTwo>
                                        <h1 >R$ 29,90</h1>
                                        <h2>POR MÊS</h2>
                                    </PriceTwo>
                                        <AreaButton>
                                        <Link to="/FormStep1">ASSINAR</Link>
                                        <Information>Este plano é renovado automaticamente a cada mês</Information>
                                        </AreaButton>        
                                </PriceMonth>
                                <PriceSemiannual>
                                           <p>Assinatura Semestral</p>
                                           <PriceTwo>
                                        <h1 >R$ 25,90</h1>
                                        <h2>POR MÊS</h2>
                                    </PriceTwo>
                                        <AreaButton>
                                        <Link to="FormStep1">ASSINAR</Link>
                                        <Information>Este plano é renovado automaticamente a cada mês</Information>
                                        </AreaButton>
                                </PriceSemiannual>
                                <PriceYear>
                                          <p>Assinatura Anual</p>
                                          <PriceTwo>
                                        <h1 >R$ 22,90</h1>
                                        <h2>POR MÊS</h2>
                                    </PriceTwo>
                                        <AreaButton>
                                        <Link to="/FormStep1">ASSINAR</Link>
                                        <Information>Este plano é renovado automaticamente a cada mês</Information>
                                        </AreaButton>
                                </PriceYear>
                            </Userprice>
                    </Price>
            </>      
        );

    }


export default Page;