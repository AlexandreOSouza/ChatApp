import styled from 'styled-components'

export const ProfilePictureStyled = styled.div`
    width: ${(props)=> props.width};
    height: ${(props) => props.height};

    border: 2px solid ${(props) => props.statusColor};
    border-radius: 25px;

    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    img {
        height: 100%;
        width: 100%;
        border-radius: 25px;
    }

`
