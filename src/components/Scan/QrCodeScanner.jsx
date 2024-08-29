
import { useState } from 'react';
import s from  './QrCodeScanner.module.css'
import { QrReader } from 'react-qr-reader';
import { SCAN_DATA } from '../../contacts';
import { json } from 'react-router-dom';





export const QrCodeScanner = () => {
    const [scanned, setScanned] = useState(null);

    const scanHandler = (result) => {
        

        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');


        setScanned(result.text);

        localStorage.setItem(
            SCAN_DATA,
            JSON.stringify([...prevData, result.text])
        );
    };

    return (
        <div className={s.container}>
            <QrReader
                onResult={scanHandler}
                containerStyle={{ width: '500px', height: '300px' }}
            />
        
            <p className={s.result}>{scanned}</p>
        </div>
    );
};
