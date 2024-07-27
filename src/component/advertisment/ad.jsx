import '../../App.css';

const Addvertisment = () => {
    return (
        <div className="container">
            <div className="advertisment">
                <div className="advertisment_row">
                    <div className="advertisment_row_left">
                        <img src="https://namanganliklar24.uz/img/phone.png" alt="phone" className="advertisment_row_left_image" />
                        <div className="advertisment_row_left_text">
                            <h2 className="advertisment_row_left_text_title">
                                Сўнгги янгиликлардан доим ҳабардор бўлинг!
                            </h2>
                            <p className="advertisment_row_left_text_description">
                                NAMANGANLIKLAR24 мобил иловасини ўрнатинг ва барча янгиликлар энди сизнинг чўнтагингизда!
                            </p>
                        </div>
                    </div>

                    <div className="advertisment_row_left_right">
                        <button className="advertisment_row_left_right_btn">
                            <img className='advertisment_row_left_right_btn_img' src="https://namanganliklar24.uz/img/googleplay.png" alt="googleplay" />
                        </button>

                        <button className="advertisment_row_left_right_btn">
                            <img className='advertisment_row_left_right_btn_img' src="https://namanganliklar24.uz/img/appstore.png" alt="googleplay" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addvertisment