import styled from 'styled-components'

export const SidebarFooterStyled = styled.div`
    padding: 0;
    width: 100%;
    height: 10%;
    
    border-top: 1px solid rgba(175, 188, 198, 0.5);

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    .icon_container {
        font-size: 30px;
        color: rgba(175,188,198,0.5);
        height: 96%;
        display: flex;
        align-items: center;
        width: 14%;
        justify-content: center;
        flex-direction: column;
    }

    .icon_container svg {
        cursor: pointer;
    }

    .icon_selected {
        color: #6588DE;
    }
    .icon_selected:after {
        content: "";
        width: 15%;
        height: 8px;
        background: #6588DE;
        position: absolute;
        margin-top: 22%;
        border-radius: 10px;
    }
`