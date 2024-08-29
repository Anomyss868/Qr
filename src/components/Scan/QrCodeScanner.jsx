
import { useState } from 'react';
import s from  './QrCodeScanner.module.css'
import { QrReader } from 'react-qr-reader';
import { SCAN_DATA } from '../../contacts';
import { json } from 'react-router-dom';





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
                scanDelay={1000}
                onResult={scanHandler}
                containerStyle={{ width: '500px' }}
            />
        
            <p className={s.result}>{scanned}</p>
        </div>
    );
};
