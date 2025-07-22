import { useEffect, useState } from "react";
import { collection, onSnapshot, getDocs, deleteDoc, doc } from "firebase/firestore";
import db from "./firebase.js";
import Navbar from "./navbar.js";
import Footer from "./footer.js";

const Dashboard = () => {
  const [visitorCount, setVisitorCount] = useState(null);
  const [videoViewCount, setVideoViewCount] = useState(null);
  const [visitors, setVisitors] = useState([]);

  async function fetchVisitors() {
    const snapshot = await getDocs(collection(db, "visitors"));
    const visitorsData = snapshot.docs.map(doc => doc.data());
    setVisitors(visitorsData);
  }

  useEffect(() => {
    fetchVisitors();
  }, []);

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

  const resetData = async () => {
    try {
      const visitsSnapshot = await getDocs(collection(db, "visits"));
      visitsSnapshot.forEach(async (document) => {
        await deleteDoc(doc(db, "visits", document.id));
      });

      const viewsSnapshot = await getDocs(collection(db, "videoViews"));
      viewsSnapshot.forEach(async (document) => {
        await deleteDoc(doc(db, "videoViews", document.id));
      });

      setVisitorCount(0);
      setVideoViewCount(0);
    } catch (error) {
      console.error("فشل في التصفير:", error);
    }
  };

  function detectDevice(userAgent = "") {
    userAgent = userAgent.toLowerCase();
    if (userAgent.includes("samsung")) return "Samsung";
    if (userAgent.includes("huawei")) return "Huawei";
    if (userAgent.includes("iphone")) return "iPhone";
    if (userAgent.includes("ipad")) return "iPad";
    if (userAgent.includes("xiaomi")) return "Xiaomi";
    if (userAgent.includes("oppo")) return "Oppo";
    if (userAgent.includes("vivo")) return "Vivo";
    if (userAgent.includes("android")) return "Android";
    if (userAgent.includes("windows")) return "Windows";
    if (userAgent.includes("macintosh")) return "Mac";
    return "غير معروف";
  }

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
            <p>عدد مشاهدات الفيديو: {videoViewCount}</p>
          ) : (
            <p>جارٍ تحميل عدد المشاهدات...</p>
          )}
          <button className="button-call-now" onClick={resetData}>تصفير عدد الزوار والمشاهدات</button>
        </div>
        <div className="overflow">
          <table className="visitor-table">
            <thead>
              <tr>
                <th>المتصفح</th>
                <th>اللغة</th>
                <th>النظام</th>
                <th>الوقت</th>
              </tr>
            </thead>
            <tbody>
              {visitors.map((v, i) => (
                <tr key={i}>
                  <td>{detectDevice(v.userAgent)}</td>
                  <td>{v.language}</td>
                  <td>{v.platform}</td>
                  <td>{v.timestamp?.toDate().toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
