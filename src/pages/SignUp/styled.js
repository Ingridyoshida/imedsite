import styled from 'styled-components';

export const PageArea = styled.div`


Form {
    background-color: #FFF;
    border-radius:3px;
    padding: 10px;
    box-shadow: 0px 0px 3px #999;
    flex-direction: column;

    fieldset {
        border-radius:15px;
        border:1px solid #4EADBE;
    }

    .pessoal {
        display: flex;
    }

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
        margin: 5px;
    }
 
    .profile {
        display:flex;
    }

    .inputcheck {
         margin:10px;
    }
}


`;

export const Price = styled.div`
    width: 100%;
    height:500px;
    padding-bottom: 100px;
    background-color: #fff;
    justify-content: center;
    align-items: center;

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
    background-color:  #FFF;
    align-items: center;
    margin: auto;
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














