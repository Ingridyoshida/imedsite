import styled from 'styled-components';

export const Container = styled.div`
    width: 1000px;
    height:500px;
    background-color: #BDDEEC;
    margin: 0 auto;
    margin-bottom: 20px;
   
    .header {
        width: 300px;
        height: 50px;
        margin: 0 auto;

        h1 {
            
        }
    }

    .body {
        width: 500px;
        height: 300px;
        margin: 0 auto;
        padding: 30px;

        button {
            width: 100px;
            height: 35px;
            margin-top: 20px;
            margin-left: 150px;
            border-radius: 15px;
            border: 1px solid #CCC;
            font-size: 20px;
    
            &:hover {
                background-color: #0089FF;
            }
        }

        .textbox {
            width: 400px;
            height: 200px;
            margin-top: 20px;
            border-radius: 8px;
        }

        .area {
            display:flex;
            align-items: center;
            justify-content: center;
            padding: 1px;
            max-width: 550px;
            
    
            .area--input {
                flex:1;
    
                input {
                    width: 400px;
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

               

    }
    
`;