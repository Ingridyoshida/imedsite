import React from 'react';

import { Link } from 'react-router-dom';
import {  Pageprofessional,
          Header,
          TimetableContainer,
          Monday,
          Tuesday,
          Wednesday,
          Thursday,
          Friday,
          Saturday,
         
 } from './styled';


const Page = () => {
 
  

        return (
    
                      <Pageprofessional>
                          <Header>
                              <h2>Escolha seus horários</h2>
                          </Header>
                          <TimetableContainer>
                                <Monday>
                                  <text>Segunda</text>
                                </Monday>
                                <Tuesday>
                                    <text>Terça</text>
                                </Tuesday> 
                                <Wednesday>
                                  <text>Quarta</text>
                                </Wednesday>
                                <Thursday>
                                    <text>Quinta</text>
                                </Thursday> 
                                <Friday>
                                  <text>Sexta</text>
                                </Friday>
                                <Saturday>
                                    <text>Sábado</text>
                                </Saturday>
                          </TimetableContainer>
                      </Pageprofessional>
                        

            
                    
                   
             
        );

    }


export default Page;