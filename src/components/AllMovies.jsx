import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { options, url } from "../data";
import LanguageContext from "../contexts/LanguageContext";

const AllMovies = () => {
    const navigate = useNavigate();
    const { language } = useContext(LanguageContext);

    const [nowPlaying, setNowPlaying] = useState([]);
    const [popular, setPopular] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [upcoming, setUpcoming] = useState([]);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchAllMovies = async () => {
        try {
            setLoading(true);
            setError('');

            const [nowPlayingRes, popularRes, topRatedRes, upcomingRes] =
                await Promise.all([
                    fetch(`${url}now_playing`, options),
                    fetch(`${url}popular`, options),
                    fetch(`${url}top_rated`, options),
                    fetch(`${url}upcoming`, options),
                ]);
            const nowPlayingData = await nowPlayingRes.json();
            const popularData = await popularRes.json();
            const topRatedData = await topRatedRes.json();
            const upcomingData = await upcomingRes.json();

            setNowPlaying(nowPlayingData.results);
            setPopular(popularData.results);
            setTopRated(topRatedData.results);
            setUpcoming(upcomingData.results);
        } catch (err) {
            setError(
                <div className='error-msg'>
                    <img src='https://cdn-icons-png.flaticon.com/128/16490/16490899.png' />
                    <p className='error-text'>Unable to fetch data</p>
                </div>
            )
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAllMovies();
    }, []);

    const renderMovies = (movies) => {
        return (
            <div className="row-container">
                {movies?.map((m) => (
                    <div key={m?.id} className="row-card">
                        <Link to={`/movie/${m?.id}`}>
                            <img src={`https://image.tmdb.org/t/p/w500${m?.poster_path}`}
                                alt={m?.title} />
                        </Link>
                    </div>

                )
                )
                }
            </div>
        );
    };
 
    return (
        <div className="all-movies-page">
            {/*Header*/}
         <div className="mp-header">
        <h2 className="logo" onClick={() => navigate('/')}>
          {language === 'Hindi' ? 'पिकाशो' : 'PikaShow'}
        </h2>
       
    
        <input type='button' className="back-btn" onClick={() => navigate('/')}
         value =  {language === 'Hindi' ? '← होम पर वापस जाएं' : '← Back'}/>
        
      </div>
           {loading && <p className="loader-text">PikaShow</p>}
           {error && <div>{error}</div>}

           {!loading && !error && (
            <>
            <section>
                <h2 className="section-title">
                    {language === 'Hindi' ? 'अब चल रही फिल्में' : 'Now Playing |'}
                </h2>
                {renderMovies(nowPlaying)}
            </section>

            <section>
                <h2 className="section-title">
                   {language === 'Hindi' ? 'लोकप्रिय फिल्में' : 'Popular |'}
                </h2>
                {renderMovies(popular)}
            </section>

            <section>
                <h2 className="section-title">
                    {language === 'Hindi' ? 'टॉप रेटेड' : 'Top Rated |'}
                </h2>
                {renderMovies(topRated)}
            </section>

            <section>
                <h2 className="section-title">
                      {language === 'Hindi' ? 'आने वाली फिल्में' : 'Upcoming |'}
                </h2>
                {renderMovies(upcoming)}
            </section>
            </>
           )}
        </div>
    )
}

export default AllMovies;