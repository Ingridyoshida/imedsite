import React from 'react';

import { Link } from 'react-router-dom';
import {  Pageprofessional,
         AvatarProfessional,
         Photo,
         Name,
         Information,
         UserName,
         Profession,
         Specialization,
         Useraddress
                
         
 } from './styled';

 import { PageContainer } from '../../components/MainComponents';

 import Avatar from '../images/Avatar.png';

const Page = () => {
 
  

        return (
            <>
                <PageContainer>          
                      <Pageprofessional>
                            <AvatarProfessional>
                                    <Photo>
                                    <img width="170" src={Avatar} alt="calendario"/>
                                    <button className="profile">Alterar Perfil</button>
                                    </Photo>
                                    <Information>
                                        <UserName>
                                            <Name></Name>
                                        </UserName>
                                        <Profession></Profession>
                                        <Specialization></Specialization>
                                        <Useraddress></Useraddress>
                                    </Information>
                            </AvatarProfessional>
                      </Pageprofessional>
                        

            
                 </PageContainer>                        
                   
            </>      
        );

    }


export default Page;