import styled from "styled-components";

export const Containner = styled.div`
.Cards {
    display: flex;
    gap: 10px;
  }
  .parentContainer{
    width: 100%;
  }
  
  @media screen and (max-width: 1200px) {
    .Cards{
      flex-direction: column;
    }
    .parentContainer{
      height: 9rem;
    }
  }
  
  @media screen and (max-width: 768px)
  {
    .Cards{
      width: 90%;
    }
  }

  `