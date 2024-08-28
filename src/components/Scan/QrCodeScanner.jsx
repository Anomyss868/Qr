import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
import s from  './QrCodeScanner.module.css'

import { SCAN_DATA } from '../../contacts';
import { json } from 'react-router-dom';


export const QrCodeScanner = () => {
     const [scanned, setScanned] = useState(null);

    const scanHandler = (result) => {
        setScanned(result[0].rawValue)

        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

       
        localStorage.setItem(
          SCAN_DATA, 
          JSON.stringify([...prevData, result[0].rawValue]))
    };




    return (
        <div className={s.container}>
            <p>{scanned}</p>
              <Scanner 
              onScan={scanHandler} 
              components={{
                audio: false,
                finder: false,
              }} 
              styles={{
                container: { width: 200 }
              }}
              />
        </div>
    )
}