import { ProfilePictureStyled } from "./styled"

function ProfilePicture(props) {

    let currentStatus = props.currentStatus

    let statusCircleColor = ""

    if (currentStatus === -1) {
        statusCircleColor = "#FD2828"
    } else if (currentStatus === 0) {
        statusCircleColor = "#F3BA4A"
    } else if (currentStatus === 1) {
        statusCircleColor = "#46D362"
    }

    return (
        <ProfilePictureStyled
            width={props.width}
            height={props.height}
            statusColor={props.statusColor}
            hasStatusVisible={props.hasStatusVisible}
            statusCircleColor={statusCircleColor}
        >
            <img src={props.imgSource} alt="imageSource"/>
            <div className="statusCircle"/>
            
        </ProfilePictureStyled>
    )
}

export default ProfilePicture