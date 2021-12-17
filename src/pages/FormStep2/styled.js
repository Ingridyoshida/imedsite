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
    width: 600px;
    aling-items: center;
    justify-content: center;
    padding-top: 15px;
    margin-left: 145px;

    .buttonArea {
        width: 390px;
        height: 40px;
        margin-left: 140px;
        margin-top: 100px;
     }

     .back {
         background-color: #FFF;
         
     }


    button {
        width: 150px;
        height: 35px;
        border: 1px solid #8a998e;
        border-radius:15px;
        margin-right: 10px;
        margin-top: 35px;
        background-color:  #0089FF;
        font-size: 20px;
        aling-items: center;
        justify-content: center;

        &:hover {
            background-color: #006FCE;
        }

    }

    .photoArea {
        width: 560px;
        height: 100px;
        margin-top: 15px;
        aling-items: center;
        justify-content: center;

        p {
            font-size: 18px;
            color: #333;
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

        select {
            width: 280px;
            height: 34px;
            aling-items: center;
            justify-content: center;
            border-radius: 15px;
            margin-top: 10px;

            option {
                font-size: 14px;
            }
        }
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