import styled from 'styled-components'

export const UserListItemStyled = styled.div`
    background: #6588DE;
    width: 90%;
    height: 10%;

    box-shadow: 0px 8px 40px rgba(0, 72, 251, 0.3);
    border-radius: 14px;

    display: flex;
    align-items: center;

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

        color: #52585D;

        margin-left: 1vw;
        width: 7vw;
        height: 100%;

        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    // IF IS SELECTED
    .profileInfosContainer span:first-child {
        color: #F2F6F7;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
    }

    .profileInfosContainer span:last-child {
        color: #F2F6F7;
        font-style: normal;
        font-weight: 300;
        font-size: 10px;
        line-height: 15px;
    }

    .profileMoreInfoContainer {
        color: #FDFDFE;
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