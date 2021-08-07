import ChatOption from "../chat_option"
import ChatTextInput from "../chat_text_input"
import { MainChatStyled } from "./styled"

function MainChat() {
    return (
        <MainChatStyled>
            <ChatOption />
            <ChatTextInput />
        </MainChatStyled>
    )
}

export default MainChat