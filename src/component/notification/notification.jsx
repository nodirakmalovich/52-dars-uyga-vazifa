import '../../App.css';


function Notification() {
    return (
        <div className='container'>
            <div className="notification">
                <div className="notification_row">
                    <img className='notification_row_image' src="https://namanganliklar24.uz/img/notification.png" alt="notification_row_image" />
                    <h2 className="notification_row_text">
                        Янгиликлардан биринчи бўлиб ҳабардор бўлмоқчимисиз? Ҳабарларни сизга тўғридан тўғри юборишимиз учун обуна бўлинг!
                    </h2>
                    <button className="notification_row_btn">
                        Обуна бўлиш!
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Notification;