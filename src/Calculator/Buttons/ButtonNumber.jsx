import React, { useCallback, useEffect } from 'react';
import './Button.css'

const ButtonNumber = ({onChange, value, key}) => {

    const getValue = useCallback(() => {
        onChange(value)
    },[])

    return (
        <button
        key = {key}
        className = 'white'
        onClick = {getValue}
        > {value} </button>
    );
};

export default ButtonNumber;