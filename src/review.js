import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Review(){
    const images = [
  "photo_1_2025-07-22_18-00-26.jpg",
  "photo_2_2025-07-22_18-00-26.jpg",
  "photo_3_2025-07-22_18-00-26.jpg",
  "photo_4_2025-07-22_18-00-26.jpg",
  "photo_5_2025-07-22_18-00-26.jpg",
  "photo_6_2025-07-22_18-00-26.jpg",
  "photo_7_2025-07-22_18-00-26.jpg",
  "photo_8_2025-07-22_18-00-26.jpg",
  "photo_9_2025-07-22_18-00-26.jpg",
  "photo_10_2025-07-22_18-00-26.jpg",
  "photo_11_2025-07-22_18-00-26.jpg",
  "photo_12_2025-07-22_18-00-26.jpg",
];

    return(
        <div id="carouselExampleIndicators" className="carousel slide ooo" data-bs-ride="carousel" data-bs-interval="8000">
            <div className="carousel-indicators baccc2">
                {images.map((item, index) => (
                    <button key={index} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} className={`${index === 0 ? 'active' : ''}`} aria-current="true" aria-label={`slide ${index}`}></button>
                ))}
            </div>
            <div className="carousel-inner">
                {images.map((item, index) => (
                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                        <img src={`/./photes/${item}`} className="d-block ccc" alt={index} />
                    </div>
                ))}

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon baccc" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon baccc" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    )
}