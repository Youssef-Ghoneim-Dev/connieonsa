// import { useEffect, useState } from "react";
// import { collection, onSnapshot } from "firebase/firestore";
// import db from "./firebase.js"
export default function Video() {
    // { onPlay }
    // const [totalViews, setTotalViews] = useState(null);

    // useEffect(() => {
    //     const unsubscribe = onSnapshot(collection(db, "videoViews"), (snapshot) => {
    //         const count = snapshot.size;
    //         setTotalViews(1000 + count);
    //     });

    //     return () => unsubscribe();
    // }, []);
    return (
        <>
            <p>
                فيديو واحد ممكن يكون بداية لحب أبدي وانسجام حقيقي في علاقتك الزوجية
            </p>
            <div className="video">
                <video controls controlsList="nodownload" >
                    <source src="/video.mp4" type="video/mp4" />
                </video>
            </div>
        </>
    )
}