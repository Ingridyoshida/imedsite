import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Container,
         ContainerArea,
         ContainerSteps,
         ContainerSidebar,
         ContainerPage,
         Price,
         Userprice,
         PriceMonth,
         PriceYear,
         PriceSemiannual,
         PriceTwo,
         AreaButton,
         Information,
         Payment
         } from './styled.js';


const Page = () => {
        const history = useHistory();

        const handleNextStep = () => {
            history.push('/Timetable');
        }  

    return (
       <Container>
           <ContainerArea>
               <ContainerSteps>
                   <ContainerSidebar>
                        <h1>etapa1</h1>
                   </ContainerSidebar>
                   <ContainerPage>
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
                                        <Link to="/signup">ASSINAR</Link>
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
                                        <Link to="/signup">ASSINAR</Link>
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
                                        <Link to="/signup">ASSINAR</Link>
                                        <Information>Este plano é renovado automaticamente a cada mês</Information>
                                        </AreaButton>
                                </PriceYear>
                            </Userprice>
                    </Price>

                    <button className="termouse">Termos de uso</button>
                        
                        <div className="check">
                            <input
                                className="inputcheck"
                                type="checkbox"
                                id="texto"  
                                />
                            <label
                            className="inputcheck"
                            for="texto">Eu declaro que li e aceito os termos de uso. </label>
                        </div>

                   <Payment>
                       <label>
                         <input
                              placeholder="Nome"
                              className="pay--name"
                            />
                       </label>
                       <label>
                         <input
                              placeholder="Número do cartão"
                              className="pay--name"
                            />
                       </label>
                       <div className="cod--data">
                        <label>
                            <input
                                placeholder="Data"
                                className="pay--data"
                                />
                        </label>
                        <label>
                            <input
                                placeholder="Código do cartão"
                                className="pay--cod"
                                />
                        </label>
                       </div>
                           

                   </Payment>
                   <div className="finalcheck"> 
                        <div className="buttonArea">
                            <button className="back">Voltar</button>
                            <button onClick={handleNextStep} className="finalButton">Finalizar</button>
                        </div>
                   </div>
                  
                    
                   </ContainerPage>
               </ContainerSteps>
           </ContainerArea>
       </Container>
               
           
    );

}

export default Page;




