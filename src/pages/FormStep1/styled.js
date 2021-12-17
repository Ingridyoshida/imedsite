import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1000px;
    background-color:#BDDEEC;
    color: #FFF;
    height: 600px;
    margin:0 auto;
    margin-bottom:20px;

`;

export const ContainerArea = styled.div`
    max-width: 900px;
    min-height: 100vh;
    margin: auto;
`;

export const ContainerSteps = styled.div`
    flex: 1;
`;

export const ContainerSidebar =styled.div`
    width: 900px;
    border-bottom: 1px solid #EEE;

    h1 {
        padding-top: 15px;   
    }


`;

export const ContainerPage = styled.div`
    flex: 1;
    aling-items: center;
    justify-content: center;
    padding-top: 15px;

    button {
        width: 180px;
        height: 35px;
        border: 1px solid #8a998e;
        border-radius:15px;
        margin-left: 350px;
        margin-top: 35px;
        background-color:  #0089FF;
        font-size: 20px;

        &:hover {
            background-color: #006FCE;
        }

    }

    .container{
        display: flex;
        aling-items: center;
        justify-content: center;
        margin: 5px;
        padding-right: 7px;
    }

    .area {
        display:flex;
        align-items: center;
        justify-content: center;
        padding: 1px;
        max-width: 550px;

        .area--title {
            width: 160px;
            text-align: right;
            padding-right: 20px;
            font-weight: bold;
            font-size: 14px;
            color: #000;
        }
        

        .area--input {
            flex:1;

            input {
                width: 280px;
                height: 35px;
                font-size: 14px;
                margin-top: 8px;
                padding: 5px;
                padding-right: 20px;
                border: 1px solid #8a998e;
                border-radius:15px;
                outline:0;
                transition: all ease .4s;


                &: focus {
                    border: 1px solid #333;
                    color: #333;
                }
            }

         .email--input {
                width: 560px;
                height: 35px;
         }  
         
        

`;
