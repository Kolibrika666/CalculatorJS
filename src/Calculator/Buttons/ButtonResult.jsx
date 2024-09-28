import React, { useCallback, useEffect } from 'react';
import './Button.css'
import { res } from '../Section';

const ButtonResult = ({func, value, key}) => {
    
    return (
        <button
        key = {key}
        className='white_btn'
        onClick={func}
        >{value}</button>
    );
};

export default ButtonResult;