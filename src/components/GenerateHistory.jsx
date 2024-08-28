import { QRCodeSVG } from 'qrcode.react';
import { GENERATE_DATA } from '../contacts';

export const GenerateHistory = () => {

    const dame = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

    console.log(dame)
   
    return (


        
        <div>

          

        {dame.map((text) => (
                <p key={text}>
                {text}
                <QRCodeSVG value={text} size={200} />
                </p>
        ))}

        

        </div>

        
    )
}