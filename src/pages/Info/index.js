import React from 'react';
import { Container, 
         Header, 
         BodyArea,
         BodyProfessional,
         AreaButton,
         AreaImage,

} from './styled.js';

import { Link } from 'react-router-dom';

import { PageContainer } from '../../components/MainComponents';

import Medico from '../images/medico.svg';



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
                      
                   </BodyArea>
                </Container>  
            </PageContainer>
                                  
            </>      
               
           
    );

}

export default Page;