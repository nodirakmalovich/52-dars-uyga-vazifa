import '../../App.css';

const news = [
    {
        id: 1,
        category: "Jamiyat",
        title: "Yangi maktablar ochildi",
        newsText: "Bugun Toshkent shahrida bir nechta yangi maktablar ochildi.",
        imageUrl: "https://yuz.uz/imageproxy/1200x/https://yuz.uz/file/news/f146c36f2289787f79e9184fcda95e91.jpg",
        date: "2024-07-27",
        see: 125
    },
    {
        id: 2,
        category: "Iqtisod",
        title: "O'zbekiston iqtisodi o'sishda davom etmoqda",
        newsText: "O'zbekiston iqtisodiyoti 2024-yilda ham yuqori o'sishni davom ettirmoqda.",
        imageUrl: "https://daryo.uz/static/2023/12/658531c77b60f.jpg",
        date: "2024-07-26",
        see: 210
    },
    {
        id: 3,
        category: "Sport",
        title: "O'zbekiston futbol jamoasi g'alaba qozondi",
        newsText: "O'zbekiston futbol jamoasi navbatdagi o'yinda g'alaba qozondi.",
        imageUrl: "https://daryo.uz/static/2024/01/65a94fc06110a.jpg",
        date: "2024-07-25",
        see: 340
    },
    {
        id: 4,
        category: "Madaniyat",
        title: "Teatrda yangi spektakl premyerasi",
        newsText: "Toshkentda yangi spektaklning premyerasi bo'lib o'tdi.",
        imageUrl: "https://daryo.uz/cache/2017/05/medium-11-4-640x432-640x432.jpg",
        date: "2024-07-24",
        see: 180
    },
    {
        id: 5,
        category: "Texnologiya",
        title: "Yangi smartfon taqdim etildi",
        newsText: "O'zbekistonda yangi zamonaviy smartfon taqdim etildi.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ4bT0xl2JgBMKxJcBMQycFS_MMgbJEV7Isg&s",
        date: "2024-07-23",
        see: 290
    },
    {
        id: 6,
        category: "Siyosat",
        title: "Prezident yangi farmon imzoladi",
        newsText: "O'zbekiston prezidenti yangi farmon imzoladi.",
        imageUrl: "https://xabar.uz/static/crop/3/9/920__95_3966327434.jpg",
        date: "2024-07-22",
        see: 320
    },
    {
        id: 7,
        category: "Jamiyat",
        title: "Yangi yo'llar qurilmoqda",
        newsText: "O'zbekistonda yangi yo'llar qurilishi boshlandi.",
        imageUrl: "https://www.gazeta.uz/media/img/2021/06/oqkQD416226449380706_b.jpg",
        date: "2024-07-21",
        see: 240
    },
    {
        id: 8,
        category: "Iqtisod",
        title: "O'zbekistonda yangi investitsiya loyihasi",
        newsText: "Yangi investitsiya loyihasi amalga oshirilmoqda.",
        imageUrl: "https://www.spot.uz/media/img/2024/06/aZqTWR17176861072117_l.jpg",
        date: "2024-07-20",
        see: 200
    },
    {
        id: 9,
        category: "Sport",
        title: "Toshkent marafoni o'tkazildi",
        newsText: "Toshkentda katta marafon musobaqasi o'tkazildi.",
        imageUrl: "https://api.zamon.uz/media/news_pictures/2023/08/26/photo2023-06-2515-47-05.medium.webp",
        date: "2024-07-19",
        see: 400
    },
    {
        id: 10,
        category: "Madaniyat",
        title: "Yangi san'at galereyasi ochildi",
        newsText: "Toshkentda yangi san'at galereyasi ochildi.",
        imageUrl: "https://yuz.uz/imageproxy/1200x/https://yuz.uz/file/news/c11c1f72ce73e5c6d9c04508971d9fa6.jpg",
        date: "2024-07-18",
        see: 150
    },
    {
        id: 11,
        category: "Texnologiya",
        title: "Yangi innovatsion markaz ochildi",
        newsText: "O'zbekistonda yangi innovatsion markaz ochildi.",
        imageUrl: "https://telegra.ph/file/e1f779f4b525636350fd6.png",
        date: "2024-07-17",
        see: 275
    },
    {
        id: 12,
        category: "Siyosat",
        title: "Parlamentda yangi qonun loyihasi muhokama qilindi",
        newsText: "O'zbekiston parlamenti yangi qonun loyihasini muhokama qildi.",
        imageUrl: "https://www.gazeta.uz/media/img/2022/12/wmRnDK16714694876879_l.jpg",
        date: "2024-07-16",
        see: 190
    },
];

const topNews = news.sort((a, b) => b.see - a.see).slice(0, 6);

const MainNews = () => {
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

