import { SidebarFooterStyled } from "./styled";
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import GradeOutlinedIcon from '@material-ui/icons/GradeOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { useState } from "react";

function SidebarFooter() {

    const [iconClick, setIconClick] = useState(1)

    const handleClick = (click) => {
        setIconClick(click)
    }


    return (
        <SidebarFooterStyled>
            <div className={`icon_container ${iconClick === 1 ? "icon_selected" : ""}`}>
                <PersonOutlineOutlinedIcon
                    onClick={() => handleClick(1)}
                />
            </div>
            
            <div className={`icon_container ${iconClick === 2 ? "icon_selected" : ""}`}>
                <PeopleAltOutlinedIcon 
                    onClick={() => handleClick(2)}
                />
            </div>

            <div className={`icon_container ${iconClick === 3 ? "icon_selected" : ""}`}>
                <GradeOutlinedIcon 
                    onClick={() => handleClick(3)}    
                />
            </div>

            <div className={`icon_container ${iconClick === 4 ? "icon_selected" : ""}`}>
                <SearchOutlinedIcon 
                    onClick={() => handleClick(4)}
                />
            </div>
        </SidebarFooterStyled>
    )
}

export default SidebarFooter