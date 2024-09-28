import React, { useCallback, useEffect } from 'react';
import './Button.css'
import { res } from '../Section';

const ButtonOperand = ({onChange, value, key}) => {
    
    const getValue = useCallback(() => {
        onChange(value)
    },[])

    return (
        <button
        key = {key}
        className='white_btn'
        onClick={getValue}
        >{value}</button>
    );
};

export default ButtonOperand;