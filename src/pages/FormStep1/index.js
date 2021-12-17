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
            history.push('/formStep2');
        }
        

    return (
       <Container>
           <ContainerArea>
               <ContainerSteps>
                   <ContainerSidebar>
                        <h1>Cadastro de Profissionais</h1>
                        <p>Prenecha os campos abaixo com suas informações</p> 
                   </ContainerSidebar>
                   <h2>Informações Pessoais</h2>
                   <ContainerPage>

                        
                        <div className="container"> 
                        <label className="area">
                                <div className="area--input">
                                    <input
                                       placeholder="Nome completo"
                                       autoFocus
                                    />
                                </div>
                        </label>
                        
                        <label className="area">
                                <div className="area--input">
                                    <input
                                        placeholder="Data de Nascimento"
                                    />
                                </div>
                            </label>
                        </div>          

                        <div className="container"> 
                        <label className="area">
                                <div className="area--input">
                                    <input
                                       placeholder="CPF"
                                    />
                                </div>
                        </label>
                        
                        <label className="area">
                                <div className="area--input">
                                    <input
                                        placeholder="RG"
                                    />
                                </div>
                            </label>
                        </div> 

                        <div className="container"> 
                                <label className="area">
                                    <div className="area--input">
                                        <input
                                            placeholder="Endereço"   
                                            className="email--input"
                                            
                                        />
                                    </div>
                                </label>
                            </div>

                        <div className="container"> 
                                <label className="area">
                                    <div className="area--input">
                                        <input
                                         placeholder="Cep"
                                        />
                                    </div>
                                </label>
                                <label className="area">
                                    <div className="area--input">
                                        <input
                                         placeholder="Cidade"
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

                           <button onClick={handleNextStep}>Próximo</button>
                    
                   </ContainerPage>
               </ContainerSteps>
           </ContainerArea>
       </Container>
               
           
    );

}

export default Page;


