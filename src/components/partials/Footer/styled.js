import styled from 'styled-components';

export const FooterArea = styled.div`
    height: 110px;
    background-color:#4EADBE;
    display: flex;
    justify-content: space-between;

    a {
        text-decoration:none;
        color:#000;
    }

    ul, li {
        margin:0;
        padding-top:10px;
        list-style:none;
    }

  
`;
export const Company = styled.div`
    display: flex;
`;

export const Social = styled.div`
    font-size: 8px;
    display: flex;
    flex-direction: row;
    width: 380px;
    height: 60px;
    margin-rigth: 90px;
    padding: 10px;
    padding-rigth: 250px;
    align-items: center;
`;