import Notifikasi from "../../../assets/icons/Notifikasi.svg?react";

const NotificationSection = (form, handleChange) =>
{
    return (
        <div className="section">
            <h3>
                <Notifikasi style={{ width: 30, marginRight:8, verticalAlign: "middle" }} />
                Notifikasi
            </h3>
            
            <label>Beritahu Orang Tua                                    
                <input
                    type="checkbox"
                    name="notif1"
                    checked={form.notif1}
                    onChange={handleChange}
                    style={{  marginLeft: "40px" }}
                    defaultChecked= "true"
                />
            </label>

            <label>Notifikasi Orang Tua                                    
                <input
                    type="checkbox"
                    name="notif2"
                    checked={form.notif2}
                    onChange={handleChange}
                    style={{  marginLeft: "33px" }}
                    defaultChecked= "true"
                />
            </label>

        </div>
    )
}

export default NotificationSection