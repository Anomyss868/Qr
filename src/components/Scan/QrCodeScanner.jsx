
import { useState } from 'react';
import s from  './QrCodeScanner.module.css'
import { QrReader } from 'react-qr-reader';
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

<QrReader
        onResult={(result, error) => {
          console.log(result)
        }}
       containerStyle={{ width: '500px', height: '300px' }}
      />
            
            
            <p className={s.result}></p>   
        </div>
    )
}
