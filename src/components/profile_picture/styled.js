import styled from 'styled-components'

export const ProfilePictureStyled = styled.div`
    width: ${(props)=> props.width};
    height: ${(props) => props.height};

    border: 2px solid ${(props) => props.statusColor};
    border-radius: 25px;

    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    img {
        position: absolute;
        height: 100%;
        width: 100%;
        border-radius: 25px;
    }
    
    .statusCircle {
        display: ${props => props.hasStatusVisible ? 'block' : 'none'};
        position: absolute;
        width: 10px;
        height: 10px;
        background: ${(props) => props.statusCircleColor};
        border-radius: 10px;
        margin-left: 80%;
        // margin-top: -5vh;
        border: 1px solid #F2F6F7;
    }

`
