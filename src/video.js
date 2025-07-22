import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import db from "./firebase.js"
export default function Video({onPlay}) {
  const [totalViews, setTotalViews] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "videoViews"), (snapshot) => {
      const count = snapshot.size;
      setTotalViews(1000 + count);
    });

    return () => unsubscribe();
  }, []);
    return(
        <>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quo sit debitis praesentium ducimus delectus minus, eum fuga! Aspernatur dolorem tenetur expedita suscipit nemo ducimus libero quaerat quos repudiandae. Quaerat adipisci vero nemo quo labore, officiis optio reprehenderit iure doloribus quasi, officia eos quae dolorem voluptas consequatur quisquam nobis suscipit.
            </p>
            <div className="video">
                <video controls onPlay={onPlay}>
                    <source src="/video.mp4" type="video/mp4" />
                </video>
                <div>
                    <i className='bx bxs-show'></i>
                    <p>{totalViews !== null ? totalViews : "جارٍ التحميل..."}</p>
                </div>
            </div>
        </>
    )
}