import { Link } from "react-router-dom"
import s from './Nav.module.css'
export const Navigation = () => {
    return (
        <nav className={s.container}>
            <Link to="/Qr/generate">Генерировать QR код</Link>
            <Link to="/Qr/scan">Сканировать QR код</Link>
            <Link to="/Qr/generateHistory">История генерирования</Link>
            <Link to="/Qr/scanHistory">История сканирования</Link>
        </nav>
    )
}