import styled from "styled-components";

export const Containner = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: start;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 9999;
`;

export const ContentBody = styled.div`
  display: flex;
  width: 400px;
  background-color: #fff;
  height: 100vh;
  flex-direction: column;
  border-bottom: 1px solid #ddd;
  box-shadow: 0px 0px 5px #0c854e;

  .top {
    background-color: #0c854e;
    padding: 1.2rem;
    box-shadow: 0px 1px 10px #0c854e;
    h3 {
      font-size: 1.5rem;
      color: #fff;
    }
  }
  ul {
    padding: 20px 20px 10px 10px;
    li {
      display: flex;
      align-items: center;
      margin-left: 10px;
      border-bottom: 1px solid #ddd;
      padding: 5px;
      a {
        color: #555;
        text-decoration: none;
        font-size: 1.2rem;
        display: flex;
        align-items: center;
        span {
          padding-right: 6px;
        }
        :hover {
          color: #0c854e;
        }
      }
    }
  }
`;
