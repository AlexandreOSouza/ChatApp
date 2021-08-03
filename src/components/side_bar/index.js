import UserListItem from "../user_list_item";
import { SideBarStyled } from "./styled";


function SideBar() {
    return (
        <SideBarStyled
            width={17.5}
            backgroundColor={'#E3F6FC'}
        >
            <div className="sidebar_list">
                <UserListItem/>
            </div>
            <div className="sidebar_footer">

            </div>
        </SideBarStyled>
    )
}

export default SideBar