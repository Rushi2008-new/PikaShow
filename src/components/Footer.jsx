const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h2>Watch With Us</h2>
                <p>Stream unlimited movies & shows anytime, anywhere.</p>

                <div className="footer-links">
                    <a href="#">Home</a>
                    <a href="/movies/now_playing">Movies</a>
                    <a href="#">TV Shows</a>
                    <a href="#">Contact</a>
                </div>

                <p className="copyright">
                    © {new Date().getFullYear()} WatchWithUs. All Rights Reserved.
                </p>
            </div>
        </footer>
    )
};
export default Footer;