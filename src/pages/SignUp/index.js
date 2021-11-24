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


            </PageArea>
        </PageContainer>

    );
}





export default Page;