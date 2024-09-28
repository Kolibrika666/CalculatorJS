import React, { useState } from 'react';
import s from "./Section.module.css"
import Monitor from './Monitor/Monitor';

const Section = () => {
    const [exp, setExp] = useState('2+3')
    const [res, setRes] = useState('5')
    return (
        <div className = {s.section}>
            <Monitor expression={exp} result={res}/>
        </div>
    );
};

export default Section;