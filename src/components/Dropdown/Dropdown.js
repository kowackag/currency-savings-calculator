import React, {useState} from 'react';
import StyledDropdown from './Dropdown.styled';

const Dropdown = (props) => {
    const {name, value, items, id, onChange} = props;
    const [isActive, setIsActive] = useState(false);
    const [isFocus, setIsFocus] = useState(false);
    const [isOnMouse, setIsOnMouse] = useState(false);
    
    const copyItems = items.filter(el=>el.includes(value));

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
                setIsFocus(true)}} onBlur={handleOnBlur} />
                <label className="form__label"></label> 
                <ul className="list" onMouseOver={()=>setIsOnMouse(true)} onMouseLeave={handleOnMouseLeave}>
                    {copyItems.map(el=><li className="ingred" key={el} onClick={onChoose} value={el} name={name}>{el}</li>)} 
                </ul>
        </StyledDropdown>
    )


    // const {name, value, items, onChoose, onChange, isMutable} = props;
    // const [isActive, setIsActive] = useState(false);
    // const [isFocus, setIsFocus] = useState(false);
    // const [isOnMouse, setIsOnMouse] = useState(false);
    
    // const copyItems = isMutable ? items.filter(el=>el.includes(value)) : items;

    // const handleOnBlur = () => {
    //     setIsFocus(false);
    //     isOnMouse || setIsActive(false);
    // }

    // const handleOnMouseLeave = () => {
    //     setIsOnMouse(false);
    //     isFocus || setIsActive(false)
    // } 

    // return(
    //     <StyledDropdown active={isActive} onClick={()=>setIsActive(!isActive)}>
    //         <input className="form__value" value={value || ""} name={name}  onFocus={()=> {
    //             setIsFocus(true)}} onBlur={handleOnBlur} onChange={isMutable ? onChange:null} readOnly={isMutable ? false: true}/>
    //             <label className="form__label"></label> 
    //             <ul className="list" onMouseOver={()=>setIsOnMouse(true)} onMouseLeave={handleOnMouseLeave}>
    //                 {copyItems.map(el=><li className="ingred" key={el} onClick={onChoose} value={el} name={name}>{el}</li>)} 
    //             </ul>
    //     </StyledDropdown>
    // )














}

export default Dropdown;



