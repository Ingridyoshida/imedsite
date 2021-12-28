import React from 'react';
import { Container,

} from './styled.js';

import { Link } from 'react-router-dom';




const Page = () => {
 

    return (
        <Container>
            <div className="header">
                 <h1>Fale Conosco</h1>
            </div>
            <div className="body">
                <div>
                     <label className="area">
                         <div className="area--input">
                             <input
                               placeholder="Nome completo"
                               autoFocus
                            />
                         </div>
                    </label>
                </div>
                <div>
                     <label className="area">
                         <div className="area--input">
                             <input
                               placeholder="E-mail"
                               autoFocus
                            />
                         </div>
                    </label>
                </div>
                <div >
                   <textarea className="textbox"
                             placeholder="Escreva aqui sua mensagem"
                   ></textarea>
                </div>

                <button>Enviar</button>
            </div>

            
           

        </Container>   
           
    );

}

export default Page;