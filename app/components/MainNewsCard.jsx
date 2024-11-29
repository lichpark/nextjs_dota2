"use client";

import Link from "next/link";
import { mainStyle } from "../style/MainStyle";

const MainNewsCard = (props) => {
  // useEffect(() => {
  //     const patg = document.querySelector(".p");
  //     patg.classList.add("fade-enter");
  //     setTimeout(() => patg.classList.add("fade-enter-active"), 1);
  //   }, []);
  function fadeDesc(e) {
    const container = e.currentTarget.querySelector(".content");
    container.style.transform = "translateY(-60%)";
    container.style.backgroundColor = "#13161b";
    container.style.opacity = "0.6";
    container.style.transition = "transform 0.5s ease";
  }

  function hideDesc(e) {
    const container = e.currentTarget.querySelector(".content");
    container.style.transform = "translateY(0)";
    container.style.backgroundColor = "";
  }

  return (
    <Link href="" style={{ width: "28%" }}>
      <div
        className="h-66"
        style={{
          width: "100%",
          backgroundImage: `url(${props.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "flex-end",
          borderBottom: "2px solid gray",
          position: "relative",
          overflow: "hidden",
        }}
        onMouseOver={(e) => fadeDesc(e)}
        onMouseOut={(e) => hideDesc(e)}
      >
        <div
          className="content"
          style={{
            position: "relative",
            transform: "translateY(0)",
            transition: "transform 0.3s ease",
            bottom: "-100px",
          }}
        >
          <div style={{ color: "rgba(255,255,255,.7)", fontSize: "16px" }}>
            {props.date}
          </div>
          <div style={{ color: "#fff", fontSize: "24px" }}>{props.Title}</div>
          <p
            style={{
              color: "#fff",
              fontSize: "14px",
              display: "block", // 항상 표시
              marginTop: "10px",
              overflow: "hidden",
            }}
          >
            {props.desc}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MainNewsCard;
