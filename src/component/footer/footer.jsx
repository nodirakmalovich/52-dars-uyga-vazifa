import '../../App.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer_top">
                    <img src="https://namanganliklar24.uz/img/logo-blue.png" alt="" className="footer_top_image" />
                    <div className="footer_top_right">
                        <p className="footer_top_right_text">
                            Бизнинг телеграм каналимизга обуна бўлиб энг сўнгги янгиликлардан хабардор бўлинг:
                        </p>
                        <a href="#" className="footer_top_right_link">
                            Обуна бўлиш
                        </a>
                    </div>
                </div>

                <div className="footer_top_bottom">
                    <ul className="footer_top_bottom_menu footer_top_bottom_menu_first">
                        <li className="footer_top_bottom_menu_item">
                            Фойдаланиш ҳуқуқлари
                        </li>
                        <li className="footer_top_bottom_menu_item">
                            «NAMANGANLIKLAR24.UZ» сайтида эълон қилинган материаллардан нусха кўчириш, тарқатиш ва бошқа шаклларда фойдаланиш фақат таҳририят ёзма розилиги билан амалга оширилиши мумкин.
                        </li>
                    </ul>
                    <ul className="footer_top_bottom_menu">
                        <li className="footer_top_bottom_menu_item">
                            <a href="#" className="footer_top_bottom_menu_item_link">
                                Информация о сайте
                            </a>
                        </li>
                        <li className="footer_top_bottom_menu_item">
                            <a href="#" className="footer_top_bottom_menu_item_link">
                                Мурожаат йўллаш
                            </a>
                        </li>
                        <li className="footer_top_bottom_menu_item">
                            <a href="#" className="footer_top_bottom_menu_item_link">
                                Реклама
                            </a>
                        </li>
                        <li className="footer_top_bottom_menu_item">
                            <a href="#" className="footer_top_bottom_menu_item_link">
                                Хабар юбориш
                            </a>
                        </li>
                    </ul>
                    <ul className="footer_top_bottom_menu">
                        <li className="footer_top_bottom_menu_item">
                            <a href="#" className="footer_top_bottom_menu_item_link">
                                Использование материалов
                            </a>
                        </li>
                        <li className="footer_top_bottom_menu_item">
                            <a href="#" className="footer_top_bottom_menu_item_link">
                                Наша команда
                            </a>
                        </li>
                    </ul>
                    <ul className="footer_top_bottom_menu">
                        <li className="footer_top_bottom_menu_item">
                            Бизни кузатиб боринг
                        </li>
                        <li className="footer_top_bottom_menu_item">
                            <a href="#" className="footer_top_bottom_menu_item_link">
                                Бизнинг Telegram канал
                            </a>
                        </li>
                        <li className="footer_top_bottom_menu_item">
                            <a href="#" className="footer_top_bottom_menu_item_link">
                                Бизнинг Youtube канал
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Footer