import React, { useEffect, useState } from 'react';
import s from "./Section.module.css"
import Monitor from './Monitor/Monitor';
import ButtonNumber from './Buttons/ButtonNumber';
import ButtonOperand from './Buttons/ButtonOperand';
import ButtonResult from './Buttons/ButtonResult';
import { numbers, operand, original } from './models';

const Section = () => {
    const [exp, setExp] = useState('0')
    const [res, setRes] = useState('0')

    const onNumberChange = (value) => {
        setExp((prev) => prev === '0' ? value : prev + value)
        setRes((prev) => prev === '0' ? value : prev + value)
    };

    const onOperandChange = (value) => {
        setExp((prev) => original.some((e) => e == prev.slice(-1)) ? prev.slice(0,-1) + value : prev + value)
        setRes((prev) => original.some((e) => e == prev.slice(-1)) ? prev.slice(0,-1) + value : prev + value)
    };

    const getResult = () => {
        setRes(eval(exp))
    }

    const onInverse = () => {
        setExp((prev) => "-" == prev.slice(0, 1) ? prev.slice(1) : "-" + prev)
        setRes((prev) => "-" == prev.slice(0, 1) ? prev.slice(1) : "-" + prev)
    }
    const onResetAll = () => {
        setExp('0')
        setRes('0')
    }

    const onReset = () => {
        let s = exp.slice(0,-1)
        if (s.length > 0) {
            setExp(s)
            setRes(s)
        } else {
            setExp('0')
            setRes('0')
        }
    }

    return (
        <div className = {s.section}>
            <Monitor expression={exp} result={res}/>
            <div className={s.flex}>
                <div>
                    <ButtonResult key={10} value={'+/-'} func={onInverse}/>
                    <ButtonResult key={11} value={'C'} func={onResetAll}/>
                    <ButtonResult key={12} value= '&larr;' func={onReset}/> 
                    {numbers.map((e) =>
                        <ButtonNumber key={e.id} value={e.content} onChange={onNumberChange}/>
                    )}
                </div>
                <div>
                    {operand.map((e) => 
                        <ButtonOperand key={e.id} value={e.content} onChange={onOperandChange}/>
                     )}
                    <ButtonResult key={13} value={'='} func={getResult}/>
                </div> 
                </div>
        </div>
    );
};

export default Section;