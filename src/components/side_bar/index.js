import UserListItem from "../user_list_item";
import { SideBarStyled } from "./styled";
import SidebarFooter from "../side_bar_footer";

function SideBar() {
    return (
        <SideBarStyled
            width={17.5}
            backgroundColor={'#E3F6FC'}
        >
            <div className="sidebar_list">
                <UserListItem/>
            </div>
            <SidebarFooter/>
        </SideBarStyled>
    )
}

export default SideBar