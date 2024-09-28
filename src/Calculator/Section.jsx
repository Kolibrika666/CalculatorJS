import React, { useEffect, useState } from 'react';
import s from "./Section.module.css"
import Monitor from './Monitor/Monitor';
import ButtonNumber from './Buttons/ButtonNumber';

export const res = (e) => {
        return e
}




const Section = () => {
    const [exp, setExp] = useState('2+3')
    const [res, setRes] = useState('5')

    const onButtonChange = (value) => {
        setExp(value)
    };

    return (
        <div className = {s.section}>
            <Monitor expression={exp} result={res}/>
            <ButtonNumber key={1} value={1} onChange={onButtonChange}/>
            <ButtonNumber key={2} value={2} onChange={onButtonChange}/>
        </div>
    );
};

export default Section;