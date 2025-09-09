import { useEffect, useState } from "react";
import styles from "./Splash.module.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface SplashProps {
  title: string;
  date?: string;
  splashMode?: string;
  eventDetail_without_date?: string;
  fadeOut: boolean;
  mainColor?: string;
}

const Splash: React.FC<SplashProps> = ({
  title,
  date,
  eventDetail_without_date,
  fadeOut,
  mainColor,
  splashMode,
}) => {
  const [mode, setMode] = useState("");

  useEffect(() => {
    setMode(splashMode || "default");
  }, [splashMode]);

  return mode == "default" ? (
    <div id="all_splash_wrapper" className={styles.sp_theme_purple}>
      <div
        className={`${styles.splash} ${styles.trans} animate__animated ${
          fadeOut ? "animate__fadeOut" : ""
        }`}
        style={{ backgroundColor: mainColor, opacity: 0.89 }}
      >
        <div className={styles.ct}>
          <div className={styles["lds-heart"]}>
            <div></div>
          </div>
          <div style={{ lineHeight: "20px", color: "#fff", marginTop: "10px" }}>
            <div className="typing">{title}</div>
          </div>
        </div>
        <div className={`${styles.btext} animate__fadeIn`}>
          {date}
          <br />
          {eventDetail_without_date}
        </div>
      </div>
    </div>
  ) : (
    <div id="all_splash_wrapper" className={styles.sp_theme_purple}>
      <div
        className={`${styles.splash} ${styles.trans} animate__animated ${
          fadeOut ? "animate__fadeOut" : ""
        }`}
        style={{ backgroundColor: mainColor, opacity: 1.0 }}
      >
        <DotLottieReact
          src="https://lottie.host/be647fdf-d6b4-4f2e-9453-da7ad9c7b404/8DXNrknVbP.lottie"
          loop
          autoplay
          style={{ width: "80vw" }}
        />
      </div>
    </div>
  );
};

export default Splash;
