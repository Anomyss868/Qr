import { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import s from './QrCodeScanner.module.css';
import { json } from 'react-router-dom';
import { SCAN_DATA } from '../../contacts';



export const QrCodeScanner = () => {
    const [scanned, setScanned] = useState(null);

    const scanHandler = (result) => {
        if (!result) return;

        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

        if (prevData.includes(result.text)) return;

        setScanned(result.text);

        localStorage.setItem(
            SCAN_DATA,
            JSON.stringify([...prevData, result.text])
        );
    };
    
    return (
        <div className={s.container}>
            <QrReader
              constraints={{ facingMode: 'environment' }}
              scanDelay={500}
              onResult={scanHandler}
              containerStyle={{ width: '500px' }}
            />
        
            <p className={s.result}>{scanned}</p>
        </div>
    );
};
