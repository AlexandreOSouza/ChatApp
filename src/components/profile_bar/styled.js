import styled from 'styled-components'

export const ProfileBarStyled = styled.div`
    position: absolute;
    width: ${(props) => props.width}vw;
    height: ${(props) => props.height}vh;
    background-color: ${(props) => props.backgroundColor};
    border-radius: 0px 0px 14px 14px;

    display: flex;
    flex-direction: row;
    align-items: stretch;

    padding-top: 3vh;
    padding-left: 1.5vw;

    .profileInfosContainer {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 21px;
        /* identical to box height */

        color: #52585D;

        margin-left: 1vw;
        width: 7vw;

    }

    .profileMoreInfoContainer {
        margin-left: auto;
    }

    .profileMoreInfoContainer svg {
        cursor: pointer;
    }

    .css-tlfecz-indicatorContainer {
        margin-right: 6px;
        padding: 0;
    }

`