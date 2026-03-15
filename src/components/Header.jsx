import { Link } from "react-router-dom";
import { useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext';

const Header = () => {
    const {language, setLanguage}  = useContext(LanguageContext);
    return (
        <header>
            <div className="header">
                <h2>{language === 'Hindi' ? 'पिकाशो' : 'PikaShow'}</h2>
                <nav className="nav">
                    <select value={language} onChange={(e)=>setLanguage(e.target.value)}>
                        <option value=""> {language === 'Hindi' ? 'भाषा चुनें' : 'Select Language'}</option>
                        <option value="English">English</option>
                        <option value="Hindi">हिंदी</option>
                    </select>
                    <Link to={`/login`} className="login">Login</Link>
                </nav>
            </div>
        </header>
    );
};
export default Header;