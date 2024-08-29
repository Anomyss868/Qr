import { Routes, Route} from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation.jsx';
import { QrCodeGenerator } from './components/Generate/QrCodeGenerator.jsx';
import { QrCodeScanner } from './components/Scan/QrCodeScanner.jsx';
import { GenerateHistory } from './components/GenerateHistory.jsx';
import { ScanHistory } from './components/ScanHistory.jsx';

const Layout = () => {
    return (
        <div>
            <Navigation />

            

            {/* <QrCodeGenerator /> */}

            {/* <QrCodeScanner /> */}

      <Routes>
          <Route path="/Qr/generate" element={<QrCodeGenerator />} />
          <Route path="/Qr/scan" element={<QrCodeScanner />} />
          <Route path="/Qr/generateHistory" element={< GenerateHistory/>} />
          <Route path="/scanHistory" element={<ScanHistory />} />
      </Routes>
        </div>
    );
};

export { Layout };