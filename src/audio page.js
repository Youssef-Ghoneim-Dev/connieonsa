import Navbar from "./navbar.js";
import Footer from "./footer.js";
import AudioPlayer from "./audio.js";
import "./audio page.css";
export default function Audio() {
  return (
    <div className="audioo">
      <Navbar />
      <p className="header">لقاء من ضمن اللقاءات المباشرة من كورس <strong>مفاتيح الحب الابدي</strong> </p>
        <div className="audio-container">
            <AudioPlayer audioUrl="/record.mp3" title="فن إدارة الخلاف وبناء جسور المودة" />
        </div>
        <div className="infor">
            <p className="description">
                تابعينا لمزيد من الفوائد
            </p>
            <a className="a" href="https://t.me/connieansa" target="blank"><i class='bx bxl-telegram'></i></a>
            <p className="description">
                ورشتنا القادمة <strong>"كوني واثقة"</strong> اسألي عن التفاصيل 
            </p>
            <a className="a" href="https://wa.me/+201146234265" target="blank"><i class='bx bxl-whatsapp'></i></a>
        </div>
        
      <Footer />
    </div>
  );
}