import React, {useState} from 'react';

export default function NumberButtons() {
    // const [press, setPress] = useState(false);

    return (
        <div className='buttons'>
            <div className='number'>1</div>
            <div className='number'>2</div>
            <div className='number'>3</div>
            <div className='number'>4</div>
            <div className='number'>5</div>
            <div className='number'>6</div>
            <div className='number'>7</div>
            <div className='number'>8</div>
            <div className='number'>9</div>
            <div className='number-0'>0</div>
        </div>
    );
}