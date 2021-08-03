import { UserListItemStyled } from "./styled";
import prof from "../../assets/img/eu1.jpg"
import ProfilePicture from "../profile_picture";
import { format } from 'date-fns'
import { api } from '../../service/api'

async function teste() {
    const data = await api.get("chats")

    alert(data)
}

function UserListItem() {

    const userName = 'AlexandreSnow'
    const lastMessage = 'vai se fuderr'

    const currDate = format(new Date(), 'MM/dd/yyyy')
    teste()
    return (
        <UserListItemStyled>
            <div className="profilePicContainer">
                <ProfilePicture 
                    imgSource={prof} 
                    width={'44px'}
                    height={'44px'}
                    statusColor={'red'}
                />
            </div>
            <div className="profileInfosContainer">
                <span>{userName}</span>
                <span>{lastMessage}</span>
            </div>
            <div className="profileMoreInfoContainer">
                <span>{currDate}</span>
            </div>
        </UserListItemStyled>
    )
}

export default UserListItem