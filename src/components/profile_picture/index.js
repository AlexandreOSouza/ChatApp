import { ProfilePictureStyled } from "./styled"

function ProfilePicture(props) {

    return (
        <ProfilePictureStyled
            width={props.width}
            height={props.height}
            statusColor={props.statusColor}
        >
            <img src={props.imgSource} alt="imageSource"/>
        </ProfilePictureStyled>
    )
}

export default ProfilePicture