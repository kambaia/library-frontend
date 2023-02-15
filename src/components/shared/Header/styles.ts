import styled from "styled-components";

export const Containner = styled.div`
  box-shadow: 2px 1px 10px #0c854e;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fafafafa;
  padding-bottom: 0.8rem;
  z-index: 0;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 2rem 0 0 0;
  }
  .public {
    flex: 4;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    .private-menu{
      display: flex;
      align-items: center;
      gap: 20px;
    }
    .pesquisar {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #0c854e;
      box-shadow: 0px 0px 5px #0c854e;
      padding: 8px 5px;
      border-radius: 5px;
      gap: 5px;
      margin-right: 80px;
 
   
      select {
        font-size: 1.1rem;
        border: none;
        background-color: #fff;
      }
      input {
        width: 70%;
        outline: none;
        font-size: 1.1rem;
        border: none;
      }
      button {
        width: 35px;
        outline: none;
        font-size: 1.1rem;
        background: #fff;
        cursor: pointer;
        border: none;
      }
    }
    
    li {
      list-style: none;
      display: flex;
      gap: 4px;
      a {
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 20px;
        span {
          padding-left: 10px;
        }
      }
    }
    .sub-menu{
      width: 200px;
        position: relative;
        :hover .drow-menu{
          display: block;
        }
         
        .drow-menu{
          width: 100%;
          position: absolute;
          top: 100%;
          box-shadow: 2px 1px 10px #0c854e;
          display: none;
          background-color: #fff;
          z-index: 999;
          ul{
            display: flex;
            flex-direction: column;
            padding: 10px;
            li{
              width: 100%;
              padding: 10px;
              cursor: pointer;
              :hover{
                color: b18336;
              }
            }
          }
        }
      }
  }
  .access-menu{
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    .profile{
      width: 40px;
      height: 40px;
      object-fit: cover;
      border-radius: 50%;
    }
    .user-loged{
      border-radius: 50px;
      display: flex;
      .user{
        display: flex;
        flex-direction: column;
      .user-name{
        font-size: 1.2rem;;
        font-weight: bold;
      }
      .user-email{
        font-size: 0.8rem;;
        font-weight: 100;
      }
    }
    }
    li{
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      align-items: center;
      gap: 10px;
      padding: 0 20px;
      .logout-menu{
        display: flex;
        align-items: center;
        gap: 5px;
        cursor: pointer;
      }
    }
  }
  .login {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 20px;
    li {
      list-style: none;
      display: flex;
      gap: 4px;
      a {
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 20px;
      }
    }
  }
`;

export const TopMenuBar = styled.div`
  background-color: #000;
  width: 100%;
  padding: 1rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 0;
  .logo {
    width: 10%;
    height: 50px;
    cursor: pointer;
    img {
      width: 100%;
      height: 60px;
      width: 60px;
      margin-left: 15px;
    }
  }
`;

export const DropDown = styled.div`
  cursor: pointer;
  color: #fff;
  text-transform: uppercase;
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 10000;
  gap: 20px;
  .dropbtn {
    color: #ffff;
    padding: 0.6rem 0.8rem;
    font-family: "Red Hat Display", sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    transition: filter 0.25s;
    width: auto;
    width: 280px;
    display: flex;

    justify-content: space-between;
    border: none;
    background-color: #000;
    cursor: pointer;
    .name {
      width: 90%;
    }
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #3e8e41;
    min-width: 160px;
    z-index: 1;
    margin-top: 10px;
    text-align: center;
    max-height: 200px;
    overflow-y: auto;
    left: 0;
    width: 90%;
  }

  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  .dropdown-content a:hover {
    background-color: #f1f1f1;
  }

  .dropdown:hove .dropdown-content {
    display: block;
  }

  .dropdown:hover .dropbtn {
    background-color: #3e8e41;
  }
`;
