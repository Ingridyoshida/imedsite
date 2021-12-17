import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container,
         ContainerArea,
         ContainerSteps,
         ContainerSidebar,
         ContainerPage
         } from './styled.js';

 import Avatar from '../images/Avatar.png';

        const Page = () => {
            const history = useHistory();

            const handleNextStep = () => {
                history.push('/formStep3');
            }  
            const handleBackStep = () => {
                history.push('/formStep1');
            }          
            
    
        return (
           <Container>
               <ContainerArea>
                   <ContainerSteps>
                       <ContainerSidebar>
                            <h1>Cadastro de Profissionais</h1>
                            <p>Prenecha os campos abaixo com suas informações</p> 
                       </ContainerSidebar>
                       <h2>Informações Profissionais</h2>
                       <ContainerPage>
    
                       <div className="container"> 
                        <label className="area">
                        <div className="area--input">
                                    <select
                                        
                                    >
                                        <option>Profissão</option>
                                        <option>Dentista</option>
                                        <option>Fisioterapeuta</option>
                                        <option>Fonoaudiologo</option>
                                        <option>Nutricionista</option>
                                        <option>Medico</option>
                                        <option>Psicologo</option>
                                        <option>Terapelta Ocupacional</option>
                                    </select>
                                </div>
                        </label>
                        
                        <label className="area">
                                <div className="area--input">
                                    <input
                                        placeholder="Especialidade"
                                    />
                                </div>
                            </label>
                        </div>          

                        <div className="container"> 
                        <label className="area">
                                <div className="area--input">
                                    <input
                                       placeholder="Número do Documento"
                                    />
                                </div>
                        </label>
                        
                        <label className="area">
                                <div className="area--input">
                                    <input
                                        placeholder="Data de Inscrição"
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

                            <div className="photoArea"> 
                                <p>Coloque uma foto sua abaixo</p>
                                <div className="photo--personal">
                                <img width="140" src={Avatar} alt="foto"/>
                                </div>

                            </div>

                            <div className="buttonArea">
                            <button onClick={handleBackStep} className="back">Voltar</button>
                            <button onClick={handleNextStep}>Próximo</button>
                            </div>
                            
                        
                       </ContainerPage>
                   </ContainerSteps>
               </ContainerArea>
           </Container>
               
           
    );

}

export default Page;



