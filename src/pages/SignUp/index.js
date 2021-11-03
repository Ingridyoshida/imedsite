import React, { useState, useEffect } from 'react';
import { PageArea,
        Price,
        Userprice,
        PriceMonth,
        PriceYear,
        PriceSemiannual,
        PriceTwo,
        AreaButton,
        Information} from './styled';
import useApi from '../../helpers/ImedAPI';
import { doLogin } from '../../helpers/AuthHandler';
import { Link } from 'react-router-dom';

import { PageContainer,
         PageTitle, 
         ErrorMessage,
          } from '../../components/MainComponents';

const Page = () => {

    const api = useApi();

    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [cpf, setCpf] = useState('');
    const [rua, setRua] = useState('');
    const [cpe, setCpe] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');

    const [profession, setProfession] = useState('');
    const [specialty, setSpecialty] = useState('');
    const [numberDoc, setNumberDoc ] = useState('');
    const [dateSubscription, setDateSubscription ] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');

 

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(false);
        setError('');

        if(password !== confirmPassword) {
            setError('senha incorreta');
            setDisabled(false);
            return;
        }


        
        const json = await api.register(name, date, cpf, rua, cpe, city, email, profession, specialty, numberDoc, dateSubscription, password);

        if(json.error) {
            setError(json.error);
        } else {
            doLogin(json.token);
            window.location.href = '/checkout';
        }

        setDisabled(false);
    }

    return (
        <PageContainer>
            <PageTitle>Cadastro</PageTitle>
            <PageArea>
                {error &&
                     <ErrorMessage>{error}</ErrorMessage>
                }

                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Dados Pessoais</legend>
                        <div className="pessoal">
                            <label className="area">
                                <div className="area--title">Nome Completo:</div>
                                <div className="area--input">
                                    <input
                                        type="text"
                                        disabled={disabled}
                                        value={name}
                                        onChange={e=>setName(e.target.value)}
                                        required
                                    />
                                </div>
                            </label>
                                <label className="area">
                                <div className="area--title">Data de Nascimento:</div>
                                <div className="area--input">
                                    <input
                                        type="date"
                                        disabled={disabled}
                                        value={date}
                                        onChange={e=>setDate(e.target.value)}
                                        required
                                    />
                                </div>
                            </label>
                            </div>

                            <label className="area">
                                <div className="area--title">CPF:</div>
                                <div className="area--input">
                                    <input
                                        type="text"
                                        disabled={disabled}
                                        value={cpf}
                                        onChange={e=>setCpf(e.target.value)}
                                        required
                                    />
                                </div>
                            </label>
                            <label className="area">
                                <div className="area--title">Endereço:</div>
                                <div className="area--input">
                                    <input
                                        type="text"
                                        disabled={disabled}
                                        value={rua}
                                        onChange={e=>setRua(e.target.value)}
                                        required
                                    />
                                </div>
                            </label>
                            <label className="area">
                                <div className="area--title">CEP:</div>
                                <div className="area--input">
                                    <input
                                        type="text"
                                        disabled={disabled}
                                        value={cpe}
                                        onChange={e=>setCpe(e.target.value)}
                                        required
                                    />
                                </div>
                            </label>
                            <label className="area">
                                <div className="area--title">Cidade:</div>
                                <div className="area--input">
                                    <input
                                        type="text"
                                        disabled={disabled}
                                        value={city}
                                        onChange={e=>setCity(e.target.value)}
                                        required
                                    />
                                </div>
                            </label>
                            <label className="area">
                                <div className="area--title">E-mail:</div>
                                <div className="area--input">
                                    <input
                                        type="email"
                                        disabled={disabled}
                                        value={email}
                                        onChange={e=>setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </label>
                    </fieldset>
                    <br/>
                    <fieldset>
                        <legend>Dados Profissionais</legend>
                        <div className="profile">
                            <label className="area">
                                <div className="area--title">Profissão:</div>
                                <div className="area--input">
                                    <select
                                            value={profession}
                                            onChange={e=>setProfession(e.target.value)}
                                            required
                                    >
                                        <option></option>
                                        <option>Dentista</option>
                                        <option>Fisioterapeuta</option>
                                        <option>Fonoaudiologo</option>
                                        <option>Nutricionista</option>
                                        <option>Medico</option>
                                        <option>Psicologo</option>
                                        <option>Terapelta Ocupacional</option>
                                    </select>
                                </div>
                            </label>
                            <label className="area">
                                <div className="area--title">Especialidade:</div>
                                <div className="area--input">
                                    <input
                                        type="text"
                                        disabled={disabled}
                                        value={specialty}
                                        onChange={e=>setSpecialty(e.target.value)}
                                        required
                                    />
                                </div>
                            </label>
                            </div>
                            <label className="area">
                                <div className="area--title">Número do Documento:</div>
                                <div className="area--input">
                                    <input
                                        type="text"
                                        disabled={disabled}
                                        value={numberDoc}
                                        onChange={e=>setNumberDoc(e.target.value)}
                                        required
                                    />
                                </div>
                            </label>
                            <label className="area">
                                <div className="area--title">Data de Inscrição:</div>
                                <div className="area--input">
                                    <input
                                        type="text"
                                        disabled={disabled}
                                        value={dateSubscription}
                                        onChange={e=>setDateSubscription(e.target.value)}
                                        required
                                    />
                                </div>
                            </label>


                            <label className="area">
                                <div className="area--title">Senha:</div>
                                <div className="area--input">
                                    <input
                                        type="password"
                                        disabled={disabled}
                                        value={password}
                                        onChange={e=>setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                            </label>
                            <label className="area">
                                <div className="area--title">Confirmar Senha:</div>
                                <div className="area--input">
                                    <input
                                        type="password"
                                        disabled={disabled}
                                        value={confirmPassword}
                                        onChange={e=>setConfirmPassword(e.target.value)}
                                        required
                                    />
                                </div>
                            </label>
                   </fieldset>  

                   <Price>
                        <h1>Planos</h1>
                        <h2>Escolha abaixo o plano que mais combina com você.</h2>
                            <Userprice>
                                <PriceMonth>
                                          <p>Assinatura Mensal</p>
                                    <PriceTwo>
                                        <h1 >R$ 29,90</h1>
                                        <h2>POR MÊS</h2>
                                    </PriceTwo>
                                        <AreaButton>
                                        <Link to="/signup">ASSINAR</Link>
                                        <Information>Este plano é renovado automaticamente a cada mês</Information>
                                        </AreaButton>        
                                </PriceMonth>
                                <PriceSemiannual>
                                           <p>Assinatura Semestral</p>
                                           <PriceTwo>
                                        <h1 >R$ 25,90</h1>
                                        <h2>POR MÊS</h2>
                                    </PriceTwo>
                                        <AreaButton>
                                        <Link to="/signup">ASSINAR</Link>
                                        <Information>Este plano é renovado automaticamente a cada mês</Information>
                                        </AreaButton>
                                </PriceSemiannual>
                                <PriceYear>
                                          <p>Assinatura Anual</p>
                                          <PriceTwo>
                                        <h1 >R$ 22,90</h1>
                                        <h2>POR MÊS</h2>
                                    </PriceTwo>
                                        <AreaButton>
                                        <Link to="/signup">ASSINAR</Link>
                                        <Information>Este plano é renovado automaticamente a cada mês</Information>
                                        </AreaButton>
                                </PriceYear>
                            </Userprice>
                    </Price>
                   
                   <button className="termouse">Termos de uso</button>
                   <br />
                   <input
                        className="inputcheck"
                        type="checkbox"
                        id="texto"
                    />
                   <label
                   className="inputcheck"
                   for="texto">Eu declaro que li e aceito os termos de uso. </label>
                      
                    <label className="area">
                        <div className="area--input">
                        <Link disabled={disabled} to="/signup">ASSINAR</Link>
                           
                        </div>
                    </label>
                </form>
            </PageArea>
        </PageContainer>

    );
}





export default Page;