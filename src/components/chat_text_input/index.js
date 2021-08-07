import { ChatTextInputStyled } from "./styled";

import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MicNoneIcon from '@material-ui/icons/MicNone';
import SendIcon from '@material-ui/icons/Send';

function ChatTextInput() {

    const handleSettingsClick = () => {
        alert("You just click on settings")
    }

    const handleAttachFileIconClick = () => {
        alert("You just click on Attach File")
    }

    const handleMicIconClick = () => {
        alert("You just click on Mic")
    }

    const handleSendMessageClick = () => {
        alert("You just send a message")
    }

    return (
        <ChatTextInputStyled>
            <MoreVertIcon className="pointer" onClick={handleSettingsClick}/>
            <div className="input-container">
                <AttachFileIcon className="attach-file pointer" onClick={handleAttachFileIconClick} />
                <MicNoneIcon className="mic pointer" onClick={handleMicIconClick} />
                <input type="text" placeholder="Type a new message..." className="input-text" />
                <button className="send pointer" onClick={handleSendMessageClick}>Send<SendIcon/></button>
            </div>
        </ChatTextInputStyled>
    )
}

export default ChatTextInput