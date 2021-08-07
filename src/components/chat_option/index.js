import { useState } from "react"
import { ChatOptionStyled } from "./styled"

function ChatOption() {

    const [selectedOption, setSelectedOption] = useState(0)

    const handleSelectiondOption = (op) => {
        setSelectedOption(op)
    }

    return (
        <ChatOptionStyled>
            <div className="container">
                <div className="tabs">
                    <input type="radio" id="radio-1" name="tabs" onClick={() => handleSelectiondOption(0)} />
                    <label className="tab b1" htmlFor="radio-1">Chat</label>
                    <input type="radio" id="radio-2" name="tabs" onClick={() => handleSelectiondOption(1)} />
                    <label className="tab b2" htmlFor="radio-2">Media</label>
                    <span className="glider"></span>
                </div>
            </div>
        </ChatOptionStyled>
    )
}

export default ChatOption