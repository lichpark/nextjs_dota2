"use client";
import Link from "next/link";
import { useEffect } from "react";

const MainIntro = () => {
  useEffect(() => {
    const page = document.querySelector(".page");
    page.classList.add("fade-enter");
    setTimeout(() => page.classList.add("fade-enter-active"), 1);
  }, []);
  const detailSizeUP = (e) => {
    e.target.style.fontSize = "20px";
  };
  const detailSizeDown = (e) => {
    e.target.style.fontSize = "14px";
  };

  return (
    <div style={{ position: "relative" }}>
      <video autoPlay muted loop playsInline>
        <source
          type="video/webm"
          src="https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/homepage/dota_montage_webm.webm"
        />
        <source
          type="video/mp4"
          src="https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/homepage/dota_montage_02.mp4"
        />
      </video>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "10%",
          color: "white",
        }}
        className="page"
      >
        <div style={{ fontSize: "40px" }}>
          "도타가 LOL보다 먼저 였던거 아시죠?"
        </div>
        <div>-카오스로 워3를 입문한 플레이어</div>
        <div
          style={{
            backgroundColor: "#ff6046",
            width: "80px",
            height: "3px",
            minHeight: "3px",
            borderRadius: "1px",
            marginTop: "10px",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "0%",
          left: "3%",
          color: "white",
          display: "flex",
          gap: "15px",
          padding: "10px",
          alignItems: "end",
        }}
      >
        <div>최신 소식</div>
        <Link href="/">
          <div
            style={{ color: "#d0d1d3", letterSpacing: "3px" }}
            onMouseOver={detailSizeUP}
            onMouseLeave={detailSizeDown}
          >
            모두 보기{" "}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MainIntro;
