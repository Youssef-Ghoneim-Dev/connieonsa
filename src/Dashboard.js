import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import db from "./firebase.js";
import Navbar from "./navbar.js";
import Footer from "./footer.js";

const Dashboard = () => {
  const [visitorCount, setVisitorCount] = useState(null);
  const [videoViewCount, setVideoViewCount] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "visits"), (snapshot) => {
      setVisitorCount(snapshot.size);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "videoViews"), (snapshot) => {
      setVideoViewCount(snapshot.size);
    });

    return () => unsubscribe();
  }, []);
  return (
    <div>
        <Navbar />
        <div className="flex">
            <div className="p">
                {visitorCount !== null ? (
                    <p>عدد الزوار: {visitorCount}</p>
                ) : (
                    <p>جارٍ تحميل عدد الزوار...</p>
                )}

                {videoViewCount !== null ? (
                    <p>عدد مشاهدات الفيديو: <strong>{videoViewCount}</strong></p>
                ) : (
                    <p>جارٍ تحميل عدد المشاهدات...</p>
                )}
            </div>
            <Footer />
        </div>
    </div>
  );
};

export default Dashboard;

