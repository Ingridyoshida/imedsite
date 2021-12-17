import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1000px;
    background-color:#BDDEEC;
    color: #FFF;
    min-height: 120vh;
    margin: auto;

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
    width: 1000px;


  

    .finalcheck {
        width: 410px;
        background-color: #BDDEEC;
        margin: 0 auto;

        .finalButton {
            width: 150px; 
            height: 35px;
            border-radius: 15px;
            border: none;
            background-color:  #0089FF;
            border: 1px solid #8a998e;
            font-size: 22px;

            &:hover {
                background-color: #006FCE;
            }
        }
    }

    
    button {
        background-color: #FFF;
        width: 150px;
        height: 35px;
        border-radius:15px;
        margin-right: 10px;
        border: 1px solid #8a998e;
        font-size: 20px;

        &:hover {
            background-color: #006FCE;
        }
    
    }

    .container--question {
        display: flex;
        width: 800px;
        padding-top: 5px;
        margin-left: 80px;
        margin-bottom: 20px;
    }

    p {
        color: #000;
        font-weight: bold;
        aling-items:center;
        justify-content: center;
    }

    .question {
        width: 500px;
    }  

    .photoArea {
        width: 400px;
        height: 300px;
        margin-top: 95px;


        p {
            font-size: 18px;
            color: #333;
            margin-left: 35px;

        }

        .photo--personal {
            width: 142px;
            height: 142px;
            border: 1px solid #333;
            margin: 0 auto;
            cursor:pointer;
        }
    }

    .container{
        display: flex;
        margin: 5px;
        margin-right: 10px;
        padding-right: 7px;
        aling-items: center;
        justify-content: space-between;

       
    }

    .area {
        display:flex;
        padding: 1px;
        max-width: 550px;
        aling-items: center;
        justify-content: center;

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
                aling-items: center;
                justify-content: center;
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