import React from 'react';

import { Link } from 'react-router-dom';
import {  Pageprofessional,
         AvatarProfessional,
         Photo,
         Name,
         Information,
         UserName,
         PatientAge,      
         UserReport,
         Comorbidities,
         ControlledRemedy,
         AllergyRemedy,
         Allergy,
         MedicalRecord        
         
 } from './styled';


 import Avatar from '../images/Avatar.png';

const Page = () => {
 
  

        return (
            
               
                      <Pageprofessional>
                          <h1>Dados Pessoais</h1>
                            <AvatarProfessional>
                                    <Photo>
                                    <img width="170" src={Avatar} alt="personal"/>
                                    <button className="profile">Alterar Perfil</button>
                                    </Photo>
                                    <Information>
                                        <UserName>
                                            <Name>
                                                <p>Nome do paciente</p>
                                            </Name>
                                        
                                            <PatientAge>
                                                <p>Idade do paciente</p>
                                            </PatientAge>
                                        </UserName> 
                                        <UserReport>
                                            <Comorbidities>
                                                <p>Cormobidades</p>
                                            </Comorbidities>
                                            <ControlledRemedy>
                                                <p>Remédio Controlado</p>
                                            </ControlledRemedy>
                                        </UserReport>
                                        <UserReport>
                                            <AllergyRemedy>
                                                 <p>Alegia a remédios</p>
                                            </AllergyRemedy>
                                            <Allergy>
                                                <p>Alergias</p>
                                            </Allergy>
                                        </UserReport>
                                    </Information>
                            </AvatarProfessional>
                                    <MedicalRecord>
                                        <h2>Prontuário</h2>
                                    </MedicalRecord>
                      </Pageprofessional>
                        

                                   
                  
        );

    }


export default Page;