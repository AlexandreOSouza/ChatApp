import styled from 'styled-components'

export const ChatOptionStyled = styled.div`
    
    --primary-color: #6588DE;
    --secondary-color: #6588DE;
    

    // .container {
    //     position: absolute;
    //     left: 0;
    //     top: 0;
    //     right: 0;
    //     bottom: 0;
    //     display: flex;
    //     align-items: center;
    //     justify-content: center;
    // }

    .tabs {
        display: flex;
        position: relative;
        background-color: #fff;
        padding: 0.75rem;
        border-radius: 99px; // just a high number to create pill effect
        * {
            z-index: 2;
        }
    }   

    input[type="radio"] {
        display: none;
    }

    .tab {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        width: 130px;
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
        cursor: pointer;
        transition: color 0.15s ease-in;
        box-shadow: 0px 0px 25px -9px rgba(0,0,0,0.51);
        color: #52585E;
    }

    .b2 {
        border-top-right-radius: 14px;
        border-bottom-right-radius: 14px;
    }

    .b1 {
        border-top-left-radius: 14px;
        border-bottom-left-radius: 14px;
    }

    .glider {
        position: absolute;
        display: flex;
        height: 40px;
        width: 130px;
        background-color: var(--secondary-color);
        z-index: 1;
        border-radius: 14px;
        transition: 0.25s ease-out;
    }

    input[id="radio-1"]:checked + label {
        color: #FDFDFE;
    }

    input[id="radio-1"]:checked ~ .glider {
        transform: translateX(0);
    }

    input[id="radio-2"]:checked + label {
        color: #FDFDFE;
    }

    input[id="radio-2"]:checked ~ .glider {
            transform: translateX(100%);
    }



`