import styled from "styled-components";

export const Container = styled.div<{ isSidebar: boolean, theme: string }>`
    box-shadow: 0px 0px 7px #c3c1c1;
    height: 86vh;
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${props => props.theme === 'light' ? '#fff' : '#191414' };
    .iniSearDivs {
        color: ${props => props.theme === 'light' ? '#16171a' : '#fff' }
    }
    .inicialSearch {
        width: 90%;
        margin: auto;
        margin-bottom: 0px;
        border-bottom: 1px solid #16171a;
        div {
            display: flex;
            align-items: center;
            height: 60px;
            margin-bottom: 20px;
            padding-left: 10px;
            margin-bottom: 0;
            cursor: pointer;
            font-size: 18px;
            p {
                margin-right: 5px;
            }
        }
        
    }
    .genres {
        width: 90%;
        margin: auto;
        margin-top: 15px;
        color: ${props => props.theme === 'light' ? '#16171a' : '#fff' };
        div {
            
            display: flex;
            align-items: center;
            height: 60px;
            margin-bottom: 20px;
            padding-left: 10px;
            margin-bottom: 0;
            cursor: pointer;
            font-size: 18px;
            
        }
    }
    @media only screen and (max-width: 820px) {
        position: absolute;
        z-index: 2;
        display: ${props => props.isSidebar ? 'block' : 'none'};
        background-color: ${props => props.theme === 'light' ? '#fff' : '#191414' };
        width: 250px;
        .inicialSearch {
            margin-top: 50px;
        }
    }

`;