import styled from "styled-components";

export const Container = styled.div<{ theme: string }>`


.divAll {
    margin-right: 20px;
    margin-bottom: 20px;
    box-shadow: 0px 0px 7px #c3c1c1;
    padding: 5px 5px 25px;
    display: flex;
    flex-direction: column;
    width: 200px;
    height: fit-content;
    border-radius: 10px;
    color: ${props => props.theme === 'light' ? '#16171a' : '#fff' };
    cursor: pointer;
}
img {
    margin: 0;
    width: 100%;
    border-radius: 8px;
}

h1 {
    font-size: 22px;
    margin-bottom: 2px;
}
h3 {
    margin: 0;
    font-size: 14px;
    color: ${props => props.theme === 'light' ? '#4c4e51' : '#d6d6d6' }
}
.divGenre {
    margin-right: 20px;
    margin-left: 20px;
    margin-bottom: 20px;
    box-shadow: 0px 0px 7px #c3c1c1;
    padding: 5px 5px 25px;
    display: flex;
    flex-direction: column;
    width: 200px;
    height: fit-content;
    border-radius: 10px;
    color: ${props => props.theme === 'light' ? '#16171a' : '#fff' };
    cursor: pointer;
}

.containerFull {
    display: flex;
    justify-content: center;
    width: 95vw;
    height: 50vh;
    margin-top: 40px;

}

.divFull {
    display: flex;
    flex-direction: column;
    
    align-items: center;

    img {
        margin: 0;
        width: 95vw;
        border-radius: 8px;
    }

    h1 {
        font-size: 42px;
        margin-bottom: 2px;
    }
    h3 {
        margin: 0;
        font-size: 25px;
        color: ${props => props.theme === 'light' ? '#4c4e51' : '#d6d6d6' }
    }
}

@media only screen and (max-width: 700px) {
    .divAll {
        width: 160px;
    }
  }
  .divGenre {
    margin-right: 10px;
    margin-left: 10px;
    width: 160px;

    .containerFull {
        display: flex;
        justify-content: center;
        width: 100vw;
        height: 50vh;
    
    }

    .divFull {
        width: 100%;
        
        img {
            margin: 0;
            width: 100%;
            border-radius: 8px;
        }
    
        h1 {
            font-size: 32px;
            margin-bottom: 2px;
        }
        h3 {
            margin: 0;
            font-size: 20px;
            color: ${props => props.theme === 'light' ? '#4c4e51' : '#d6d6d6' }
        }
    }
}

@media only screen and (max-height: 670px) {

    .divFull {
        width: 100%;
        
        img {
            margin: 0;
            width: 100%;
            border-radius: 8px;
        }
    
        h1 {
            font-size: 32px;
            margin-bottom: 2px;
        }
        h3 {
            margin: 0;
            font-size: 20px;
            color: #4c4e51
        }
    }

 }

`;