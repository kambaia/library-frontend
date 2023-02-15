import styled from 'styled-components';

export const Form = styled.div`
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
  .f-registro{
    display:flex;
    align-items:center;
    flex-direction: column;
    padding: 10px;
    a{
        margin-left:5%; 
        color:#0c854e;
    }
    .btn-registro{
        width:50%;
    }
    
  }


`