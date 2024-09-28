import React, { useEffect, useState } from 'react';
import s from "./Section.module.css"
import Monitor from './Monitor/Monitor';
import ButtonNumber from './Buttons/ButtonNumber';
import ButtonOperand from './Buttons/ButtonOperand';
import ButtonResult from './Buttons/ButtonResult';

export const res = (e) => {
        return e
}

const Section = () => {
    const [exp, setExp] = useState(0)
    const [res, setRes] = useState(0)

    const onButtonChange = (value) => {
            setExp((prev) => prev === 0 ? value : prev + value)
            setRes((prev) => prev === 0 ? value : prev + value)
    };

    const getResult = () => {
        setRes(eval(exp))
    }

    return (
        <div className = {s.section}>
            <Monitor expression={exp} result={res}/>
            <ButtonNumber key={1} value={'1'} onChange={onButtonChange}/>
            <ButtonNumber key={2} value={'2'} onChange={onButtonChange}/>
            <ButtonOperand key={3} value={'+'} onChange={onButtonChange}/>
            <ButtonResult key={4} value={'='} func={getResult} />
        </div>
    );
};

export default Section;