import '../../App.css';
import SubscribeBtn from '../buttons/subsribeBtn';


export default function NavbarTop() {
    return (
        <div className="Navbar">
            <div className="container">
                <div className="Navbar_row">
                    <img src="https://namanganliklar24.uz/img/logo.png" alt="namanganliklar24" className="Navbar-row-logo" />
                    <ul className="Navbar_row_menu">
                        <li className="Navbar_row_menu_item">
                            <a href="#" className="Navbar_row_menu_item_link">
                                <span className='Navbar_row_menu_item_link_img'>$</span>
                                <span className='Navbar_row_menu_item_link_currency'>12634.00</span>
                            </a>
                        </li>
                        <li className="Navbar_row_menu_item">
                            <a href="#" className="Navbar_row_menu_item_link">
                                <span className='Navbar_row_menu_item_link_img'>P</span>
                                <span className='Navbar_row_menu_item_link_currency'>148.62</span>
                            </a>
                        </li>
                        <li className="Navbar_row_menu_item">
                            <a href="#" className="Navbar_row_menu_item_link">
                                <span className='Navbar_row_menu_item_link_img'>E</span>
                                <span className='Navbar_row_menu_item_link_currency'>13710.42</span>
                            </a>
                        </li>
                        <li className="Navbar_row_menu_item">
                            <p className="Navbar_row_menu_item_link">
                                +35°
                            </p>
                        </li>
                    </ul>
                    <div className="Navbar_row_actions">
                        <form className="Navbar_row_actions_form">
                            <input type="text" className="Navbar_row_actions_search" />
                            <button type='submit' className="Navbar_row_actions_search_btn"></button>
                        </form>
                        <select className='Navbar_row_actions_select'>
                            <option className='Navbar_row_actions_select_opt'>Uzb</option>
                            <option className='Navbar_row_actions_select_opt'>Rus</option>
                        </select>
                        <SubscribeBtn />
                    </div>

                </div>

                <div className="Navbar_categories">
                    <ul className="Navbar_categories_menu">
                        <li className="Navbar_categories_menu_item">
                            <a href="#" className="Navbar_categories_menu_item_link">
                                Ўзбекистон
                            </a>
                        </li>
                        <li className="Navbar_categories_menu_item">
                            <a href="#" className="Navbar_categories_menu_item_link">
                                Бокс
                            </a>
                        </li>
                        <li className="Navbar_categories_menu_item">
                            <a href="#" className="Navbar_categories_menu_item_link">
                                Дунё
                            </a>
                        </li>
                        <li className="Navbar_categories_menu_item">
                            <a href="#" className="Navbar_categories_menu_item_link">
                                Сиёсат
                            </a>
                        </li>
                        <li className="Navbar_categories_menu_item">
                            <a href="#" className="Navbar_categories_menu_item_link">
                                Наманган
                            </a>
                        </li>
                        <li className="Navbar_categories_menu_item">
                            <a href="#" className="Navbar_categories_menu_item_link">
                                Шоу Бизнес
                            </a>
                        </li>
                        <li className="Navbar_categories_menu_item">
                            <a href="#" className="Navbar_categories_menu_item_link">
                                Иқтисодиёт
                            </a>
                        </li>
                        <li className="Navbar_categories_menu_item">
                            <a href="#" className="Navbar_categories_menu_item_link">
                                Спорт
                            </a>
                        </li>
                        <li className="Navbar_categories_menu_item">
                            <a href="#" className="Navbar_categories_menu_item_link">
                                Технологиялар
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}