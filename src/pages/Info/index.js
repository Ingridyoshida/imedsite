import React from 'react';
import { Container, 
         Header, 
         BodyArea,
         BodyProfessional,
         AreaButton,
         AreaImage,
         BodyPeople

} from './styled.js';

import { Link } from 'react-router-dom';

import { PageContainer } from '../../components/MainComponents';

import Medico from '../images/medico.svg';
import People from '../images/people.svg';


const Page = () => {
 

    return (
        <>
            <PageContainer>
                <Container>
                   <BodyArea>
                        <header>
                            <h1>Cadastro de Profissionais</h1>    
                        </header>   
                        <BodyProfessional>
                                <AreaButton>
                                <Link to="/FormStep1">Clique Aqui</Link>
                                </AreaButton>
                                <AreaImage>
                                     <img width="350" src={Medico} />
                                </AreaImage>
                        </BodyProfessional>
                        <header>
                            <h1>Cadastro de Pacientes</h1>    
                        </header>  
                        <BodyPeople>
                        <AreaButton>
                              <img width="350" src={People} />
                                </AreaButton>
                                <AreaImage>
                                <Link to="/Form1">Clique Aqui</Link>
                                </AreaImage>
                        </BodyPeople>
                   </BodyArea>
                </Container>  
            </PageContainer>
                                  
            </>      
               
           
    );

}

export default Page;