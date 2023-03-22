import styled from "styled-components";

export const Container = styled.div<{ theme: string }>`
    display: flex;
    .oi { 
        box-shadow: 0px 0px 7px #c3c1c1;
        height: 86vh;
        width: 25%;
      }
    .divSongs {
      background-color: ${props => props.theme === 'light' ? '#fff' : '#191414' };
    height: 75vh;
    position: fixed; 
    overflow-y: scroll;
    z-index: 1;
    ::-webkit-scrollbar {
        width: 15px;    
      }
      
    ::-webkit-scrollbar-track {
          
      }
      
    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme === 'light' ? '#c3c1c1' : '#2b2b2b' };
      }
    }
    .title {
        margin: 10px 10px;
        font-size: 40px;
        color: ${props => props.theme === 'light' ? '#16171a' : '#fff' };
    }
    .showSidebar {
      border: none;
      outline: none;
      background-color: transparent;
      position: absolute;
      z-index: 2;
      left: 2px;
      top: 20px;
      cursor: pointer;
    }
    .top {
        width: 100%;
        box-shadow: 4px 1px 7px #c3c1c1;
        background-color: ${props => props.theme === 'light' ? '#fff' : '#191414' };
        input {
          border: none;
          outline: none;
          background-color: ${props => props.theme === 'light' ? '#232429' : '#fff' };
          border-radius: 10px; 
          margin: 15px 0px 30px 30px;
          height: 31px;
          width: 40%;
          color: #fff;
          font-size: 18px;
          padding: 5px;
        }
        .searchH1 {
          margin-left: 20px;
          font-size: 38px;
          color: ${props => props.theme === 'light' ? '#16171a' : '#fff' };
        }
    }
      
    @media only screen and (max-width: 820px) {
      .top {
        height: 86vh;
        
        .title {
          margin: 10px 10px;
          text-align: center; 
      }        
      .divSongs {
        width: 100vw;
        position: relative;
      }
      input {
        margin-left: 13%;
        width: 250px;
      }
    }
`;

export const Music = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
    margin-top: 10px;
`;