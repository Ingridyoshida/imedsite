import React from 'react';
import { FooterArea,
         Company,
         Social 
        } from './styled';
import { Link } from 'react-router-dom';

import Instagram from '../Image/instagram.png';
import Linkedin from '../Image/linkedin.png';

const Footer = () => {
    return (
        <FooterArea>
            <Company>
                <ul>
                    <li>
                        <Link to="/">Quem Somos</Link>
                    </li>
                    <li>
                        <Link to="/">Contatos</Link>
                    </li>
                    <li>
                        <Link to="/">Politica da Empresa</Link>
                    </li>
                    <li>
                        <Link to="/">Baixe o App</Link>
                    </li>
                </ul>  
            </Company> 
           <Social>
              
               <img width="35" src={Instagram}  alt="instagram" />
               <img width="50" src={Linkedin}  alt="linkedin" />
           </Social>
           
        </FooterArea>
    );
}

export default Footer;