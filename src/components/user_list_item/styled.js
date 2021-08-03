import styled from 'styled-components'

export const UserListItemStyled = styled.div`
    background: ${props => props.isSelected ? '#6588DE' : '#E3F6FC'};
    width: 90%;
    height: 10%;

    box-shadow: ${props => props.isSelected ? '0px 8px 20px rgba(0, 72, 251, 0.3)' : ''};
    border-radius: 14px;

    display: flex;
    align-items: center;


    cursor: pointer;

    margin-bottom: 2.5vh;

    .profilePicContainer {
        margin-left: 0.8vw;
    }

    .profileInfosContainer {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 21px;
        /* identical to box height */

        color: ${props => props.isSelected ? ' #FDFDFE' : '#52585D'};

        margin-left: 1vw;
        width: 7vw;
        height: 100%;

        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    .profileInfosContainer span:first-child {
        color: ${props => props.isSelected ? ' #FDFDFE' : '#52585D'};;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
    }

    .profileInfosContainer span:last-child {
        color: ${props => props.isSelected ? ' #F2F6F7' : '#52585D'};
        font-style: normal;
        font-weight: 300;
        font-size: 10px;
        line-height: 15px;
    }

    .profileMoreInfoContainer {
        color: ${props => props.isSelected ? ' #F2F6F7' : '#52585D'};
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        line-height: 12px;

        display: flex;
        height: 38%;
        margin-left: 1vw;
        
    }
`

