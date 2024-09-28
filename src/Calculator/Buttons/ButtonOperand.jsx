import React, { useCallback, useEffect } from 'react';
import './Button.css'

const ButtonOperand = ({onChange, value, key}) => {
    
    const getValue = useCallback(() => {
        onChange(value)
    },[])

    return (
        <button
        key = {key}
        className ='orange'
        onClick = {getValue}
        > {value} </button>
    );
};

export default ButtonOperand;