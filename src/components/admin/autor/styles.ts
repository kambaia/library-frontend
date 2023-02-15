import styled from "styled-components";

export const Containner = styled.div`
  .MainDash {
    /* padding-top: 1rem; */
    display: flex;
    flex-direction: column;
    padding: 1rem 3rem;
  }
  .MainDash h1 {
    padding: 2rem 0;
    color: #0c854e;
  }

  @media screen and (max-width: 1200px) {
    .MainDash {
      justify-content: flex-start;
      margin-top: 2rem;
    }
  }

  @media screen and (max-width: 768px) {
    .MainDash {
      align-items: center;
    }
  }
`;
