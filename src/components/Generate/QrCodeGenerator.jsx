import { useState } from 'react'
import { QRCodeSVG } from 'qrcode.react';

import { GENERATE_DATA } from '../../contacts';

import s from './qrCodeGenerator.module.css'

export const QrCodeGenerator = () => {
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    const onClickHandler = () => {

        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

       
        localStorage.setItem(
          GENERATE_DATA, 
          JSON.stringify([...prevData, value]))
    
        setResult(value);
        setValue('');
    };

    const onChangeHandler = (event) => {
       setValue(event.target.value);
       setResult('');
    }

  

    return (
        <div className={s.Container}>
            
             
             <input 
             type="text" 
             value={value} 
             placeholder='Введите текст...'
             onChange={onChangeHandler} 
             className={s.input}/>
             
             <button className={s.btn}  type='button' onClick={onClickHandler}>
                Сгенерировать QR
             </button>

            <div className={s.qr}>
            {result !== '' && (
                <QRCodeSVG value={value} size={200}
            />)}
            </div>
            
        </div>
    );
};


