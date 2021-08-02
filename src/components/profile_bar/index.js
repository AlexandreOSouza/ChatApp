import ProfilePicture from "../profile_picture";
import { ProfileBarStyled } from "./styled";
import prof from "../../assets/img/eu1.jpg"
import Select from 'react-select';
import chroma from 'chroma-js';
import "react-widgets/styles.css";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useState } from "react";



function ProfileBar() {

    const userName = "AlexandreSnow"

    let colors = [
        { value: 0, label: 'Working', color: '#F3BA4A'},
        { value: 1, label: 'Online', color: '#46D362'},
        { value: 2, label: 'Ofline', color: '#FD2828' },
        { value: 3, label: 'Busy', color: '#A47BD7' },
    ];

    const [statusColor, setStatusColor] = useState(colors[0]);

    function handleChange(selectedOption) {
        setStatusColor(selectedOption)
    };

    const dot = (color = '#ccc') => ({
        alignItems: 'center',
        display: 'flex',
      
        ':before': {
          backgroundColor: color,
          borderRadius: 10,
          content: '" "',
          display: 'block',
          marginRight: 8,
          height: 10,
          width: 10,
        },
    });

    const colourStyles = {
        control: styles => ({ 
            ...styles, 
            backgroundColor: '#6588DE',
            minHeight: 0,
            height: 25,
            borderRadius: 20,
        }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
          const color = chroma(data.color);
          return {
            ...styles,
            backgroundColor: isDisabled
              ? null
              : isSelected
              ? data.color
              : isFocused
              ? color.alpha(0.1).css()
              : null,
            color: isDisabled
              ? '#ccc'
              : isSelected
              ? chroma.contrast(color, 'white') > 2
                ? 'white'
                : 'black'
              : data.color,
            cursor: isDisabled ? 'not-allowed' : 'default',
      
            ':active': {
              ...styles[':active'],
              backgroundColor:
                !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
            },
          };
        },
        input: styles => ({ 
            ...styles, 
            ...dot(),
            margin: 0,
            padding: 0,
            '::before': {
                backgroundColor: 'transparent'
            }
        }),
        placeholder: styles => ({ ...styles, ...dot() }),
        singleValue: (styles, { data }) => ({
            ...styles, 
            ...dot(data.color), 
            position: 'absolute',
            color: '#F2F6F7',
            fontSize: 12,
            lineHeight: 15,
            top: 12
        }),

        indicatorSeparator: styles => ({
            ...styles, 
            display: 'none'
        }),

        indicatorContainer: styles => ({
            ...styles,
        })

    };

    return (
        <ProfileBarStyled
            width={16}
            height={10}
            backgroundColor={'#E3F6FC'}
        >
            <div className="profilePicContainer">
                <ProfilePicture 
                    imgSource={prof} 
                    width={'44px'}
                    height={'44px'}
                    statusColor={statusColor.color}
                />
            </div>
            <div className="profileInfosContainer">
                <span>{userName}</span>
                <Select
                    value={statusColor}
                    onChange={handleChange}
                    options={colors}
                    styles={colourStyles}
                />
            </div>
            <div className="profileMoreInfoContainer">
                <MoreVertIcon
                    style={{ color: '#6588DE', fontSize: 35 }}
                />
            </div>

        </ProfileBarStyled>
    )
}

export default ProfileBar;


