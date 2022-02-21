import React, {useState} from 'react';
import StyledDropdown from './Dropdown.styled';

const Dropdown = (props) => {
    const {name, value, items, onChange} = props;
    const [isActive, setIsActive] = useState(false);
    const [isFocus, setIsFocus] = useState(false);
    const [isOnMouse, setIsOnMouse] = useState(false);
       
    const handleOnBlur = () => {
        setIsFocus(false);
        isOnMouse || setIsActive(false);
    }

    const handleOnMouseLeave = () => {
        setIsOnMouse(false);
        isFocus || setIsActive(false)
    } 

    return(
        <StyledDropdown active={isActive} onClick={()=>setIsActive(!isActive)}>
            <input className="form__value" value={value || ""} name={name}  onFocus={()=> {
                setIsFocus(true)}} onBlur={handleOnBlur} readOnly={true}/>
                <label className="form__label"></label> 
                <ul className="list" onMouseOver={()=>setIsOnMouse(true)} onMouseLeave={handleOnMouseLeave} >
                    {items.map(el=><li className="curr" key={el.code} data-code={el.code} name={name} onClick={onChange}>{el.code}: {el.name}</li>)} 
                </ul>
        </StyledDropdown>
    )
}

export default Dropdown;



