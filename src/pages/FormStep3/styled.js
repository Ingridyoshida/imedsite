import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1000px;
    background-color:#BDDEEC;
    color: #FFF;
    min-height: 160vh;
    margin: auto;
    margin-bottom: 20px;
`;

export const ContainerArea = styled.div`
    max-width: 900px;
    min-height: 140vh;
`;

export const ContainerSteps = styled.div`
    flex: 1;
`;

export const ContainerSidebar =styled.div`
    width: 250px;
    border-bottom: 1px solid #EEE;

`;

export const ContainerPage = styled.div`
    flex: 1;
    margin-top: 45px;
    justify-content: center;

    .area {
        display:flex;
        align-items: center;
        padding: 1px;
        max-width: 500px;
    
        

        .area--title {
            width: 200px;
            text-align: right;
            padding-right: 20px;
            font-weight: bold;
            font-size: 14px;
        }
        

        .area--input {
            flex:1;

            input {
                width:auto;
                font-size: 14px;
                margin-top: 8px;
                padding: 5px;
                padding-right: 20px;
                border: 1px solid #8a998e;
                border-radius:3px;
                outline:0;
                transition: all ease .4s;


                &: focus {
                    border: 1px solid #333;
                    color: #333;
                }
            }

            a {
                text-decoration:none;
                width: 280px;
                color: #FFF;
                font-size: 14px;
                font-weight: bold;
                margin: 10px;
                margin-top: 25px;
                padding: 5px 19px;
                background-color: #0089FF;
                border-radius: 3px;
                border: 0;
                cursor: pointer;
        

                &:hover {
                    background-color: #006FCE;
                }
            }

            select {
                padding:5px;
                border-radius:3px;

                option {
                    font-size: 14px;
                    padding-bottom: 8px;
                }
            }

        }
    }

    .termouse {
        width: 110px;
        height: 30px;
        margin-left: 135px;
    }

    .check {
        margin-left: 125px;
        margin-bottom: 10px;
        color: #000;
    }

    .finalcheck {
        width: 1000px;
        height: 50px;
        background-color: #BDDEEC;
        margin-top: 40px;

        .buttonArea {
            width: 390px;
            height: 40px;
            margin:0 auto;

         }
    
         .back {
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

         .finalButton {
            width: 150px;
            height: 35px;
            border: 1px solid #8a998e;
            border-radius:15px;
            background-color:  #0089FF;
            font-size: 20px;
    
            &:hover {
                background-color: #006FCE;
            }
         }
         
    
     
        .profile {
            display:flex;
        }
    
        .inputcheck {
             margin:15px;
        }
      
    
        
    }

   

    .area--tosign {
        display: flex;
        width: auto;
        height: 50px;
        background-color: #BDDEEC;
        margin-top: 20px;
        margin-left: 330px;

        .back {
            width: 150px; 
            height: 40px;
            border-radius: 10px;
            border: none;
            margin-right: 30px;
            background-color: #FFF;
            font-size: 22px;
        }

        .tosign {
            width: 150px; 
            height: 40px;
            border-radius: 10px;
            border: none;
            background-color: #006FCE;
            font-size: 22px;
            
        }

    }

    

`;

export const Price = styled.div`
    width: 100%;
    height:500px;
    padding-bottom: 50px;
    background-color: #BDDEEC;
    margin-left: 45px;

    h1 {
        color: #63C2D1;
        text-align: center;
    }

    h2 {
        color: #525252;
        text-align: center;  
        margin-top: -25px;
        margin-bottom: 28px;
        font-size: 18px;
    }


    a {
        text-decoration:none;
        width: 140px;
        height: 30px;
        color: #FFF;
        justify-content: center;
        align-items: center;
        padding: 5px;
        background-color: #a19d9d;
        border-radius: 3px;
        border: 0;
        cursor: pointer;

        &:hover {
            color:#000;

        &:hover {
            background-color: #006FCE;
        }
    }
   `;

export const Userprice = styled.div`
    display: flex;
    flex-direction: row;
    width: 750px;
    height: 370px;
    background-color:  #BDDEEC;
    margin: 0 auto;
    border-radius:30px;
    
`;

export const PriceMonth = styled.div`
    
    flex: 1;
    height: 330px;
    background-color: #fff;
    border: 1px solid #8c8989;
    justify-content: center;
    align-items: center;
    padding: 8px;
    border-radius: 10px;
    margin: 10px;
    font-weight: bold;
    color: #525252;
    text-align: center
   
`;

export const PriceTwo = styled.div`
    
    height: 100px;
    background-color: #fff;
    border-bottom: 2px solid #CCC;
    border-top: 2px solid #CCC;
    margin-left:55px;
    margin-right:55px;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    margin-top: 40px;

  

    h1 {
        font-size: 25px;
        color: #595757;       
    }

    h2 {
        font-size: 14px;
        color: #878484;
        padding-top:10px;
      
    }
`;

export const AreaButton = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    button {
        width: 150px;
        height: 30px;
        color: #FFF;
        font-wegth: bold;
        background-color: #a19d9d;
        border-radius: 3px;
        border: 0;
        cursor: pointer;
        
        &:hover {
            background-color: #006FCE;
    }

`;

export const Information = styled.text`
    font-size: 13px;
    margin-top: 10px;
    color: #a19d9dS;
`;

export const PriceSemiannual = styled.div`
    flex: 1;
    height: 330px;
    background-color: #fff;
    border: 1px solid #8c8989;
    justify-content: center;
    align-items: center;
    padding: 8px;
    border-radius: 10px;
    margin: 10px;
    font-weight: bold;
    color: #525252;
    text-align: center
`;

export const PriceYear = styled.div`
    flex: 1;
    height: 330px;
    background-color: #fff;
    border: 1px solid #8c8989;
    justify-content: center;
    align-items: center;
    padding: 8px;
    border-radius: 10px;
    margin: 10px;
    font-weight: bold;
    color: #525252;
    text-align: center
`;

export const Payment = styled.div`
    width: 430px;
    height: 220px;
    background-color:	#5F9EA0;
    border: 1px solid #8c8989;
    box-shadow: 1px 1px #888888;
    border-radius: 15px;
    margin: 0 auto;
    margin-bottom: 20px;
    padding: 18px 15px;;
    

    .pay--name {
        width: 358px;
        height: 36px;
        border: 3px solid #8c8989;
        border-radius: 5px;
        margin-left: 18px;
        margin-bottom: 18px;
    }

    .cod--data {
        display: flex;

        .pay--data{
            width: 170px;
            height: 36px;
            border: 3px solid #8c8989;
            border-radius: 5px;
            margin-left: 18px;
            margin-bottom: 18px;
        }

        .pay--cod {
            width: 170px;
            height: 36px;
            border: 3px solid #8c8989;
            border-radius: 5px;
            margin-left: 18px;
            margin-bottom: 18px;
            padding-left: 5px;
        }
    }
`;