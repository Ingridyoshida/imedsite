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
                    <div className="dias">
                        <div className="horarios">
                            <BsPersonCircle width="28" height="28"/>
                            <div className="namePerson">
                                <div className="texto">Nome da pessoa</div>
                            </div>
                            <div className="namePerson">
                                <div className="texto">13:00</div>
                            </div>
                        </div>
                        <div className="horarios">
                            <BsPersonCircle width="28" height="28"/>
                            <div className="namePerson">
                                <div className="texto">Nome da pessoa</div>
                            </div>
                            <div className="namePerson">
                                <div className="texto">14:00</div>
                            </div>
                        </div>
                        <div className="horarios">
                            <BsPersonCircle width="28" height="28"/>
                            <div className="namePerson">
                                <div className="texto">Nome da pessoa</div>
                            </div>
                            <div className="namePerson">
                                <div className="texto">15:00</div>
                            </div>
                        </div>
                        <div className="horarios">
                            <BsPersonCircle width="28" height="28"/>
                            <div className="namePerson">
                                <div className="texto">Nome da pessoa</div>
                            </div>
                            <div className="namePerson">
                                <div className="texto">16:00</div>
                            </div>
                        </div>
                        <div className="horarios">
                            <BsPersonCircle width="28" height="28"/>
                            <div className="namePerson">
                                <div className="texto">Nome da pessoa</div>
                            </div>
                            <div className="namePerson">
                                <div className="texto">16:30</div>
                            </div>
                        </div>
                        <div className="horarios">
                            <BsPersonCircle width="28" height="28"/>
                            <div className="namePerson">
                                <div className="texto">Nome da pessoa</div>
                            </div>
                            <div className="namePerson">
                                <div className="texto">17:00</div>
                            </div>
                        </div>
                        <div className="horarios">
                            <BsPersonCircle width="28" height="28"/>
                            <div className="namePerson">
                                <div className="texto">Nome da pessoa</div>
                            </div>
                            <div className="namePerson">
                                <div className="texto">17:30</div>
                            </div>
                        </div>
                        <div className="horarios">
                            <BsPersonCircle width="28" height="28"/>
                            <div className="namePerson">
                                <div className="texto">Nome da pessoa</div>
                            </div>
                            <div className="namePerson">
                                <div className="texto">18:00</div>
                            </div>
                        </div>
                    </div>
                    <div className="dias">
                    <div className="horarios">
                            <BsPersonCircle width="28" height="28"/>
                            <div className="namePerson">
                                <div className="texto">Nome da pessoa</div>
                            </div>
                            <div className="namePerson">
                                <div className="texto">13:00</div>
                            </div>
                        </div>
                        <div className="horarios">
                            <BsPersonCircle width="28" height="28"/>
                            <div className="namePerson">
                                <div className="texto">Nome da pessoa</div>
                            </div>
                            <div className="namePerson">
                                <div className="texto">14:00</div>
                            </div>
                        </div>
                        <div className="horarios">
                            <BsPersonCircle width="28" height="28"/>
                            <div className="namePerson">
                                <div className="texto">Nome da pessoa</div>
                            </div>
                            <div className="namePerson">
                                <div className="texto">15:00</div>
                            </div>
                        </div>
                        <div className="horarios">
                            <BsPersonCircle width="28" height="28"/>
                            <div className="namePerson">
                                <div className="texto">Nome da pessoa</div>
                            </div>
                            <div className="namePerson">
                                <div className="texto">16:00</div>
                            </div>
                        </div>
                        <div className="horarios">
                            <BsPersonCircle width="28" height="28"/>
                            <div className="namePerson">
                                <div className="texto">Nome da pessoa</div>
                            </div>
                            <div className="namePerson">
                                <div className="texto">16:30</div>
                            </div>
                        </div>
                        <div className="horarios">
                            <BsPersonCircle width="28" height="28"/>
                            <div className="namePerson">
                                <div className="texto">Nome da pessoa</div>
                            </div>
                            <div className="namePerson">
                                <div className="texto">17:00</div>
                            </div>
                        </div>
                        <div className="horarios">
                            <BsPersonCircle width="28" height="28"/>
                            <div className="namePerson">
                                <div className="texto">Nome da pessoa</div>
                            </div>
                            <div className="namePerson">
                                <div className="texto">17:30</div>
                            </div>
                        </div>
                        <div className="horarios">
                            <BsPersonCircle width="28" height="28"/>
                            <div className="namePerson">
                                <div className="texto">Nome da pessoa</div>
                            </div>
                            <div className="namePerson">
                                <div className="texto">18:00</div>
                            </div>
                        </div>
                    </div>
                    <div className="dias">
                    <div className="horarios">
                            <BsPersonCircle width="28" height="28"/>
                            <div className="namePerson">
                                <div className="texto">Nome da pessoa</div>
                            </div>
                            <div className="namePerson">
                                <div className="texto">13:00</div>
                            </div>
                        </div>
                        <div className="horarios">
                            <BsPersonCircle width="28" height="28"/>
                            <div className="namePerson">
                                <div className="texto">Nome da pessoa</div>
                            </div>
                            <div className="namePerson">
                                <div className="texto">14:00</div>
                            </div>
                        </div>
                        <div className="horarios">
                            <BsPersonCircle width="28" height="28"/>
                            <div className="namePerson">
                                <div className="texto">Nome da pessoa</div>
                            </div>
                            <div className="namePerson">
                                <div className="texto">15:00</div>
                            </div>
                        </div>
                        <div className="horarios">
                            <BsPersonCircle width="28" height="28"/>
                            <div className="namePerson">
                                <div className="texto">Nome da pessoa</div>
                            </div>
                            <div className="namePerson">
                                <div className="texto">16:00</div>
                            </div>
                        </div>
                        <div className="horarios">
                            <BsPersonCircle width="28" height="28"/>
                            <div className="namePerson">
                                <div className="texto">Nome da pessoa</div>
                            </div>
                            <div className="namePerson">
                                <div className="texto">16:30</div>
                            </div>
                        </div>
                        <div className="horarios">
                            <BsPersonCircle width="28" height="28"/>
                            <div className="namePerson">
                                <div className="texto">Nome da pessoa</div>
                            </div>
                            <div className="namePerson">
                                <div className="texto">17:00</div>
                            </div>
                        </div>
                        <div className="horarios">
                            <BsPersonCircle width="28" height="28"/>
                            <div className="namePerson">
                                <div className="texto">Nome da pessoa</div>
                            </div>
                            <div className="namePerson">
                                <div className="texto">17:30</div>
                            </div>
                        </div>
                        <div className="horarios">
                            <BsPersonCircle width="28" height="28"/>
                            <div className="namePerson">
                                <div className="texto">Nome da pessoa</div>
                            </div>
                            <div className="namePerson">
                                <div className="texto">18:00</div>
                            </div>
                        </div>
                    </div>
                    <div className="dias">
                    <div className="horarios">
                            <BsPersonCircle width="28" height="28"/>
                            <div className="namePerson">
                                <div className="texto">Nome da pessoa</div>
                            </div>
                            <div className="namePerson">
                                <div className="texto">13:00</div>
                            </div>
                        </div>
                        <div className="horarios">
                            <BsPersonCircle width="28" height="28"/>
                            <div className="namePerson">
                                <div className="texto">Nome da pessoa</div>
                            </div>
                            <div className="namePerson">
                                <div className="texto">14:00</div>
                            </div>
                        </div>
                        <div className="horarios">
                            <BsPersonCircle width="28" height="28"/>
                            <div className="namePerson">
                                <div className="texto">Nome da pessoa</div>
                            </div>
                            <div className="namePerson">
                                <div className="texto">15:00</div>
                            </div>
                        </div>
                        <div className="horarios">
                            <BsPersonCircle width="28" height="28"/>
                            <div className="namePerson">
                                <div className="texto">Nome da pessoa</div>
                            </div>
                            <div className="namePerson">
                                <div className="texto">16:00</div>
                            </div>
                        </div>
                        <div className="horarios">
                            <BsPersonCircle width="28" height="28"/>
                            <div className="namePerson">
                                <div className="texto">Nome da pessoa</div>
                            </div>
                            <div className="namePerson">
                                <div className="texto">16:30</div>
                            </div>
                        </div>
                        <div className="horarios">
                            <BsPersonCircle width="28" height="28"/>
                            <div className="namePerson">
                                <div className="texto">Nome da pessoa</div>
                            </div>
                            <div className="namePerson">
                                <div className="texto">17:00</div>
                            </div>
                        </div>
                        <div className="horarios">
                            <BsPersonCircle width="28" height="28"/>
                            <div className="namePerson">
                                <div className="texto">Nome da pessoa</div>
                            </div>
                            <div className="namePerson">
                                <div className="texto">17:30</div>
                            </div>
                        </div>
                        <div className="horarios">
                            <BsPersonCircle width="28" height="28"/>
                            <div className="namePerson">
                                <div className="texto">Nome da pessoa</div>
                            </div>
                            <div className="namePerson">
                                <div className="texto">18:00</div>
                            </div>
                        </div>
                    </div>
                    <div className="dias">
                        <div className="horarios">
                            <BsPersonCircle width="28" height="28"/>
                            <div className="namePerson">
                                <div className="texto">Nome da pessoa</div>
                            </div>
                            <div className="namePerson">
                                <div className="texto">13:00</div>
                            </div>
                        </div>
                        <div className="horarios">
                            <BsPersonCircle width="28" height="28"/>
                            <div className="namePerson">
                                <div className="texto">Nome da pessoa</div>
                            </div>
                            <div className="namePerson">
                                <div className="texto">14:00</div>
                            </div>
                        </div>
                        <div className="horarios">
                            <BsPersonCircle width="28" height="28"/>
                            <div className="namePerson">
                                <div className="texto">Nome da pessoa</div>
                            </div>
                            <div className="namePerson">
                                <div className="texto">15:00</div>
                            </div>
                        </div>
                        <div className="horarios">
                            <BsPersonCircle width="28" height="28"/>
                            <div className="namePerson">
                                <div className="texto">Nome da pessoa</div>
                            </div>
                            <div className="namePerson">
                                <div className="texto">16:00</div>
                            </div>
                        </div>
                        <div className="horarios">
                            <BsPersonCircle width="28" height="28"/>
                            <div className="namePerson">
                                <div className="texto">Nome da pessoa</div>
                            </div>
                            <div className="namePerson">
                                <div className="texto">16:30</div>
                            </div>
                        </div>
                        <div className="horarios">
                            <BsPersonCircle width="28" height="28"/>
                            <div className="namePerson">
                                <div className="texto">Nome da pessoa</div>
                            </div>
                            <div className="namePerson">
                                <div className="texto">17:00</div>
                            </div>
                        </div>
                        <div className="horarios">
                            <BsPersonCircle width="28" height="28"/>
                            <div className="namePerson">
                                <div className="texto">Nome da pessoa</div>
                            </div>
                            <div className="namePerson">
                                <div className="texto">17:30</div>
                            </div>
                        </div>
                        <div className="horarios">
                            <BsPersonCircle width="28" height="28"/>
                            <div className="namePerson">
                                <div className="texto">Nome da pessoa</div>
                            </div>
                            <div className="namePerson">
                                <div className="texto">18:00</div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="botao">Agendamento</button>
            </PageAgenda>
         
        </PageContainer>        
           
    );

}

export default Page;










