import React from 'react';
import { numberBtn } from './model';
import ButtonNumber from './ButtonNumber';

const ButtonBody = () => {

    const onClickNumber = (content) => { console.log(content)}

    return (
        
        <div className='calculator__Body'>
        <div className='input__body'></div>
        <div className='btns__gray'></div>
        <div className='btns__white'>
        {numberBtn.map((e)=> 
            <ButtonNumber content={e.content}/>
        )}
        </div>
        <div className='btns__gray'></div>
        </div>
    );
};

export default ButtonBody;