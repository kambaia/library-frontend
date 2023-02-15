import styled from 'styled-components';

export const Containner = styled.div`
  width:100%;
  height: 100%;
  position: relative;
  z-index: 0;
  overflow: hidden;
  height: 80vh;
`;

export const CardLogin = styled.div`
  width:100%;
   padding:20px;
   justify-content:flex-end;
   display:flex;
   overflow: hidden;
   height: 100%;
   .eslog{
    justify-content:center;
    flex-direction:column;
    display:flex;
    align-items:center;
    padding:20px;
    width:50%;
    color: #fff;
   }
   h1{
     font-size:3rem;
   }
   span{
     margin-top:10px;
     font-size:1.2rem;
   }
  
`

   
export const Form = styled.div`
 background-color:#fff;
  height:550px;
  border:4px solid #0c854e;
  width:30%;
  display:flex;
  flex-direction:column;
  border-radius:10px;
  


  .btn-acesso{
    button{
      width:50%;
      padding:8px;
      background-color:#0c854e;
      border: 1px solid #fff;
      cursor: pointer;
      .title{
        color: #fff;
        margin-left: 10px;
        color: #fff;
  
      }
    }
  }

`
   
export const FormLogin = styled.div`
background-color:#fff;
 height:550px;
 width:100%;
 display:flex;
 flex-direction:column;
 border-radius:10px;
 .text-registro{
     border-bottom:1px solid #ddd;
     padding:20px;
     h2{
         font-size:1.2em;
     }
 }
 .f-login{
   display:flex;
   justify-content:space-between;
   align-items:center;
   a{
       color:#0c854e;
   }
   .btn-login{
       width:20%;
       cursor: pointer;
   }
   
 }


`