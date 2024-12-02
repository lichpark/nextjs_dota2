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
    const parent = container.parentElement; // 부모 요소 가져오기

    //동적 높이 계산
    const parentHeight = parent.offsetHeight;
    const containerHeight = container.offsetHeight;
    const translateY = -(parentHeight - containerHeight);
    console.log(parentHeight);
    console.log(containerHeight);
    console.log(translateY);
    container.style.transform = `translateY(${translateY}px)`;
    container.style.backgroundColor = "rgba(0,0,0,0.5)";
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
        className="h-40"
        style={{
          width: "100%",
          backgroundImage: `url(${props.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "flex-end",
          borderBottom: "2px solid gray",

          overflow: "hidden",
        }}
        onMouseOver={(e) => fadeDesc(e)}
        onMouseOut={(e) => hideDesc(e)}
      >
        <div
          className="content"
          style={{
            transform: "translateY(0)",
            transition: "transform 0.3s ease",
            bottom: "-100px",
            width: "100%",
          }}
        >
          <div style={{ color: "rgba(255,255,255,.7)", fontSize: "16px" }}>
            {props.date}
          </div>
          <div
            style={{ color: "#fff", fontSize: "24px" }}
            className="newsTitle"
          >
            {props.Title}
          </div>
          <p
            style={{
              color: " rgba(255, 255, 255, 0.7)",
              fontSize: "14px",
              display: "none", // 항상 표시
              marginTop: "10px",
              overflow: "hidden",
              height: "60px",
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
