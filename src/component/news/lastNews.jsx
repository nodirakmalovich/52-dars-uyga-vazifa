import { useState } from "react";
import "../../App.css";

import { news } from "../../utils/data";

const topNews = news.sort((a, b) => b.see - a.see).slice(0, 6);

function LatesNews() {
  const [data, setData] = useState(news);

  console.log("Last news has been rendered !!!");

  const handleClick = () => {
    const newData = {
      id: 1,
      category: "Test",
      title: "Test",
      newsText: "Test",
      imageUrl:
        "https://yuz.uz/imageproxy/1200x/https://yuz.uz/file/news/f146c36f2289787f79e9184fcda95e91.jpg",
      date: "Test date",
      see: 125,
    };

    const cloneData = [...data];
    cloneData.push(newData);
    setData(cloneData);
  };

  return (
    <div className="container">
      <div className="latest_news">
        <div className="latest_news_row">
          <div className="latest_news_row_left">
            <h1 className="latest_news_row_left_title">Сўнгги янгиликлар</h1>
            {data.map((item, index) => (
              <div
                onClick={() => handleClick()}
                key={index}
                className="latest_news_row_left_col"
              >
                <div className="latest_news_row_left_col_image">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="latest_news_row_left_col_image_img"
                  />
                </div>
                <div className="latest_news_row_left_col_text">
                  <a href="#" className="latest_news_row_left_col_text_link">
                    <h2 className="latest_news_row_left_col_text_link_title">
                      {item.newsText}
                    </h2>
                  </a>
                  <p className="main_mews_row_col_date main_date">
                    {item.date}
                    <span className="main_mews_row_col_date_image">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e8eaed"
                      >
                        <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
                      </svg>
                    </span>
                    {item.see}
                  </p>
                </div>
              </div>
            ))}
            <button className="latest_news_row_left_all_news">
              Кўпроқ янгиликлар
            </button>
          </div>

          <div className="latest_news_row_left_right">
            <h1 className="latest_news_row_left_title">
              Энг оммабоп янгиликлар
            </h1>
            <div className="latest_news_row_left_right_row">
              {topNews.map((news, index) => (
                <div key={index} className="latest_news_row_left_right_row_col">
                  <p className="latest_news_row_left_right_row_col_title">
                    {news.newsText}
                  </p>
                  <p className="main_mews_row_col_date">
                    {news.date}
                    <span className="main_mews_row_col_date_image">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e8eaed"
                      >
                        <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
                      </svg>
                    </span>
                    {news.see}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatesNews;
