import styled from 'styled-components'

export const SideBarStyled = styled.div`

    padding: 0;
    width: ${(props) => props.width}vw;
    height: -webkit-fill-available;
    background: ${(props) => props.backgroundColor};

    position: absolute;
    margin-top: 14vh;

    border-radius: 14px 14px 0px 0px;

`