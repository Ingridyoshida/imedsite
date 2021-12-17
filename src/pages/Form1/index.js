import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container,
         ContainerArea,
         ContainerSteps,
         ContainerSidebar,
         ContainerPage
         } from './styled.js';        


    const Page = () => {
        const history = useHistory();

        const handleNextStep = () => {
            history.push('/form2');
        }
        

    return (
       <Container>
           <ContainerArea>
               <ContainerSteps>
                   <ContainerSidebar>
                        <h1>Cadastro</h1>
                        <p>Prenecha os campos abaixo com suas informações</p> 
                   </ContainerSidebar>
                   <h2>Informações Pessoais</h2>
                   <ContainerPage>

                        <div className="container"> 
                                <label className="area">
                                    <div className="area--input">
                                        <input
                                            placeholder="Nome Completo"   
                                            className="email--input"
                                            
                                        />
                                    </div>
                                </label>
                            </div>
                        
                        <div className="container"> 
                        <label className="area">
                                <div className="area--input">
                                    <input
                                       placeholder="Data de Nascimento"
                                       autoFocus
                                    />
                                </div>
                        </label>
                        
                        <label className="area">
                                <div className="area--input">
                                    <input
                                        placeholder="Telefone com DDD"
                                    />
                                </div>
                            </label>
                        </div>          

                        <div className="container"> 
                                <label className="area">
                                    <div className="area--input">
                                        <input
                                            placeholder="E-mail"   
                                            className="email--input"
                                            
                                        />
                                    </div>
                                </label>
                            </div>

                        <div className="container"> 
                                <label className="area">
                                    <div className="area--input">
                                        <input
                                         placeholder="Senha"
                                        />
                                    </div>
                                </label>
                                <label className="area">
                                    <div className="area--input">
                                        <input
                                         placeholder="Confirmar Senha"
                                        />
                                    </div>
                                </label>
                            </div>


                           <button onClick={handleNextStep}>Próximo</button>
                    
                   </ContainerPage>
               </ContainerSteps>
           </ContainerArea>
       </Container>
               
           
    );

}

export default Page;


