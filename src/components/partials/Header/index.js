import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderArea } from './styled';


import { isLogged, doLogout } from '../../../helpers/AuthHandler';

const Header = () => {
    let logged = isLogged();

    const handleLogout = () => {
        doLogout();
        window.location.href = '/signin';
    }

    return (
        <HeaderArea>
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <span className="logo-1">i</span>
                        <span className="logo-2">M</span>
                        <span className="logo-3">e</span>
                        <span className="logo-4">d</span>
                    </Link>
                </div>
                <nav>
                    <ul>
                        {logged &&
                            <>
                                <li>
                                    <Link to="/my-account">Minha Conta</Link>
                                </li>
                                <li>
                                    <button onClick={handleLogout}>Sair</button>
                                </li>
                                
                            </>
                        }
                        {!logged &&
                            <>
                                <li>
                                    <Link to="/signin">Paciente</Link>
                                </li>
                                <li>
                                    <Link to="/signin">Profissional</Link>
                                </li>
                                <li>
                                    <Link to="/signup">Cadastrar</Link>
                                </li>
                              
                            </>
                        }
                    </ul>
                </nav>
            </div>
        </HeaderArea>
    );
}

export default Header;