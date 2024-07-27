import '../../App.css';

export default function Virus() {
    return (
        <div className='container'>
            <div className="virus">
                <div className="virus_row">
                    <div className="virus_row_col_3">
                        <img src="https://namanganliklar24.uz/img/covid.png" alt="" className="virus_row_col_3_image" />
                        <p className="virus_row_col_3_text">Коронавирус COVID-19 Ўзбекистонда</p>
                    </div>
                    <div className="virus_row_col_3">
                        <img src="https://namanganliklar24.uz/img/infected.png" alt="infected" className="virus_row_col_3_image" />
                        <p className="virus_row_col_3_text">Инфекцияланганлар</p>
                    </div>
                    <div className="virus_row_col_3">
                        <img src="https://namanganliklar24.uz/img/recovered.png" alt="recovered" className="virus_row_col_3_image" />
                        <p className="virus_row_col_3_text">Соғайганлар</p>
                    </div>
                    <div className="virus_row_col_3 virus_row_col_3_last">
                        <img src="https://namanganliklar24.uz/img/died.png" alt="died" className="virus_row_col_3_image" />
                        <p className="virus_row_col_3_text">Вафот этганлар</p>
                    </div>
                </div>
            </div>
        </div>
    )
}