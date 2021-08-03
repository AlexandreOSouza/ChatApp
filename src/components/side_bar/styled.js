import styled from 'styled-components'

export const SideBarStyled = styled.div`

    padding: 0;
    width: ${(props) => props.width}vw;
    height: -webkit-fill-available;
    background: ${(props) => props.backgroundColor};

    position: absolute;
    margin-top: 14vh;

    border-radius: 14px 14px 0px 0px;

    display: flex;
    flex-direction: column;

    .sidebar_list {
        padding: 0;
        margin-top: 2vh;
        width: 100%;
        height: -webkit-fill-available;

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .sidebar_footer {
        padding: 0;
        width: 94%;
        height: 10%;
        margin-left: 0.5vw;
    }

`