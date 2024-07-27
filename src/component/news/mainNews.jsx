import '../../App.css';
import { news } from '../../utils/data'

const topNews = news.sort((a, b) => b.see - a.see).slice(0, 6);

function MainNews() {

    

    return (
        <div className="container">
            <div className="main_mews">
                <div className="main_mews_row">
                    {
                        topNews.map((news, index) => (
                            <div key={news.id} className="main_mews_row_col">
                                <img src={news.imageUrl} alt={news.title} className="main_mews_row_col_image" />
                                <a href='#' className='main_mews_row_col_link'>
                                    <h3 className="main_mews_row_col_title">
                                        {news.title}
                                    </h3>
                                </a>
                                <p className="main_mews_row_col_date">
                                    {news.date}
                                    <span className="main_mews_row_col_date_image">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" /></svg>
                                    </span>
                                    {news.see}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default MainNews;

