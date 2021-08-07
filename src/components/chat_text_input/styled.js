import styled from 'styled-components'

export const ChatTextInputStyled = styled.div`
    position: absolute;
    padding: 0;
    width: 99%;
    height: 5vh;
    margin-top: 94vh;

    display: flex;
    align-items: center;
    flex-direction: row;

    color: #6588DE;

    .pointer:hover {
        cursor: pointer;
    }

    .input-container {
        width: 97%;
        height: 4vh;
        border: 1px solid rgba(150, 169, 186, 0.7);
        border-radius: 14px;
        margin-left: 0.5vw;

        display: flex;
        align-items: center;
        flex-direction: row;
    }

    .attach-file {
        transform: rotateZ(45deg);
        margin-left: 1vw;
    }

    .mic {
        margin-left: 0.7vw;
    }

    .input-text {
        width: 87%;
        margin-left: 0.5vw;
        height: 82%;
        border: none;

        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 12px;
        line-height: 18px;
        color: #52585E;
    }

    .input-text:placeholder {
        color: #96A9BA;
    }

    .input-text:focus {
        outline: none;
    }

    .send {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
        color: #FDFDFE;

        padding: 0;
        padding-left: 0.5vw;
        padding-right: 0.5vw;
        border: none;
        background: #6588DE;

        border-radius: 14px;

        height: 99%;
        width: 5.5vw;

        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
`