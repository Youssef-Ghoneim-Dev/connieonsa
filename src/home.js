import React, { useEffect, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import db from "./firebase.js";
import Navbar from "./navbar.js";
import Buttons from "./button.js";
import Footer from "./footer.js";
import Video from "./video.js";
const Home = () => {
  useEffect(() => {
    const alreadyTracked = localStorage.getItem("tracked");
    if (!alreadyTracked) {
      const visit = {
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        platform: navigator.platform,
      };
      addDoc(collection(db, "visits"), visit);
      localStorage.setItem("tracked", "true");
    }
  }, []);
    const [alreadyTracked, setAlreadyTracked] = useState(
    localStorage.getItem("viewed_mainVideo") === "true"
  );

  const handlePlay = async () => {
    if (!alreadyTracked) {
      try {
        await addDoc(collection(db, "videoViews"), {
          videoId: "mainVideo",
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          platform: navigator.platform,
        });
        localStorage.setItem("viewed_mainVideo", "true");
        setAlreadyTracked(true);
      } catch (error) {
        
      }
    }
  };
  return (
    <div>
        <Navbar />
        <div className="flex">
            <Video onPlay={handlePlay}/>
            <Buttons />
            <Footer />
        </div>
    </div>
  );
};

export default Home;
