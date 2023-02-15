import styled from "styled-components";

export const MainContainner = styled.main`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding:0 0 0 20px;
  margin-bottom: 50px;


  .session-new-books, .session-new-recent, .session-most-read{
    margin-top: 20px;
    .title {
      margin-left: 50px;
    }
  }
  .session-most-read{ margin-bottom: 50px;}

  .carousel-wrapper {
    max-width: 78vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    position: relative;
    padding: 30px;
    border-bottom: 1px solid #ddd;
 
  }
  .session-most-read{ margin-bottom: 40px;
    .carousel-wrapper {
      border-bottom: none;
    }
    }
  .carousel {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
      margin: auto;
  }
  .carousel::-webkit-scrollbar {
    display: none;
  }
  .left, .right{
    position: absolute;

      span{
      color: #0c854e;
      font-size: 25px;
      cursor: pointer;
    }
  }
  .right{
    right: 0;
    
  }
  .left{
    left:0;
  }
`;
