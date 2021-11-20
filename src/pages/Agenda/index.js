import React from 'react';
import { PageAgenda
} from './styled.js';
import { BsPersonCircle } from 'react-icons/bs';
import { doLogin } from '../../helpers/AuthHandler';
import { Link } from 'react-router-dom';


import { PageContainer } from '../../components/MainComponents';



const Page = () => {
 

    return (
        <PageContainer> 
            <PageAgenda>
                <div className="header">
                    <h1 className="texto">Agendamento semanal</h1>
                    <input placeholder="digite o nome completo" />
                </div>

                <div className="agendamento">
                    <div className="dias bg1">
                    </div>
                    <div className="dias bg2">
                    </div>
                    <div className="dias bg3">  
                        <h1>text1</h1>                          
                        <h1>text2</h1>                          
                        <h1>text3</h1>                          
                        <h1>text4</h1>                          
                        <h1>text5</h1>                          
                        <h1>text6</h1>                          
                    </div>
                    <div className="dias bg4">
                    </div>
                    <div className="dias bg5"> 
                    </div>
                    <div className="dias bg4"> 
                    </div>
                    <div className="dias bg3"> 
                    </div>
                    <div className="dias bg2"> 
                    </div>
                    <div className="dias bg1"> 
                    </div>
                </div>
                <button className="botao">Agendamento</button>

                <Link to="/Myaccount">Minha Conta</Link>
            </PageAgenda>
         
        </PageContainer>        
           
    );

}

export default Page;










