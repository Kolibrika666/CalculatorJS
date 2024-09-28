import React, { useCallback, useEffect } from 'react';
import './Button.css'

const ButtonResult = ({func, value, key}) => {
    
    return (
        <button
        key = {key}
        className = 'gray'
        onClick = {func}
        > {value} </button>
    );
};

export default ButtonResult;