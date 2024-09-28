import React from 'react';
import s from "./Monitor.module.css"

const Monitor = ({expression, result}) => {
    return (
        <div className={s.monitor}>
        <p>{expression}</p>
        <p>{result}</p>
        </div>
    );
};

export default Monitor;