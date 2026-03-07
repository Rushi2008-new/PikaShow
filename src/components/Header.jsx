const Header = () => {
    return (
        <header>
            <div className="header">
                <h2>PikaShow</h2>
                <nav className="nav">
                    <select>
                        <option value="">Select Language</option>
                        <option value="Hindi">Hindi</option>
                        <option value="English">English</option>
                    </select>
                    <input type="search"/>
                    <button className="login">Login</button>
                </nav>
            </div>
        </header>
    );
};
export default Header