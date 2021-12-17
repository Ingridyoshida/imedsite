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
                history.push('/Patient');
            }  
            const handleBackStep = () => {
                history.push('/form1');
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
                        <div className="container--question">
                        <div className="question"> 
                            <p>Você possui alguma comorbidade? </p>
                        <div className="container"> 
                        
                            <label className="area">
                                    <div className="area--input">
                                        <input
                                            placeholder="Digite aqui"
                                        />
                                    </div>
                                </label>
                            </div>  

                            <p>Você toma algum remédio controlado? </p>
                            <div className="container"> 
                            <label className="area">
                                    <div className="area--input">
                                        <input
                                        placeholder="Digite o nome do remédio"
                                        />
                                    </div>
                            </label>
                            </div> 

                            <p>Você possui alergia a algum remédio? </p>
                            <div className="container"> 
                                    <label className="area">
                                        <div className="area--input">
                                            <input
                                            placeholder="Digite o nome do remédio"
                                            />
                                        </div>
                                    </label>
                            </div>
                            
                            <p>Você possui alguma alergia? </p>
                            <div className="container"> 
                                    <label className="area">
                                        <div className="area--input">
                                            <input
                                            placeholder="Digite aqui"
                                            />
                                        </div>
                                    </label>
                            </div>
                        </div>
                      
                            <div className="photoArea"> 
                                <p>Coloque uma foto sua abaixo</p>
                                <div className="photo--personal">
                                <img width="140" src={Avatar} alt="foto"/>
                                </div>
                           </div>

                    </div>                        
                            
                   <div className="finalcheck">
                            <button onClick={handleBackStep} className="back">Voltar</button>
                            <button onClick={handleNextStep} className="finalButton">Finalizar</button>
                   </div>
                        
                       </ContainerPage>
                   </ContainerSteps>
               </ContainerArea>
           </Container>
               
           
    );

}

export default Page;
