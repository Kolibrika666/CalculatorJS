import React, { useEffect, useState } from 'react';
import s from "./Section.module.css"
import Monitor from './Monitor/Monitor';
import ButtonNumber from './Buttons/ButtonNumber';
import ButtonOperand from './Buttons/ButtonOperand';
import ButtonResult from './Buttons/ButtonResult';
import { numbers, operand } from './modal';

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

    const inverse = () => {

    }
    const clearAll = () => {

    }

    const clear = () => {

    }

    return (
        <div className = {s.section}>
            <Monitor expression={exp} result={res}/>
            <div className={s.flex}>
                <div>
                    <ButtonResult key={10} value={'+/-'} func={inverse}/>
                    <ButtonResult key={11} value={'C'} func={clearAll}/>
                    <ButtonResult key={12} value= '&larr;' func={clear}/> 
                    {numbers.map((e) =>
                        <ButtonNumber key={e} value={e} onChange={onButtonChange}/>
                    )}
                </div>
                <div>
                    {operand.map((e) => 
                        <ButtonOperand key={e.id} value={e.content} onChange={onButtonChange}/>
                     )}
                    <ButtonResult key={4} value={'='} func={getResult} className={'orange'}/>
                </div> 
                </div>
        </div>
    );
};

export default Section;