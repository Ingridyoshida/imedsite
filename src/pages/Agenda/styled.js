import styled from 'styled-components';

export const PageAgenda = styled.div`
    width: 1000px;
    height: 500px;
    background-color: #fff;

    .header{
        width: 980px;
        height: 50px;
        display:flex;
        font-size:29px;
        padding: 10px;
        justify-content: space-between;
    }

    .agendamento{
        width: 980px;
        height: 300px;
        background-color: #fff;
        margin-left: 10px;
        margin-top: 18px;
        display: flex;
        overflow-x: auto;
        overflow-y:auto;
        gap:8px;
        
    }
    .agendamento::-webkit-scrollbar {
        width: 0px;
        background: transparent;
      }

    .dias{
        min-width: 200px;
        height: 300px;
        background-color: #fff;
        border-radius:5px;
    }
    .bg1{
        background-color: #DDA0DD
    }
    .bg2{
        background-color: #9370DB
    }
    .bg3{
        background-color: #3CB371
    }
    .bg4{
        background-color: #20B2AA
    }
    .bg5{
        background-color: 	#F08080
    }
    .horarios{
        width:190px;
        height: 37px;
        border: 1px solid #ccc;
        justify-content: center;
        align-items: center;
        display: flex;
        padding-top:5px;
    }
    .nameperson{
        width:100px;
        height: 37px;
        padding-bottom:5px;
    } 
    .texto{
        font-size:12px;
    }
    .botao{
        margin: 30px;
        margin-left:50px;
    }
`;
















