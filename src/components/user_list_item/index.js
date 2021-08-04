import { UserListItemStyled } from "./styled";
import ProfilePicture from "../profile_picture";
import { format } from 'date-fns'
import { api } from '../../service/api'
import React, { useEffect, useState } from "react";

function UserListItem() {

    const [chats, setChats] = useState([]);
    const [selectedChat, setSelectedChat] = useState(6)

    useEffect(() => {
        api
          .get("server.json")
          .then((response) => setChats(response.data.chats))
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
    }, []);

    const handleClickChat = (id) => {
        setSelectedChat(id)
    }

    return (
        <>
            {chats.slice(0, 5).map((chat, index) => {
                return (
                    <UserListItemStyled 
                        key={chat.id}
                        isSelected={selectedChat === chat.id}    
                        onClick={() => handleClickChat(chat.id)}
                    >
                        <div className="profilePicContainer">
                            <ProfilePicture 
                                imgSource={chat.profilePic} 
                                width={'44px'}
                                height={'44px'}
                                statusColor={'red'}
                                hasStatusVisible={true}
                                currentStatus={chat.currentStatus}
                            />
                        </div>
                        <div className="profileInfosContainer">
                            <span>{chat.userName}</span>
                            <span>{chat.lastMessage}</span>
                        </div>
                        <div className="profileMoreInfoContainer">
                            <span>{format(new Date(chat.sendAt), 'MM/dd/yyyy')}</span>
                        </div>
                    </UserListItemStyled>
                )
            })}
        </>
    )
}

export default UserListItem